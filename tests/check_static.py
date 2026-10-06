from html.parser import HTMLParser
from pathlib import Path
import json

root = Path(__file__).resolve().parent.parent
class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.ids = []; self.references = []; self.titles = 0; self.h1 = 0
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a: self.ids.append(a['id'])
        if tag == 'title': self.titles += 1
        if tag == 'h1': self.h1 += 1
        for key in ('src', 'href'):
            if a.get(key): self.references.append(a[key])
p = Page(); p.feed((root / 'index.html').read_text(encoding='utf-8-sig'))
assert len(p.ids) == len(set(p.ids)), 'Duplicate IDs'
assert p.titles == 1 and p.h1 == 1, 'Title / H1 count'
for ref in p.references:
    if ref.startswith('#'): assert ref[1:] in p.ids, f'Missing anchor {ref}'
    elif not ref.startswith(('http:', 'https:', 'mailto:')): assert (root / ref.split('?')[0]).is_file(), f'Missing asset {ref}'
json.loads((root / 'vercel.json').read_text(encoding='utf-8-sig'))
assert 'prefers-reduced-motion' in (root / 'styles.css').read_text(encoding='utf-8-sig')
print(f'PASS: unique IDs, title, H1, {len(p.references)} resources/anchors, Vercel JSON, reduced motion')
