/**
 * Speed of light (c).
 *
 * c = 299,792,458 m/s by definition.
 */
export const c = 299792458;

/**
 * Gravitational constant G.
 *
 * G = 6.674 30(15)e-11 m^3 kg-1 s-2 (https://physics.nist.gov/constants)
 */
export const g = 6.6743e-11;

/**
 * \\( \frac{3}{8 \pi G} \\)
 * ~1.78844 53398 69671 75324 24796 9868579134180130851632893841
 */
export const rhoConst = 1.7884453398696718e9;

// Conversions -----------------------------------------------------------------
/**
 * Convert astornomical units to metres.
 *
 * 1 AU = 149,597,870,700 m by definition.
 */
export const auToM = 149597870700;

/**
 * Convert gigayears to seconds.
 *
 * Calculated as 1e9 years * 365.25 days * 86,400 s using a Julian Year.
 *
 * @see https://www.iau.org/public/themes/measuring/
 */
export const gyrToSeconds = 3.15576e16;

/**
 * Conversion factor for the Hubble parameter.
 *
 * Convert from \\( km.s^{-1}Mpsc^{-1} \\) to Gyr. Calculation:
 *   - 1 parsec = \\( 648,000 / \pi \\) au.
 *   - 1 au = 149,597,870,700 m.
 *   - 1 parsec = \\( \frac{96,939,420,213,600,000}\pi \\) m
 *   - 1 Gyr = \\( 1e9 \times 365.25 \times 86,400 \\) s.
 * \\( \frac{3.15576e16 \pi }{96,939,420,213,600,000} \\)
 * \\( \frac{3.15576e16 \pi }{1495978707} \\)
 * $$\frac{487,000}{1,495,978,707} \pi \approx 1.02271 21650 45694 937 e-3$$
 */
export const kmsmpscToGyr = 1.022712165045695e-3;

/**
 * Convert light years to metres.
 *
 * 299792458 * 365.25 * 86400 = 9,460,730,472,580,800.  This is larger than
 * MAX_SAFE_INTEGER but is stored exactly as a float.
 */
export const lyToM = 9.4607304725808e15;

/**
 * Convert parsecs to light years.
 * \\(\frac{149,597,870,700 \times 648,000}{(299,792,458 \times 365.25 \times 86400)\pi}\\)
 * \\(\frac{969,394,202,136,000}{94,607,304,725,808\pi}\\)
 * ~3.26156 37771 67433 56213
 * Note the last digit is not an error, it is a 7 due to machine epsilon.
 */
export const parsecToLy = 3.2615637771674337;

/**
 * Convert parsecs to metres.
 *
 * - 1 parsec = \\( 648,000 / \pi \\) au.
 * - 1 au = 149,597,870,700 m.
 * - 1 parsec = \\( \frac{648,000 \times 149,597,870,700}\pi \\) m
 * \\( \frac{96,939,420,213,600,000}\pi \\)
 * ~3.08567 75814 91367 27891 e16
 */
export const parsecToM = 3.085677581491367e16;
