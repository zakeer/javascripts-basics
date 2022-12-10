2 > 2; //false
2 >= 2; //true
2 < 2; //false
2 <= 2; //true

2 == 2; //true
2 != 2; //false

"100" === 100; // false

"100" == 100; // -> "100" == "100" -> true // (Implicit Conversion)
"Zakeer" == 99; 
// 1. "Zakeer" == "99" (99 number converted to string "99")
// 2. false


100 == true * 100; // 
// 1. 100 == 1 * 100
// 2. 100 == 100

100 === true * 100; //

typeof 10 < 20; // Excepted boolean | Actual false
// 1. 'number' < 20
// 2. 'number' < '20'; false

// false value
// 1. 0
// 2. ''

typeof (10 < 20)
