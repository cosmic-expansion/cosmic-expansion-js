# CosmicExpansion

> A Javascript cosmological calculator for the expansion of the universe.

This code is parked for the move to cosmic-expansion.

## Quick start

For use in a browser include minimized code from the CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/cosmic-expansion"></script>
```

API:

```js
const options = {};
const model = CosmicExpansion.create(options);
const nearResults = model.calculateExpansion({
  stretch: [1.01, 0.99],
  steps: 10,
});
const farResults = model.calculateExpansion({
  stretch: [5001, 0.0001],
  steps: 10,
  exponentialSteps: true,
});
```

## Development

Pull requests against the `develop` branch welcome.
