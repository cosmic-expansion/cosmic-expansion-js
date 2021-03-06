import { expect } from 'chai';

import { getStretchValues } from '../../src/stretch-range';

const steps = getStretchValues({
  stretch: [1090 + 1, 0.01],
  steps: 10,
  exponentialSteps: true,
});

describe('Step range calculations', function () {
  it('should calculate steps for the default inputs', function () {
    expect(steps).to.eql([
      1091, 340.0326542332193, 105.97819060026406, 33.0302891298275,
      10.294570928419706, 3.2085153776193307, 1, 0.31622776601683794, 0.1,
      0.0316227766016838, 0.01,
    ]);
  });

  it('should calculate the right number of steps', function () {
    expect(steps.length).to.equal(11);
  });

  it('should calculate redshift 0 exactly', function () {
    expect(steps[6] - 1).to.equal(0);
  });

  it('should calculate exponential steps', function () {
    const steps = getStretchValues({
      stretch: [8, 0.25],
      steps: 5,
      exponentialSteps: true,
    });
    expect(steps).to.eql([8, 4, 2, 1, 0.5, 0.25]);
  });

  it('should calculate linear steps', function () {
    const steps = getStretchValues({ stretch: [1.044, 0.964, 2], steps: 8 });
    expect(steps).to.eql([
      1.044, 1.033, 1.022, 1.0110000000000001, 1, 0.991, 0.982, 0.973, 0.964,
    ]);
  });

  it('should not duplicate z = 0 if this starts or ends the range', function () {
    let steps = getStretchValues({ stretch: [3, 1], steps: 2 });
    expect(steps).to.eql([3, 2, 1]);
    steps = getStretchValues({ stretch: [1, 0.8], steps: 2 });
    expect(steps).to.eql([1, 0.9, 0.8]);
  });
});
