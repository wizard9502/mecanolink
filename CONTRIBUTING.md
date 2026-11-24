# Contribuer à MecanoLink

Bienvenue @Ahmadou44 👋

1. Forkez ou clonez le dépôt, puis créez une branche : `git checkout -b feature/ma-feature`.
2. Gardez `core.js` sans DOM : toute nouvelle logique doit être testable dans `tests/core.test.mjs`.
3. Ajoutez un test pour chaque nouveau comportement, puis lancez `npm test`.
4. Vérifiez le rendu à 390 px (téléphone) et 1024 px.
5. Ouvrez une PR décrivant le changement et les tests effectués.

## Conventions

- Français par défaut, clés d'interface dans `I18N` (`core.js`) pour tout nouveau libellé visible.
- Aucune donnée réelle de client, aucun appel API externe sans accord préalable.
- Les prix et références sont fictifs : ne les présentez pas comme des données catalogue réelles.
