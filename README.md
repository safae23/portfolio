# Portfolio - Safae Chouai

Portfolio Data & IA : experiences, projets, competences, formation, certifications et benevolat.
Site statique HTML/CSS/JavaScript, sans compilation.

## Lancement local

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Ouvrir http://localhost:4173 et laisser le terminal ouvert.

## Fichiers

- index.html : presentation, textes et benevolat.
- data/portfolio.js : experiences, projets, competences et parcours.
- design.css : mise en page actuelle.
- styles.css : styles de base.
- app.js : affichage et interactions.
- assets/CV_CHOUAI_Safae.pdf : CV telechargeable.

Enregistrer les textes en UTF-8 pour conserver les accents.
Le bouton de contact ouvre un brouillon Gmail sans envoyer de message.

## Verification

```powershell
python tests/check_static.py
```

## Vercel

Importer le depot, preset Other, sans commande de build, sortie a la racine.
Configuration dans vercel.json. Credits des logos : assets/logos/SOURCES.md.
