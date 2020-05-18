/*

    Since ECMAScript 6 you can format numbers natively. This helps you to do a localized formatting for numbers.

 */

const l10nEN = new Intl.NumberFormat("en-US");
const l10nBE = new Intl.NumberFormat("nl-BE");

console.log('1234567.89 EN', l10nEN.format(1234567.89));
console.log('1234567.89 BE', l10nBE.format(1234567.89));
console.log('123 BE', l10nBE.format(123));

console.log(new Intl.NumberFormat("pt-PT",  {
    style: 'unit',
    unit: "mile-per-hour"
}).format(090473));
// → 50 mi/h

console.log( "===") ;
var number = 123456.789;

// request a currency format
console.log(new Intl.NumberFormat('nl-BE', { style: 'currency', currency: 'EUR' }).format(number));
// → 123.456,79 €

// the Japanese yen doesn't use a minor unit
console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number));
// → ￥123,457

// limit to three significant digits
console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number));
// → 1,23,000

