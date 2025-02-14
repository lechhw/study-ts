/**
 * 타입 추론
 */

// 변수의 초기값을 기준으로 타입 추론
let a = 10; // number 타입으로 추론
let b = 'hello'; // string 타입으로 추론

let c = {
    id: 1,
    name: '짱완',
    profile: {
        nickname: 'chlee',
    },
    urls: ['test.com'],
};

// 객체 구조분해 할당
let { id, name, profile } = c;

// 배열 구조분해 할당
let [one, two, three] = [1, 'hello', true];

// 함수의 타입추론은 리턴값을 기준으로 추론한다
// 매개변수의 기본값이 있으면 기본값 기준으로 타입추론
function func(msg = 'hello') {
    return 'hello';
}

// any 타입의 진화
let d; // 암시적인 any 타입으로 추론
d = 10;
d.toFixed();
// d.toUpperCase(); // 오류

d = 'hello';
d.toUpperCase();
// d.toFixed(); // 오류

const num = 10; // 10 Number Literal 타입으로 추론
const str = 'hello'; // "hello" String Literal 타입으로 추론

let arr = [1, 'string']; // (string | number)[] 타입으로 추론
