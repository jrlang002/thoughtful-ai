/*
    ### Rules

    Sort the packages using the following criteria:

    - A package is **bulky** if its volume (Width x Height x Length) is greater than or equal to 1,000,000 cm³
            or when one of its dimensions is greater or equal to 150 cm.
    - A package is **heavy** when its mass is greater or equal to 20 kg.

    You must dispatch the packages in the following stacks:

    - **STANDARD**: standard packages (those that are not bulky or heavy) can be handled normally.
    - **SPECIAL**: packages that are either heavy or bulky can't be handled automatically.
    - **REJECTED**: packages that are **both** heavy and bulky are rejected.

    ### Implementation

    Implement the function **`sort(width, height, length, mass)`**
    (units are centimeters for the dimensions and kilogram for the mass).
    This function must return a string: the name of the stack where the package should go.
*/

export const MAX_VOLUME = 1000000
export const MAX_SIZE_LENGTH = 150
export const MAX_MASS = 20
export const PACKAGE_TYPES = {
    STANDARD: "STANDARD",
    SPECIAL: "SPECIAL",
    REJECTED: "REJECTED"
}

/**
 * Checks to see if package dimensions are bulky
 * @param {number} width
 * @param {number} height
 * @param {number} length
 * @returns {boolean}
 */
export function isBulky( width: number, height: number, length: number ) : boolean {
    // A package is **bulky** if its volume (Width x Height x Length) is greater than or equal to 1,000,000 cm³
    if ( ( width * height * length ) >= MAX_VOLUME ) 
        return true;

    // A package is **bulky** if one of its dimensions is greater or equal to 150 cm.
    if ( width >= MAX_SIZE_LENGTH || height >= MAX_SIZE_LENGTH || length >= MAX_SIZE_LENGTH ) 
        return true;

    return false;
}

/**
 * Checks to see if a package mass is heavy
 * @param {number} mass
 * @returns {boolean}
 */
export function isHeavy( mass: number ): boolean {
    // A package is **heavy** when its mass is greater or equal to 20 kg.
    if ( mass >= MAX_MASS ) 
        return true;

    return false;
}

/**
 *
 * @param {number} width
 * @param {number} height
 * @param {number} length
 * @param {number} mass
 * @returns string
 */
export function sort( width: number, height: number, length: number, mass: number ) {
    const bulky: boolean = isBulky( width, height, length );
    const heavy: boolean = isHeavy( mass );

    if ( bulky && heavy ) {
        console.log( `Package is: ${PACKAGE_TYPES.REJECTED}` )
        return PACKAGE_TYPES.REJECTED;
    }

    if ( bulky || heavy ) {
        console.log( `Package is: ${PACKAGE_TYPES.SPECIAL}` )
        return PACKAGE_TYPES.SPECIAL;
    }

    console.log( `Package is: ${PACKAGE_TYPES.STANDARD}` )
    return PACKAGE_TYPES.STANDARD;
}