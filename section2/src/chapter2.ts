// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ['hello', 'im', 'chlee'];

let boolArr: Array<boolean> = [true, false, true]; // 제네릭 문법

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, 'hello'];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
];

// 튜플 (자바스크립트에는 없고 타입스크립트에서만 제공되는 타입)
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3];
// tup2 = ['1', '2'];
let tup2: [number, string, boolean] = [1, '2', true];
// tup2 = ['2', true, 1];

// 튜플은 자바스크립트의 배열로 인식하기 때문에, 배열 메서드를 사용하면 튜플의 길이제한이
// 발동이 안된다. 이점을 유의하여 사용!
// tup1.push(1);
// tup1.pop();
// tup1.pop();
// tup1.pop();

// 배열을 사용할때 인덱스의 위치에 따라 이미 값이 정해져 있고, 순서를 지키는게 중요할 때 튜플을 사용하면 좋다
const users: [string, number][] = [
    ['짱완', 1],
    ['이아무개', 2],
    ['김아무개', 3],
    ['박아무개', 4],
    // [5, '최아무개'],
];
