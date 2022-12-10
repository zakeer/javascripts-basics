// Strings to Number '1' -> 1
// typeof '1' // string
// typeof 1 // number
Number('1') // 1
Number('abc') // NaN (Not a Number)


Number('12') // 12
Number('') // 0
Number('   ') // 0
Number('   a') // NaN

Number('12.999') // 12.999

// Floating point string plain integer '12.999' -> 12
parseInt('12.999'); // 12
parseInt('67.890'); // 67
parseInt(''); // NaN
parseInt(true); // NaN

parseInt('123abc'); // 123
parseInt('123abc456'); // 123
parseInt('abc456'); // NaN
parseInt(56.78); // 56
parseInt(29.01); // 29
parseInt(29.99); // 29

// converting string to floating number '12.5 feet'
parseFloat('33.5 inches'); // 33.5

Number('');
parseInt('');
parseFloat();

// Shortcut +VALUE -> +'2' -> 2

// Numbers to Strings
String(2); // '2'
String(true); // 'true'
String(false); // 'false'

// ShortCut -> VALUE + '' -> 'VALUE'
2 + ''; // '2'
true + ''; // 'true'
false + ''; // 'false'
