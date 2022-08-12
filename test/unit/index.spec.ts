import { expect } from 'chai';
import { readFileSync } from 'fs';

import * as CosmicExpansion from '../../src/index.js';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import api from '../api.cjs';

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

describe('The entry point', function () {
  it('should have the same version as package.json', function () {
    expect(CosmicExpansion.version).to.equal(pkg.version);
  });

  it('should expose the correct API', function () {
    expect(Object.keys(CosmicExpansion).sort()).to.eql(api.sort());
  });
});
