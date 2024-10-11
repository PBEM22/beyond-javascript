// const
// let 키워드에서 알아본 특징은 모두 동일하며 상수 선언에서 사용 된다는 점이 특징이다.

// const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화 해야 한다.
// const x; -> SyntaxError: Missing initializer in const declaration
const x = 1;
// x = 2; -> 재할당 금지

const student = {
    name : '홍길동',
    age : 20
};

student.name = '유관순';   // 객체의 프로퍼티 값을 변경하는 것은 문제가 없다.
console.log(student);

// 객체를 재할당 하는 것은 불가능 하다.
// student = {};