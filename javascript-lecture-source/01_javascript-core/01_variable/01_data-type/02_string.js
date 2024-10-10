var string;
string = 'JavaScript';
string = "JavaScript";
string = `JavaScript`;  // 백틱(``)

string = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열로 인식';
string = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열로 인식";

// 템플릿 리터럴 : ES6부터 도입 된 멀티라인 문자열, 표현식 삽입 등
// 편리한 문자열 처리 기능을 제공하는 문자열 표기법

var multiline = `안녕하세요 
    반갑습니다
    제 이름은 홍길동 입니다.`;
console.log(multiline)

var lastName = '홍';
var firstName = '길동';

console.log('제 이름은 ' + lastName + firstName + "입니다.");
console.log(`제 이름은 ${lastName}${firstName}입니다.`);
console.log('제 이름은 ${lastName}${firstName}입니다.');






