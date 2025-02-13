// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

// 같은 스코프 내에선 중복 선언 X
// type User = {};

let user: User = {
    id: 1,
    name: 'chlee',
    nickname: '짱완',
    birth: '1994.05.26',
    bio: '안녕하세요',
    location: '파주시',
};

// 인덱스 시그니처
// 규칙을 위반하지만 않으면 모든 객체를 허용하는 타입
type CountryCodes = {
    [key: string]: string;
};
let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
    [key: string]: number;
    Korea: number;
};
let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
};

let countryNumberAndStringCodes2: CountryNumberCodes = {
    Korea: 410,
};
