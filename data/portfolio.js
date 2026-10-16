/* Sources : CV, LinkedIn, informations fournies et dépôts publics inspectés. Voir SOURCES.md. */
window.portfolio = {
  "locale": "fr-FR",
  "name": "Safae Chouai",
  "links": {
    "email": "chouaisafae3@gmail.com",
    "github": "https://github.com/safae23",
    "linkedin": "https://www.linkedin.com/in/safae-chouai",
    "cv": "assets/CV_CHOUAI_Safae.pdf?v=20261016-2",
    "site": null
  },
  "education": [
    {
      "stage": "01 / MASTER 2",
      "title": "Master 2 · Technologies de l’information, option Big Data et IA",
      "school": "Université Marie et Louis Pasteur",
      "location": "Montbéliard, France",
      "period": "Sept. 2025 – Sept. 2026"
    },
    {
      "stage": "02 / CYCLE INGÉNIEUR",
      "title": "Diplôme d’ingénieur · Data Science et Cloud Computing",
      "school": "École Nationale des Sciences Appliquées d’Oujda",
      "location": "Oujda, Maroc",
      "period": "Sept. 2023 – Juil. 2026"
    },
    {
      "stage": "03 / PRÉPA",
      "title": "Cycle préparatoire",
      "school": "École Nationale des Sciences Appliquées d’Oujda",
      "location": "Oujda, Maroc",
      "period": "Sept. 2021 – Juil. 2023"
    }
  ],
  "certifications": [
    {
      "name": "AWS Academy Graduate · Cloud Foundations",
      "issuer": "Amazon Web Services",
      "url": "https://www.credly.com/badges/aed6d17b-70a1-48d0-913f-88dc4f4c58a0/linked_in_profile",
      "badge": "AWS",
      "date": "Juin 2025",
      "linkLabel": "Voir le certificat"
    },
    {
      "name": "Data Scientist Career Track",
      "issuer": "365 Data Science",
      "url": "https://learn.365datascience.com/certificates/DD-534A0E7DFE/",
      "badge": "365",
      "date": "Novembre 2024",
      "linkLabel": "Voir le certificat"
    },
    {
      "name": "Artificial Intelligence Fundamentals",
      "issuer": "IBM",
      "date": "Juillet 2024",
      "badge": "IBM",
      "credential": null,
      "url": "https://www.credly.com/badges/d96a598a-9e40-4e2d-9208-e1bb748b1971/linked_in_profile",
      "linkLabel": "Voir le certificat"
    },
    {
      "name": "Python for Data Science, AI & Development",
      "issuer": "IBM",
      "date": "Janvier 2024",
      "badge": "IBM",
      "credential": "CAJEQENKQT69",
      "url": "https://www.coursera.org/account/accomplishments/verify/CAJEQENKQT69",
      "linkLabel": "Voir le certificat"
    },
    {
      "name": "Intro to Data Engineering",
      "issuer": "365 Data Science",
      "date": "Novembre 2024",
      "badge": "365",
      "credential": "CC-CBE5585A8D",
      "url": "https://learn.365datascience.com/certificates/CC-CBE5585A8D/",
      "linkLabel": "Voir le certificat"
    },
    {
      "name": "Git and GitHub",
      "issuer": "365 Data Science",
      "date": "Novembre 2024",
      "badge": "365",
      "credential": "CC-4FA310F224",
      "url": "https://learn.365datascience.com/certificates/CC-4FA310F224/",
      "linkLabel": "Voir le certificat"
    },
    {
      "name": "Comprendre et gérer les positions de vie en négociation",
      "issuer": "L’IFIC · Institut de la Formation à Distance de la Francophonie",
      "date": "Mars 2025",
      "badge": "IFIC",
      "credential": null,
      "url": "https://certificate.bcdiploma.com/check/E18C8930913215FCCEED35B37A5E9700DBCB2D26863CC1AC84B3ABCA14D4FB86SnV6RlBkUTJBVUh4VS9lWnZidktVd0MwbDFPZEs0VXUxdUpMYmtBMmNHRjZtTG13",
      "linkLabel": "Voir le certificat"
    }
  ],
  "projects": [
    {
      "id": "monitoring",
      "number": "02",
      "category": "CLOUD / OBSERVABILITÉ",
      "title": "Kubernetes\nMonitoring",
      "name": "Monitoring cloud-native",
      "description": "Une plateforme de supervision Kubernetes avec collecte des métriques, tableaux de bord Grafana et routage des alertes.",
      "organization": "Monitoring cloud-native",
      "type": "Projet de portfolio · Dépôt public",
      "tags": [
        "Kubernetes",
        "Prometheus",
        "Grafana",
        "Docker"
      ],
      "problem": "Suivre l’état de services conteneurisés et détecter les situations nécessitant une intervention.",
      "solution": "Une stack de supervision sur un cluster K3d, avec Prometheus, Grafana et Alertmanager. Une mini-application Flask composée d’une passerelle et de deux services sert de support aux tests.",
      "architecture": "Microservices Flask conteneurisés → déploiements et services Kubernetes → collecte Prometheus / Node Exporter → tableaux de bord Grafana et alertes Alertmanager. Le README décrit le déploiement via Helm.",
      "contribution": "Mise en place du système de supervision mentionnée au CV. Le dépôt contient les microservices, les Dockerfiles, les manifestes Kubernetes et les scripts de test.",
      "evaluation": "Tests unitaires, d’intégration et scripts de charge k6 présents dans le dépôt. Le script inspecté simule 10 utilisateurs pendant 30 secondes ; il ne constitue pas une preuve de capacité en production.",
      "stack": [
        "Python",
        "Flask",
        "Docker",
        "Kubernetes",
        "K3d",
        "Helm",
        "Prometheus",
        "Grafana",
        "Alertmanager",
        "pytest",
        "k6"
      ],
      "github": "https://github.com/safae23/Plateforme-de-monitoring-cloud-native",
      "source": "CV + README, arborescence, service Flask, manifeste Kubernetes et script k6",
      "limits": "Environnement de démonstration local. Aucune mesure de disponibilité ou de performance en production revendiquée.",
      "metrics": null,
      "status": "verified",
      "featured": false,
      "demo": null,
      "todos": [],
      "group": "engineering",
      "primary": true
    },
    {
      "id": "nlp",
      "number": "03",
      "category": "NLP / CLASSIFICATION DE TEXTE",
      "title": "Sentiment\nAnalysis",
      "name": "Classification des avis ChatGPT",
      "description": "Un pipeline de classification des sentiments en trois classes, du nettoyage des textes à la comparaison de réseaux récurrents et de BERT.",
      "organization": "NLP · Avis ChatGPT",
      "type": "Projet de portfolio · Dépôt public",
      "tags": [
        "TensorFlow",
        "PyTorch",
        "BERT",
        "Scikit-learn"
      ],
      "problem": "Transformer des avis textuels en catégories de sentiment pour analyser les retours utilisateurs.",
      "solution": "Nettoyage des avis, création des labels à partir des notes, vectorisation des textes et expérimentation de plusieurs modèles : RNN, LSTM, GRU, variantes avec attention et BERT.",
      "architecture": "CSV → nettoyage NLP → labels négatif / neutre / positif dérivés des notes → séparation stratifiée entraînement/test (80/20) → tokenisation → entraînement → rapports de classification et matrices de confusion. Les réseaux récurrents utilisent Keras ; BERT utilise Transformers et PyTorch.",
      "contribution": "Analyse NLP mentionnée au CV. Le notebook du dépôt documente la préparation des données, les architectures, l’entraînement et les comparaisons de modèles.",
      "evaluation": "Le notebook contient des rapports de classification, des matrices de confusion et une comparaison des métriques. Aucun score agrégé n’est repris ici sans réexécution et harmonisation du protocole.",
      "stack": [
        "Python",
        "Pandas",
        "NLTK",
        "TensorFlow",
        "Keras",
        "PyTorch",
        "Transformers",
        "Scikit-learn"
      ],
      "github": "https://github.com/safae23/Classification-des-Avis-ChatGPT-avec-NLP",
      "source": "CV + README et cellules du notebook projet2.ipynb",
      "limits": "Les sentiments sont dérivés des notes utilisateurs, et non d’une annotation indépendante des textes. Notebook exploratoire, sans API de production.",
      "metrics": null,
      "status": "verified",
      "featured": false,
      "demo": null,
      "todos": [],
      "group": "ai",
      "primary": true
    },
    {
      "id": "jobs",
      "number": "04",
      "category": "DATA / BUSINESS INTELLIGENCE",
      "title": "Power BI\nEmploi Data Science",
      "name": "Dashboard emploi Data Science",
      "description": "Une collecte d’offres via l’API France Travail, enrichie en Python et restituée dans un dashboard Power BI.",
      "organization": "Dashboard emploi Data Science",
      "type": "Projet de portfolio · Dépôt public",
      "tags": [
        "Python",
        "Pandas",
        "Power BI",
        "REST API"
      ],
      "stack": [
        "Python",
        "Pandas",
        "Power BI",
        "REST API",
        "Requests"
      ],
      "problem": "Structurer les offres d’emploi Data pour explorer les métiers, les lieux, les compétences et les niveaux d’expérience.",
      "solution": "Un script interroge vingt intitulés de métiers, extrait les champs des offres, détecte des compétences et des niveaux par mots-clés, puis exporte les données nettoyées en CSV.",
      "architecture": "API France Travail → extraction Python/Requests → enrichissement et déduplication Pandas → CSV → Power BI. Le dépôt inclut le fichier PBIX et un export PDF du dashboard.",
      "contribution": "Le dépôt présente un script interroge vingt intitulés de métiers, extrait les champs des offres, détecte des compétences et des niveaux par mots-clés, puis exporte les données nettoyées en CSV.",
      "evaluation": "Le dépôt fournit un jeu de données exporté et les fichiers du dashboard. Les résultats représentent les offres collectées, sans prétendre couvrir tout le marché de l’emploi.",
      "limits": "La détection des compétences et niveaux repose sur des règles lexicales ; elle peut produire des approximations. La collecte inspectée ne parcourt pas toutes les pages de résultats.",
      "github": "https://github.com/safae23/Dashboard-Emploi-Data-Science-2025",
      "source": "README et code du dépôt public",
      "metrics": null,
      "status": "verified",
      "featured": false,
      "demo": null,
      "todos": [],
      "flow": [
        "API",
        "CSV",
        "Power BI"
      ],
      "group": "data",
      "primary": true
    },
    {
      "id": "regression",
      "number": "05",
      "category": "STATISTIQUES / MODÉLISATION",
      "title": "Expliquer les coûts.\nComparer les modèles.",
      "name": "Régression multiple avec R",
      "description": "Une étude des charges médicales à partir du jeu insurance.csv, avec régression multiple et diagnostic des résidus.",
      "organization": "Régression multiple avec R",
      "type": "Projet de portfolio · Dépôt public",
      "tags": [
        "R",
        "ggplot2",
        "lmtest",
        "car"
      ],
      "stack": [
        "R",
        "ggplot2",
        "lmtest",
        "car",
        "caret"
      ],
      "problem": "Étudier les relations entre les charges médicales et des variables telles que l’âge, l’IMC ou le tabagisme.",
      "solution": "Un script explore les données, transforme les variables catégorielles et compare plusieurs régressions linéaires à l’aide de l’AIC.",
      "architecture": "insurance.csv → exploration → découpage 80/20 par ordre des lignes → modèles lm → diagnostics des résidus, VIF et influence → prédictions et erreurs.",
      "contribution": "Le dépôt présente un script explore les données, transforme les variables catégorielles et compare plusieurs régressions linéaires à l’aide de l’AIC.",
      "evaluation": "Le script prévoit les tests de Shapiro et Breusch–Pagan, le VIF, les distances de Cook, une validation croisée et les métriques MSE/RMSE. Aucun score n’est revendiqué sans réexécution.",
      "limits": "Étude exploratoire sur un jeu de données, sans usage médical opérationnel. Les étapes de diagnostic et d’évaluation utilisent des variantes de modèle qu’il faut harmoniser pour une comparaison définitive.",
      "github": "https://github.com/safae23/Regression-Multiple-avec-R",
      "source": "README et code du dépôt public",
      "metrics": null,
      "status": "verified",
      "featured": false,
      "demo": null,
      "todos": [],
      "flow": [
        "Données",
        "Modèle R",
        "Diagnostics"
      ],
      "group": "data",
      "primary": false
    },
    {
      "id": "scraping",
      "number": "06",
      "category": "DATA / COLLECTE WEB",
      "title": "Du catalogue web\naux données structurées.",
      "name": "Web scraping Jumia",
      "description": "Des scripts Python pour extraire les informations de produits et les exporter en CSV ou Excel.",
      "organization": "Web scraping Jumia",
      "type": "Projet de portfolio · Dépôt public",
      "tags": [
        "Python",
        "BeautifulSoup",
        "Pandas",
        "Requests"
      ],
      "stack": [
        "Python",
        "BeautifulSoup",
        "Pandas",
        "Requests",
        "requests_html"
      ],
      "problem": "Transformer des pages de catalogue en données tabulaires réutilisables pour l’analyse.",
      "solution": "Deux scripts explorent des pages Jumia : l’un collecte des noms, prix et images ; l’autre visite les fiches produits pour récupérer marques, notes et nombres d’avis.",
      "architecture": "Pages catalogue → requêtes HTTP → extraction HTML et fiches produits → structuration → exports CSV ou Excel.",
      "contribution": "Le dépôt présente deux scripts explorent des pages Jumia : l’un collecte des noms, prix et images ; l’autre visite les fiches produits pour récupérer marques, notes et nombres d’avis.",
      "evaluation": "Les scripts et les formats d’export sont consultables dans le dépôt. La collecte n’a pas été relancée et aucun volume ou taux de réussite n’est annoncé.",
      "limits": "Les sélecteurs dépendent du HTML du site. Les URL et sélecteurs doivent être revérifiés avant toute nouvelle collecte.",
      "github": "https://github.com/safae23/Web-Scraping-Jumia",
      "source": "README et code du dépôt public",
      "metrics": null,
      "status": "verified",
      "featured": false,
      "demo": null,
      "todos": [],
      "flow": [
        "Pages web",
        "Extraction",
        "CSV / Excel"
      ],
      "group": "data",
      "primary": false
    },
    {
      "id": "timeseries",
      "number": "07",
      "category": "DATA SCIENCE / SÉRIES TEMPORELLES",
      "title": "Comprendre une série.\nExplorer ses prévisions.",
      "name": "Séries temporelles · Action Microsoft",
      "description": "Une étude du cours de clôture de l’action Microsoft comparant ARIMA et plusieurs architectures de réseaux de neurones.",
      "organization": "Séries temporelles · Action Microsoft",
      "type": "Projet de portfolio · Dépôt public",
      "tags": [
        "Python",
        "Statsmodels",
        "TensorFlow",
        "Pandas"
      ],
      "stack": [
        "Python",
        "Statsmodels",
        "TensorFlow",
        "Pandas",
        "Scikit-learn"
      ],
      "problem": "Explorer la structure temporelle d’une série de prix et comparer des approches de prévision.",
      "solution": "Un notebook prépare Microsoft_Stock.csv, étudie la stationnarité et les autocorrélations, puis expérimente ARIMA, un réseau dense, RNN, LSTM et GRU.",
      "architecture": "Cours de clôture → préparation et exploration temporelle → séparation chronologique entraînement/test → ARIMA et réseaux neuronaux → comparaison des erreurs.",
      "contribution": "Le dépôt présente un notebook prépare Microsoft_Stock.csv, étudie la stationnarité et les autocorrélations, puis expérimente ARIMA, un réseau dense, RNN, LSTM et GRU.",
      "evaluation": "Le code calcule notamment MAE et MSE et recherche les paramètres ARIMA par AIC. Aucun modèle gagnant ni score de performance n’est repris sans reproduire l’expérience.",
      "limits": "Le notebook traite de cours boursiers, et non des ventes du Microsoft Store. Il s’agit d’une expérimentation historique, pas d’un outil de conseil ou de décision financière.",
      "github": "https://github.com/safae23/Microsoft-store-Analysis-avec-time-series",
      "source": "README et code du dépôt public",
      "metrics": null,
      "status": "verified",
      "featured": false,
      "demo": null,
      "todos": [],
      "flow": [
        "Série",
        "ARIMA / DL",
        "Prévisions"
      ],
      "group": "ai",
      "primary": false
    },
    {
      "id": "sentiment",
      "number": "08",
      "category": "NLP / APPLICATION STREAMLIT",
      "title": "Lire un texte.\nExplorer son sentiment.",
      "name": "Application d’analyse de sentiments",
      "description": "Une interface Streamlit pour explorer la polarité et la subjectivité de textes avec TextBlob et exporter des analyses.",
      "organization": "Application d’analyse de sentiments",
      "type": "Projet de portfolio · Dépôt public",
      "tags": [
        "Python",
        "Streamlit",
        "TextBlob",
        "Pandas"
      ],
      "stack": [
        "Python",
        "Streamlit",
        "TextBlob",
        "Pandas",
        "cleantext"
      ],
      "problem": "Proposer une interface simple pour tester l’analyse de sentiment sur un texte ou une liste de commentaires.",
      "solution": "Une application calcule la polarité et la subjectivité du texte saisi, attribue un sentiment et permet le nettoyage ainsi que l’analyse d’un fichier Excel.",
      "architecture": "Saisie de texte ou fichier Excel → TextBlob → polarité et classes positif/neutre/négatif → tableau et visualisation → export CSV.",
      "contribution": "Le dépôt présente une application calcule la polarité et la subjectivité du texte saisi, attribue un sentiment et permet le nettoyage ainsi que l’analyse d’un fichier Excel.",
      "evaluation": "L’interface et le traitement sont présents dans main.py, avec une capture dans le dépôt. Aucune mesure de précision n’est publiée dans cette fiche.",
      "limits": "Prototype exploratoire : le fichier importé doit respecter le schéma attendu. Le calcul des pourcentages du graphique doit être corrigé avant toute interprétation quantitative.",
      "github": "https://github.com/safae23/Analyse-des-sentiments",
      "source": "README et code du dépôt public",
      "metrics": null,
      "status": "verified",
      "featured": false,
      "demo": null,
      "todos": [],
      "flow": [
        "Texte",
        "TextBlob",
        "Sentiment"
      ],
      "group": "ai",
      "image": "assets/sentiment-preview.png",
      "imageAlt": "Interface Streamlit du projet : saisie de texte et import de fichier pour analyser les sentiments.",
      "primary": false
    }
  ],
  "experiences": [
    {
      "company": "CPage",
      "role": "Stage AI Engineer · Dijon, France",
      "period": "Mars – Août 2026",
      "text": "Conception et développement d’un assistant de recherche documentaire RAG, intégré à une plateforme de gestion électronique des documents (GED).",
      "contributions": [
        "Conception d’un assistant conversationnel RAG intégré à une plateforme de gestion électronique des documents.",
        "Développement du microservice Python/FastAPI : chunking et génération des embeddings avec CamemBERT.",
        "Combinaison de la recherche sémantique et lexicale dans OpenSearch, avec réordonnancement des résultats.",
        "Évaluation sur un jeu de test annoté avec RAGAS et LLM-as-a-Judge.",
        "Participation à l’intégration de l’assistant dans l’interface Angular de la GED."
      ],
      "label": "PYTHON · FASTAPI · OPENSEARCH · LLAMAINDEX · DOCKER",
      "status": "verified",
      "caseStudy": {
        "id": "rag",
        "number": "01",
        "category": "GENERATIVE AI / RECHERCHE DOCUMENTAIRE",
        "title": "Le bon contexte.\nUne réponse utile.",
        "name": "Assistant RAG documentaire",
        "description": "Un assistant conversationnel intégré à une GED : recherche hybride, réordonnancement et génération de réponses à partir d’un corpus documentaire réel.",
        "organization": "CPage",
        "type": "Projet professionnel · Stage",
        "tags": [
          "FastAPI",
          "OpenSearch",
          "LlamaIndex",
          "RAGAS"
        ],
        "problem": "Faciliter la recherche d’information dans les documents d’une plateforme de gestion électronique documentaire.",
        "solution": "Conception et développement d’un assistant RAG, exposé par un microservice Python/FastAPI et intégré à la plateforme documentaire.",
        "architecture": "Documents → chunking → embeddings CamemBERT → recherche hybride sémantique et lexicale dans OpenSearch → réordonnancement → contexte → génération via Mistral API. LlamaIndex intervient dans la stack RAG ; l’interface est intégrée à la GED avec Angular.",
        "contribution": "J’ai conçu et développé l’assistant documentaire et son microservice Python/FastAPI : découpage des documents, génération des embeddings CamemBERT, recherche hybride via OpenSearch et réordonnancement des résultats. J’ai évalué le pipeline et participé à son intégration dans l’interface Angular de la GED.",
        "evaluation": "Évaluation de la pertinence et de la fiabilité du pipeline avec RAGAS et LLM-as-a-Judge sur un jeu de test annoté : 95 % de Context Recall et 91,6 % d’accuracy de bout-en-bout.",
        "stack": [
          "Python",
          "FastAPI",
          "OpenSearch",
          "CamemBERT",
          "LlamaIndex",
          "Mistral API",
          "RAGAS",
          "Angular",
          "Docker",
          "Linux",
          "Git"
        ],
        "github": null,
        "source": "CV · Stage CPage, mars–août 2026",
        "limits": null,
        "metrics": [
          {
            "value": "95 %",
            "label": "Context Recall"
          },
          {
            "value": "91,6 %",
            "label": "Accuracy bout-en-bout"
          }
        ],
        "status": "verified",
        "featured": true,
        "demo": null,
        "todos": []
      },
      "stack": [
        "Python",
        "FastAPI",
        "OpenSearch",
        "CamemBERT",
        "LlamaIndex",
        "Mistral API",
        "RAGAS",
        "Angular",
        "Docker",
        "Linux",
        "Git"
      ]
    },
    {
      "company": "Projet de fin d’études — VoyagePlus",
      "role": "Université Marie et Louis Pasteur · Projet académique encadré · Montbéliard, France",
      "period": "Septembre 2025 – Janvier 2026",
      "text": "Conception et développement de VoyagePlus, un assistant intelligent multi-agents pour faciliter la planification de voyages selon la destination, les dates et le budget.",
      "contributions": [
        "Développement de quatre agents spécialisés dans la recherche de vols, d’hébergements, d’activités et d’informations météorologiques.",
        "Orchestration des agents avec Google ADK et A2A, et intégration de LiteLLM pour la synthèse des résultats.",
        "Création d’une interface Streamlit regroupant les résultats, avec export d’un carnet de voyage en PDF."
      ],
      "stack": [
        "Google ADK",
        "A2A",
        "LiteLLM",
        "Python",
        "FastAPI",
        "Streamlit"
      ],
      "status": "verified",
      "caseStudy": {
        "id": "travel",
        "number": "01",
        "category": "SYSTÈMES MULTI-AGENTS / ORCHESTRATION",
        "title": "Multi-Agent\nTravel Assistant",
        "name": "VoyagePlus — Projet de fin d’études",
        "description": "Conception et développement de VoyagePlus, un assistant intelligent multi-agents pour faciliter la planification de voyages selon la destination, les dates et le budget.",
        "organization": "Université Marie et Louis Pasteur",
        "type": "Projet académique encadré",
        "tags": [
          "Google ADK",
          "A2A",
          "LiteLLM",
          "Python",
          "FastAPI",
          "Streamlit"
        ],
        "problem": "Préparer un voyage demande de consulter plusieurs sources. VoyagePlus rassemble les propositions dans une seule interface à partir de la destination, des dates et du budget.",
        "solution": "Conception et développement de VoyagePlus, un assistant intelligent multi-agents pour faciliter la planification de voyages selon la destination, les dates et le budget.",
        "architecture": "Interface Streamlit → API FastAPI → coordinateur Google ADK → quatre agents spécialisés exécutés en parallèle. Mode local ou communication distribuée via A2A. Synthèse des résultats par un LlmAgent connecté via LiteLLM.",
        "contribution": "Développement de quatre agents spécialisés dans la recherche de vols, d’hébergements, d’activités et d’informations météorologiques. Orchestration des agents avec Google ADK et A2A, et intégration de LiteLLM pour la synthèse des résultats. Création d’une interface Streamlit regroupant les résultats, avec export d’un carnet de voyage en PDF.",
        "evaluation": "Tests automatisés des agents, du transport A2A, des erreurs et de l’interface. Workflow GitHub réussi sur la version du 5 octobre 2026.",
        "stack": [
          "Google ADK",
          "A2A",
          "LiteLLM",
          "Python",
          "FastAPI",
          "Streamlit"
        ],
        "github": "https://github.com/safae23/VoyagePlus",
        "source": "Dépôt VoyagePlus vérifié au commit 354f90f ; intitulé et dates fournis par Safae.",
        "limits": "Les prix observés restent à confirmer auprès des fournisseurs. Le budget couvre les vols et l’hébergement ; les repas, activités et transports locaux restent à prévoir. Les appels réels nécessitent les clés API correspondantes.",
        "metrics": null,
        "status": "verified",
        "featured": false,
        "demo": null,
        "todos": [],
        "group": "engineering",
        "primary": false
      }
    },
    {
      "company": "Yadag Technologies Inc",
      "role": "AI Automation Engineer | Stage · Casablanca, Maroc",
      "period": "Juin – Octobre 2025",
      "text": "Conception et développement de Melissa, une assistante conversationnelle multilingue sur WhatsApp pour automatiser les interactions des producteurs agricoles.",
      "contributions": [
        "Conception et développement de Melissa, une assistante conversationnelle multilingue pour les producteurs agricoles.",
        "Connexion du canal WhatsApp Business via Twilio.",
        "Orchestration des workflows conversationnels et des tâches opérationnelles avec n8n.",
        "Intégration de GPT-4 et Whisper pour le traitement multimodal des échanges."
      ],
      "label": "OPENAI API · WHISPER · TWILIO · N8N",
      "status": "verified",
      "caseStudy": {
        "id": "assistant",
        "number": "02",
        "category": "NLP / AUTOMATISATION CONVERSATIONNELLE",
        "title": "Melissa.\nL’IA au service du terrain.",
        "name": "Melissa · Assistante WhatsApp",
        "description": "Une assistante multilingue pour les producteurs agricoles, intégrant les échanges WhatsApp et des workflows automatisés.",
        "organization": "Yadag Technologies Inc",
        "type": "Projet professionnel · Stage",
        "tags": [
          "GPT-4",
          "Whisper",
          "Twilio",
          "n8n"
        ],
        "problem": "Automatiser les interactions des producteurs agricoles et les tâches opérationnelles associées aux conversations.",
        "solution": "Développement de Melissa, une assistante conversationnelle multilingue sur WhatsApp, avec traitement multimodal via GPT-4 et Whisper.",
        "architecture": "Canal WhatsApp Business connecté via Twilio → workflows n8n → appels aux services OpenAI (GPT-4 et Whisper) → échanges avec les utilisateurs. Schéma fonctionnel synthétisé à partir du CV.",
        "contribution": "J’ai conçu et développé Melissa pour les producteurs agricoles, connecté le canal WhatsApp Business via Twilio et orchestré les workflows avec n8n. J’ai intégré GPT-4 et Whisper pour le traitement multimodal et automatisé les échanges et les tâches opérationnelles.",
        "evaluation": "Automatisation des conversations et des tâches opérationnelles, avec un gain de temps estimé de 5 à 10 heures par semaine pour les utilisateurs.",
        "stack": [
          "OpenAI API",
          "GPT-4",
          "Whisper",
          "Twilio",
          "n8n",
          "WhatsApp Business API"
        ],
        "github": null,
        "source": "CV · Stage Yadag, juin–octobre 2025",
        "limits": null,
        "metrics": [
          {
            "value": "5–10 h / semaine",
            "label": "temps opérationnel estimé économisé"
          }
        ],
        "status": "verified",
        "featured": false,
        "demo": null,
        "todos": []
      },
      "stack": [
        "OpenAI API",
        "GPT-4",
        "Whisper",
        "Twilio",
        "n8n",
        "WhatsApp Business API"
      ]
    }
  ],
  "domains": [
    {
      "icon": "✳",
      "title": "IA générative & RAG",
      "items": [
        "RAG",
        "LangChain",
        "LlamaIndex",
        "Mistral API",
        "OpenAI API",
        "RAGAS",
        "LLM-as-a-Judge"
      ]
    },
    {
      "icon": "◇",
      "title": "Machine Learning & NLP",
      "items": [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "BERT",
        "CamemBERT",
        "LSTM",
        "GRU",
        "Whisper"
      ]
    },
    {
      "icon": "⌘",
      "title": "Langages",
      "items": [
        "Python",
        "Java",
        "C",
        "HTML/CSS"
      ]
    },
    {
      "icon": "▤",
      "title": "Données & bases de données",
      "items": [
        "SQL",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "OpenSearch",
        "Talend"
      ]
    },
    {
      "icon": "▥",
      "title": "Visualisation & applications Data",
      "items": [
        "Power BI",
        "Streamlit",
        "Grafana"
      ]
    },
    {
      "icon": "◎",
      "title": "Cloud & DevOps",
      "items": [
        "AWS",
        "Docker",
        "Kubernetes",
        "Prometheus",
        "Linux",
        "Git"
      ]
    },
    {
      "icon": "↗",
      "title": "Développement web & API",
      "items": [
        "FastAPI",
        "API REST",
        "Angular"
      ]
    },
    {
      "icon": "⇄",
      "title": "Automatisation & intégration",
      "items": [
        "n8n",
        "Twilio",
        "WhatsApp Business API"
      ]
    },
    {
      "icon": "✧",
      "title": "Assistants IA",
      "items": [
        "Microsoft Copilot",
        "Claude Code",
        "Codex"
      ]
    }
  ]
};
