# Design — MecanoLink v1

## Intention

Transformer un écran de maquette en une démo que l'on peut réellement utiliser : trouver une pièce compatible, suivre l'entretien, passer une commande et demander de l'aide, avec des gestes qui fonctionnent hors-ligne.

## Approches envisagées

1. **Reproduire la maquette à l'identique** — fidèle mais toujours statique ; rejeté (la demande était d'améliorer et de surprendre).
2. **PWA statique sans build** — retenu : zéro dépendance, s'ouvre partout, testable en Node, installable sur téléphone.
3. **Application React/Next avec backend** — écarté : aucun service externe n'est disponible et les données commerciales sont fictives.

## Décisions

- `core.js` contient les données et la logique pure ; `app.js` ne fait que rendre et dispatcher les événements.
- L'assistant VIN/IA est **local et déterministe** : il parse le texte et le VIN, filtre par compatibilité et explique son choix. Pas de faux appel à une API d'IA.
- Le radar d'entretien dérive son état du kilométrage saisi, avec trois niveaux (à faire / bientôt / OK).
- Paiement, SOS et garages sont des simulations clairement étiquetées.
- Palette sombre + orange conservée de la maquette, avec contraste renforcé et cibles tactiles ≥ 34 px.
- Persistance dans `localStorage`, cache applicatif avec un service worker.

## Non-objectifs

- Prix, stocks et disponibilités réels.
- Authentification, backend, collecte de données.
- Diagnostic mécanique ou conseil de sécurité routière.
