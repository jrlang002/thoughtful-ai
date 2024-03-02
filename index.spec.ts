import { sort, isBulky, isHeavy, MAX_VOLUME, MAX_SIZE_LENGTH, MAX_MASS, PACKAGE_TYPES } from './index'

describe('sort', () => {
    it('returns SPECIAL if max volume is greater than 1000000', () => {
        expect( sort( 100, 100, 101, 15 ) ).toBe( PACKAGE_TYPES.SPECIAL )
    });

    it('returns SPECIAL if max volume is equal to 1000000', () => {
        expect( sort( 100, 100, 100, 15 ) ).toBe( PACKAGE_TYPES.SPECIAL )
    });

    it('returns SPECIAL if width is greater than 150', () => {
        expect( sort( 151, 100, 100, 15 ) ).toBe( PACKAGE_TYPES.SPECIAL )
    });

    it('returns SPECIAL if width is equal to 150', () => {
        expect( sort( 150, 100, 100, 15 ) ).toBe( PACKAGE_TYPES.SPECIAL )
    });

    it('returns SPECIAL if height is greater than 150', () => {
        expect( sort( 100, 151, 100, 15 ) ).toBe( PACKAGE_TYPES.SPECIAL )
    });

    it('returns SPECIAL if height is equal to 150', () => {
        expect( sort( 100, 150, 100, 15 ) ).toBe( PACKAGE_TYPES.SPECIAL )
    });

    it('returns SPECIAL if length is greater than 150', () => {
        expect( sort( 100, 100, 151, 15 ) ).toBe( PACKAGE_TYPES.SPECIAL )
    });

    it('returns SPECIAL if length is equal to 150', () => {
        expect( sort( 100, 100, 150, 15 ) ).toBe( PACKAGE_TYPES.SPECIAL )
    });

    it('returns REJECTED if package is heavy and bulky', () => {
        expect( sort( 100, 100, 100, 20 ) ).toBe( PACKAGE_TYPES.REJECTED )
    });

    it('returns STANDARD if bulky or heavy is not flagged as true', () => {
        expect( sort( 50, 100, 25, 15 ) ).toBe( PACKAGE_TYPES.STANDARD )
    });
});

describe('isBulky', () => {
    it(`returns true if volume is greater than ${MAX_VOLUME}`, () => {
        const a = isBulky( 100, 100, 101 )
        expect( a ).toBe( true )
    });

    it(`returns true if volume is equal to ${MAX_VOLUME}`, () => {
        const a = isBulky( 100, 100, 100 )
        expect( a ).toBe( true )
    });

    it(`returns true if width is greater than ${MAX_SIZE_LENGTH}`, () => {
        const a = isBulky( 151, 100, 50 )
        expect( a ).toBe( true )
    });

    it(`returns true if width is equal to ${MAX_SIZE_LENGTH}`, () => {
        const a = isBulky( 150, 100, 50 )
        expect( a ).toBe( true )
    });

    it(`returns true if height is greater than ${MAX_SIZE_LENGTH}`, () => {
        const a = isBulky( 50, 151, 50 )
        expect( a ).toBe( true )
    });

    it(`returns true if height is equal to ${MAX_SIZE_LENGTH}`, () => {
        const a = isBulky( 50, 150, 50 )
        expect( a ).toBe( true )
    });

    it(`returns true if length is greater than ${MAX_SIZE_LENGTH}`, () => {
        const a = isBulky( 50, 100, 151 )
        expect( a ).toBe( true )
    });

    it(`returns true if length is equal to ${MAX_SIZE_LENGTH}`, () => {
        const a = isBulky( 50, 100, 150 )
        expect( a ).toBe( true )
    });

    it(`returns false if volums is less than ${MAX_VOLUME} and each dimension is less than ${MAX_SIZE_LENGTH}`, () => {
        const a = isBulky( 50, 50, 50 )
        expect( a ).toBe( false )
    });
});

describe('isHeavy', () => {
    it(`returns true if mass is greater than ${MAX_MASS}`, () => {
        const a = isHeavy( 21 )
        expect( a ).toBe( true )
    });

    it(`returns true if mass is equal to ${MAX_MASS}`, () => {
        const a = isHeavy( 20 )
        expect( a ).toBe( true )
    });

    it(`returns false if mass is less than ${MAX_MASS}`, () => {
        const a = isHeavy( 19 )
        expect( a ).toBe( false )
    });
});