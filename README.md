# MecanoLink 🚗🔧

**Pièces auto pour le Sénégal & l'Afrique de l'Ouest** — une PWA interactive, reconstructrice et améliorée d'un concept Gemini Canvas (« Application Pièces Auto »).

> ⚠️ **Démo.** Catalogue, prix, garages, VIN, paiements Mobile Money et SOS sont **fictifs** et fonctionnent entièrement dans le navigateur. Aucun appel réseau externe, aucun paiement réel, aucune donnée personnelle collectée.

## Ce qui a changé par rapport à la maquette d'origine

| Maquette Gemini | MecanoLink v1 |
|---|---|
| Écran statique sombre/orange | App interactive complète (5 écrans + 8 panneaux) |
| Recherche décorative | Recherche accent-insensible + tri (prix, note, stock) |
| Bouton « VIN / IA » factice | Assistant local qui parse texte + VIN et explique ses recommandations |
| Bandeau entretien | Radar d'entretien calculé depuis le kilométrage modifiable |
| Panier / favoris en chiffres | Panier réel avec barre d’accès, quantités, Mobile Money simulé, facture et réachat |
| SOS 24/7 indicatif | Panneau SOS avec demande simulée et garages à proximité |
| Une seule langue | FR / EN, villes et frais de livraison, mode hors-ligne (PWA) |
| Icônes vectorielles | Vraies photos de pièces (Wikimedia Commons), intégrées hors-ligne |
| Aucune animation | Mouvements progressifs : entrées en cascade, compteurs, survol, pressions, panneaux |

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwizard9502%2Fmecanolink&project-name=mecanolink&repository-name=mecanolink)

## Démarrer

```bash
python3 -m http.server 8080
# ouvrir http://localhost:8080
```

Aucune installation, aucun build, aucune dépendance. Node 18+ suffit pour les tests :

```bash
npm test
```

## Parcours à essayer

1. Modifiez le kilométrage dans **Garage** → le radar d'entretien se recalcule.
2. Ouvrez **VIN / IA** → touchez « plaquettes hilux 2020 » → recommandations expliquées.
3. Ajoutez deux pièces au panier → livraison express → payez avec Wave → confirmation et confettis.
4. Retrouvez la commande dans **Commandes**, touchez « Commander à nouveau ».
5. Coupez le réseau et rechargez : l'app s'ouvre hors-ligne (service worker).

## Structure

```
core.js            données + logique pure (testable, sans DOM)
app.js             interface, événements, panneaux
index.html         coquille de l'application
styles.css         système visuel mobile-first
motion.css/js      couche de mouvements (respecte prefers-reduced-motion)
sw.js              cache hors-ligne
tests/             tests node:test
docs/DESIGN.md     décisions de conception
docs/ORIGIN.md     ce qui a pu être récupéré du lien Gemini
```

## Collaboration

Le dépôt est public et **Ahmadou44** est invité comme collaborateur. Voir [CONTRIBUTING.md](CONTRIBUTING.md).

## Licence

MIT — voir [LICENSE](LICENSE).
