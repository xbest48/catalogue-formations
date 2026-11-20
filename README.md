# Catalogue des formations — mini-projet fil rouge

Mastère MEPN · Module Framework · Angular 22 (données fictives).

Ce projet sert de démonstration de la demi-journée 4 à la demi-journée 7.
Il ne contient volontairement que l'interface (Angular) : en demi-journée 7,
les données viendront d'une API NestJS au lieu d'être écrites dans le service.

## Ouvrir le projet sans rien installer (atelier)

1. Publier ce dossier dans un dépôt GitHub public (sans node_modules).
2. Ouvrir `https://stackblitz.com/github/<compte>/<depot>` : StackBlitz installe
   les dépendances et lance l'application dans le navigateur.
3. Chaque apprenant clique sur « Fork » pour obtenir sa propre copie modifiable.

## Lancer le projet sur un poste (formateur)

Prérequis : Node.js 22 ou plus récent.

    npm install
    npm start          # puis ouvrir http://localhost:4200

## Où regarder

| Fichier | Rôle |
|---|---|
| src/app/models/formation.ts | Le modèle : la forme d'une formation |
| src/app/services/formation.service.ts | Le service : les données et la logique partagée (injection de dépendances) |
| src/app/components/header/ | Composant en-tête |
| src/app/components/formation-card/ | Composant carte (réutilisé pour chaque formation) |
| src/app/pages/formation-list/ | Page liste avec filtre par niveau |
| src/app/pages/formation-detail/ | Page détail (identifiant lu dans l'adresse) |
| src/app/app.routes.ts | Le routage : une adresse = une page |

## Ateliers

Les commentaires `ATELIER 1` à `ATELIER 4` dans les fichiers `.html` indiquent
les modifications à faire pendant la demi-journée 4.
