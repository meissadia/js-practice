/**
 * Roman to Arabic number map
 */
const numberMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'C': 100,
    'M': 1000,    
}

/**
 * Maps a single Roman numeral to an Arabic Integer
 * @param {String} romanNumeral 
 */
const mapR2A = romanNumeral => numberMap[romanNumeral];

/**
 * Method to convert Roman numeral String to an Arabic Integer
 * @param {String} romanNumerals 
 * @param {Number} previousArabic 
 * @return {Number}
 */
const romanToArabic = (romanNumerals = '', previousArabic = Number.POSITIVE_INFINITY) => {
    if(doneProcessing(romanNumerals)) return 0;
    var convertedArabic = mapR2A(romanNumerals[0]);

    // Subtract Case
    if(convertedArabic > previousArabic) 
        convertedArabic = convertedArabic - (2 * previousArabic);
     
    return convertedArabic + romanToArabic(romanNumerals.substr(1), convertedArabic);
};

const doneProcessing = elem => (typeof elem !== 'string' || elem === '');

module.exports = {
    romanToArabic,
    numberMap,
    mapR2A
}


