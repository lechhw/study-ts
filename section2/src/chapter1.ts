/** 원시타입 (Primitive Type) */

// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = 'hello';
let str2: string = `hello`;
let str3: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// let numA: number = null; // "strictNullChecks" 설정 관련 예시

/** 리터럴 타입 (= 값 그자체가 변수의 타입인 경우) */
// 리터럴 => 값
let numA: 10 = 10;
let strA: 'hello' = 'hello';
let boolA: true = true;
