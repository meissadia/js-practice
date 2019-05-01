const { expect } = require('chai');
const { romanToArabic } = require('./romanToArabic');

/**
 * Test Suite
 */
const test = () => {
    // Base Case
    expect(romanToArabic()).to.eql(0);
    expect(romanToArabic('')).to.eql(0);
    expect(romanToArabic([])).to.equal(0);
    // Straigh Forward Conversion
    expect(romanToArabic('M')).to.equal(1000);
    expect(romanToArabic('viii')).to.eql(8);
    // Simple Subtraction case
    expect(romanToArabic('IX')).to.eql(9);
    // Complex Subtraction case
    expect(romanToArabic('MXIX')).to.equal(1019);
    // Expected output of invalid input
    expect(romanToArabic('MCVIIX')).to.equal(1115);
}

test();