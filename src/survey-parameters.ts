export interface CosmicExpansionSurvey {
  h0: number;
  omegaLambda0?: number;
  omegaM0?: number;
  zEq: number;
  sigma8?: number;
  omega0: number;
  temperature0: number;
  age?: number;
}

/**
 * Parameters from the Planck 2018 survey with baryon acoustic oscillations
 * (BAO) data.
 *
 * Planck 2018: https://arxiv.org/abs/1807.06209
 */
export const planck2018Bao: CosmicExpansionSurvey = {
  h0: 67.66,
  omegaM0: 0.3111,
  zEq: 3387,
  omega0: 1,
  temperature0: 2.72548,
  age: 13.787,
};

/**
 * Parameters from the Planck 2018 survey.
 *
 * Planck 2018: https://arxiv.org/abs/1807.06209
 */
export const planck2018: CosmicExpansionSurvey = {
  h0: 67.36,
  // omegaLambda0: 0.6847,
  omegaM0: 0.3153,
  sigma8: 0.8111,
  zEq: 3402,
  omega0: 1,
  temperature0: 2.72548,
  age: 13.797,
};

/**
 * Parameters from the Planck 2015 survey - unverified.
 *
 * @todo Verify Planck 2015 parameters.
 */
export const planck2015: CosmicExpansionSurvey = {
  h0: 67.74,
  omegaLambda0: 0.691,
  zEq: 3370,
  omega0: 1,
  temperature0: 2.72548,
};

/**
 * Parameters from the WMAP 2013 survey - unverified.
 *
 * @todo Verify WMAP 2013 parameters.
 */
export const wmap2013: CosmicExpansionSurvey = {
  h0: 69.8,
  omegaLambda0: 0.72,
  zEq: 3300,
  omega0: 1,
  temperature0: 2.72548,
};
