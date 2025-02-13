// object
// 객체 리터럴 타입
// 타입스크립트 = 구조적 타입 시스템(Property Based TS)
let user: {
    id?: number; // 선택적 프로퍼티(optional property)
    name: string;
} = {
    id: 1,
    name: 'chlee',
};

let dog: {
    name: string;
    color: string;
} = {
    name: '덕구',
    color: 'brown',
};

user.id;

// 읽기전용(readonly)
let config: {
    readonly apiKey: string; // 값이 수정되면 안되는 프로퍼티
} = {
    apiKey: 'MY API KEY',
};

// config.apiKey = 'hacked';
