import { expect } from 'chai';

import * as constants from '../../src/physical-constants.js';

describe('Constants and conversions', function () {
  describe('Constants', function () {
    it('should include the defined value of c exactly', function () {
      expect(constants.c).to.equal(299792458);
    });

    it('should include g as recommended in CODATA 2018', function () {
      expect(constants.g).to.equal(6.67430e-11);
    });

    it('should calculate rhoConst using the CODATA 2018 value of G to machine precision', function () {
      expect(constants.rhoConst).to.equal(3 / (8 * Math.PI * constants.g));
      expect(constants.rhoConst).to.equal(1.7884453398e9 + 6.967175324e-2);
    });
  });

  describe('Conversions', function () {
    it('should include the defined value of an AU exactly', function () {
      expect(constants.auToM).to.equal(149597870700);
    });

    it('should convert gigayears to seconds exactly', function () {
      expect(constants.gyrToSeconds).to.equal(1e9 * 365.25 * 24 * 60 * 60);
    });

    it('should convert the Hubble constant to per giga light year to machine precision', function () {
      expect(constants.kmsmpscToGyr).to.equal(1.0227121650e-3 + 4.569493657e-14);
    });

    it('should convert light years to metres to machine precision', function () {
      expect(constants.lyToM).to.equal(9.4607304725e15 + 8.08e4);
    });

    it('should convert parsecs to light years to machine precision', function () {
      expect(constants.parsecToLy).to.equal(3.2615637771 + 6.743356213e-11);
    });

    it('should convert parsecs to metres to machine precision', function () {
      expect(constants.parsecToM).to.equal(3.0856775814e16 + 9.136727891e5);
    });
  });
});

