import { expect } from 'chai';
// eslint-disable-next-line
// @ts-ignore
import planck2018Close from '../data/planck-2018-close.js';
// eslint-disable-next-line
// @ts-ignore
import planck2018Wide from '../data/planck-2018-wide.js';

import { create } from '../../src/model.js';

describe('Expansion calculations', function () {
  it('should calculate the age for Planck 2018', function () {
    // Current age of the universe.
    const t0 = 13.797;
    expect(create().age).not.to.be.closeTo(t0, 0.002);
    const model = create({ survey: 'planck2018' });
    expect(model.age).to.be.closeTo(t0, 0.002);
  });

  it('should calculate expansion for the default inputs (Planck 2018+BAO)', function () {
    // Current age of the universe.
    const t0 = 13.787;
    // Redshift at separation.
    const zstar = 1089.8;
    // Radius at separation.
    // const rstar = (144.57 * 3.26156) / 1000;

    const model = create();
    expect(model.age).to.be.closeTo(t0, 0.0012);

    const [atSeparation, now] = model.calculateExpansion({
      // ## z_* ##, the redshift at photon separationfrom Planck 2018 is 1089.8
      stretch: [1 + zstar, 1],
    });

    // This validates the integration of THs to infinity.
    // (13.8Gy since big bang).

    expect(now.z).to.equal(0);
    expect(now.t).to.be.closeTo(t0, 0.0012);
    expect(now.dNow).to.equal(0);
    expect(now.d).to.equal(0);
    expect(now.vGen).to.equal(1);
    expect(now.vNow).to.equal(0);
    expect(now.v).to.equal(0);

    expect(atSeparation.z).to.equal(zstar);
    expect(atSeparation.a).to.equal(1 / (1 + zstar));
    expect(atSeparation.s).to.equal(1 + zstar);

    // expect(atSeparation.Dnow / 45.35442113146).to.be.closeTo(1, 1e-5);
    // expect(atSeparation.Dthen).to.be.closeTo(rstar, 1e-5);
    // expect(result.Dhor / 5.673735574007e-2).to.be.closeTo(1, 1e-6);
    // expect(atSeparation.t / 3.71973267559e-4).to.be.closeTo(1, 1e-3);
  });

  it('should calculate expansion for values close to s = 1', function () {
    const results = create().calculateExpansion({
      stretch: [
        1.1, 1.09, 1.08, 1.07, 1.06, 1.05, 1.04, 1.03, 1.02, 1.01, 1, 0.99,
        0.98, 0.97, 0.96, 0.95, 0.94, 0.93, 0.92, 0.91, 0.9,
      ],
      // stretch: [1.1, 0.9],
      // steps: 20,
    });

    // Values taken from
    // https://www.physicsforums.com/threads/a-glitch-in-jorries-cosmo-calculator.1014779/post-6632672
    const tol = 0.005;
    expect(results[0].dNow).to.be.closeTo(1.41004, tol);
    expect(results[1].dNow).to.be.closeTo(1.27214, tol);
    expect(results[2].dNow).to.be.closeTo(1.13354, tol);
    expect(results[3].dNow).to.be.closeTo(0.99426, tol);
    expect(results[4].dNow).to.be.closeTo(0.85427, tol);
    expect(results[5].dNow).to.be.closeTo(0.7136, tol);
    expect(results[6].dNow).to.be.closeTo(0.57225, tol);
    expect(results[7].dNow).to.be.closeTo(0.43023, tol);
    expect(results[8].dNow).to.be.closeTo(0.28748, tol);
    expect(results[9].dNow).to.be.closeTo(0.14408, tol);
    expect(results[10].dNow).to.equal(0);
    expect(results[11].dNow).to.be.closeTo(0.14474, tol);
    expect(results[12].dNow).to.be.closeTo(0.29015, tol);
    expect(results[13].dNow).to.be.closeTo(0.43623, tol);
    expect(results[14].dNow).to.be.closeTo(0.58295, tol);
    expect(results[15].dNow).to.be.closeTo(0.73032, tol);
    expect(results[16].dNow).to.be.closeTo(0.87834, tol);
    expect(results[17].dNow).to.be.closeTo(1.02699, tol);
    expect(results[18].dNow).to.be.closeTo(1.17631, tol * 2);
    expect(results[19].dNow).to.be.closeTo(1.32623, tol * 2);
    expect(results[20].dNow).to.be.closeTo(1.47679, tol * 2);
  });

  describe('Calculations with Planck 2018 values', function () {
    it('should calculate a close range around z = 0', async function () {
      const results = create({ survey: 'planck2018' }).calculateExpansion({
        stretch: [1.1, 0.9],
        steps: 20,
      });

      let count = 0;
      results.forEach((result, i) => {
        Object.entries(result).forEach(([key, value]) => {
          expect(value).to.equal(planck2018Close[i][key]);
          ++count;
        });
      });
      // Make sure we have tested every value we expect.
      expect(count).to.equal(399);
    });

    it('should calculate the default range', async function () {
      const results = create({ survey: 'planck2018' }).calculateExpansion({
        stretch: [10000, 0.01],
        steps: 10,
        exponentialSteps: true,
      });

      let count = 0;
      results.forEach((result, i) => {
        Object.entries(result).forEach(([key, value]) => {
          expect(value).to.equal(planck2018Wide[i][key]);
          ++count;
        });
      });
      // Make sure we have tested every value we expect.
      expect(count).to.equal(209);
    });
  });
});
