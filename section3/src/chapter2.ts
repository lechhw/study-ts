/**
 * Unknown 타입
 */

function unknownExam() {
    // 업캐스팅 => 모두 허용가능
    let a: unknown = 1;
    let b: unknown = 'hello';
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;

    // 다운캐스팅 => 허용 안됨
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}

/**
 * Never 타입
 * 모든 타입의 서브타입
 */

function neverExam() {
    // never => 절대 이함수가 어떤 값을 반환하는거 자체가 말이 안된다
    function neverFunc(): never {
        while (true) {}
    }

    // never 타입은 모든 타입의 서브타입이기 때문에 어떤타입의 변수에도 값을 다 넣을 수 있음
    // 업캐스팅
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // 다운캐스팅이기 때문에 허용 안됨
    // let never1: never = 10;
    // let never2: never = 'string';
    // let never3: never = true;
}

/**
 * Void 타입
 */

function voidExam() {
    function voidFunc(): void {
        console.log('hi');
    }

    // void 타입은 undefined 의 슈퍼타입이기 때문에 허용가능
    let voidVar: void = undefined;
}

/**
 * Any 타입
 * 치트키 이기때문에 타입계층도를 무시함.(예외:never 타입)
 * 따라서 웬만하면 사용x
 */

function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;
    undefinedVar = anyVar;

    // 네버타입에는 그 어떤타입도 값을 넣을 수 없음
    // neverVar = anyVar;
}
