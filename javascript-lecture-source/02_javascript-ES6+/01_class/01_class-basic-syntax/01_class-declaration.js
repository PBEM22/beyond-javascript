// 클래스 선언
class Student{
    
    // 생성자를 통해 인스턴스 생성 및 초기화
    constructor(name) {
        this.name = name;   // 전달 받은 인수로 인스턴스 초기화
        this.group = 1;     // 고정 값으로 인스턴스 초기화
    }

    // 프로토타입 메소드
    introduce(){
        console.log(`안녕하세요 저는 ${this.group}반 학생 ${this.name}입니다.`);
    }
}

const student = new Student('홍길동');
student.introduce();

console.log(typeof Student);
console.log(Student === Student.prototype.constructor);
console.log(Student.prototype.introduce);
console.log(Object.getOwnPropertyNames(Student.prototype));