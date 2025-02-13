// enum 타입 (= 열거형 타입)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// enum 은 컴파일 결과 사라지지않는다
// enum Role {
//     ADMIN = 0,
//     USER = 1,
//     GUEST = 2,
// }
// 숫자를 직접 할당하지 않아도 자동으로 맨위에서부터 순서대로 0->1->2 부여됨
// enum Role {
//     ADMIN,
//     USER,
//     GUEST,
// }
// enum Role {
//     ADMIN = 10,
//     USER, // 자동으로 +1 씩 되서 => 11
//     GUEST, // 자동으로 +1 씩 되서 => 12
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 10] = "USER";
    Role[Role["GUEST"] = 11] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: '짱완',
    role: Role.ADMIN, // 0 <- 관리자
    language: Language.korean,
};
const user2 = {
    name: '홍길동',
    role: Role.USER, // 1 <- 일반 유저
};
const user3 = {
    name: '아무개',
    role: Role.GUEST, // 2 <- 게스트
};
console.log(user1, user2, user3);
export {};
