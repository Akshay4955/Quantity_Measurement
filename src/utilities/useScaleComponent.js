/**
 * Scales the given size proportionally based on the device's height.
 *
 * @function
 * @param {number} size - The size to be scaled.
 * @returns {number} The scaled size based on the device's height.
 */
export const scaleHeight = size => (height / assumeHeight) * size;

/**
 * Scales the given size proportionally based on the device's width.
 *
 * @function
 * @param {number} size - The size to be scaled.
 * @returns {number} The scaled size based on the device's width.
 */
export const scaleWidth = size => (width / assumeWidth) * size;

/**
 * Scales the given size proportionally based on both the device's height and width.
 *
 * @function
 * @param {number} size - The size to be scaled.
 * @returns {number} The scaled size based on both the device's height and width.
 */
export const scaleSize = size => (width / assumeWidth) * (height / assumeHeight) * size;