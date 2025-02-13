// object
// 객체 리터럴 타입
// 타입스크립트 = 구조적 타입 시스템(Property Based TS)
let user = {
    id: 1,
    name: 'chlee',
};
let dog = {
    name: '덕구',
    color: 'brown',
};
user.id;
// 읽기전용(readonly)
let config = {
    apiKey: 'MY API KEY',
};
export {};
// config.apiKey = 'hacked';
