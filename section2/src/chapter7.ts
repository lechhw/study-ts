// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
    return 'hello';
}

function func2(): void {
    console.log('hello');
}

// let a: void;
// a = 1;
// a = 'hello';
// a = {};
// a = undefined;

// never
// never -> 존재하지 않는
// 불가능한 타입. 그 어떤 값도 저장할 수 없는 타입
function func3(): never {
    while (true) {}
}

function func4(): never {
    throw new Error();
}
let a: never;
// a = 1;
// a = 'hello';
// a = {};
// a = undefined;
// a = null;
