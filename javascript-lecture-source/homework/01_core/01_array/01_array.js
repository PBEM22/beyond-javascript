/**
 * ## 1-1. 전달 받은 문자열(str) 안에 있는 값을 ',' 기준으로 배열로 분리하고
 * 전달받은 단어(word)가 있는 index 위치를 문자열로 리턴하는 함수 findWord(str, word)를 작성한다.
 *
 * - 힌트 : split , indexOf
 *
 * 고양이는 배열 index 10번째에 있습니다.
 * 샌드위치는 배열에 존재하지 않습니다.
 * 결과를 확인할 수 없습니다.
 */

const str = '사과,바나나,당근,김밥,치즈,떡볶이,햄버거,환타,사이다,콜라,고양이,강아지';

console.log(findWord(str, '고양이'));
console.log(findWord(str, '샌드위치'));
console.log(findWord(str));

function findWord(str, word) {
    // 코드 작성
    if (word == null){
        return `결과를 확인할 수 없습니다.`;
    }
    else{

        let indexOf = str.indexOf(word);
        
        if (indexOf >= 0){
            return `${word}는 배열 index ${indexOf}번째에 있습니다.`;
        }
        else {
            return `${word}는 배열에 존재하지 않습니다.`;
        }
    }
}

/**
 * ## 1-2. 배열(arr)의 요소 중 a와 b 사이에 속하지 않는 요소는 삭제해주는 함수 filterRange(arr, a, b)를 작성한다.
 *
 * 힌트 : splice
 *
 * [5, 3, 1, 4]
 */

function filterRange(arr, a, b) {
    // 코드 작성
    for (let i = 0; i < arr.length; i++){
        if (!(arr[i] >= a && arr[i] <= b)){
            console.log(arr[i]);
            arr.splice(arr.indexOf(arr[i]), 1);
        }
    }
}

const arr = [5, 3, 8, 1, 10, 4];

filterRange(arr, 1, 5);

console.log(arr);

/**
 * ### 1-3. 제시 된 숫자값 배열과 문자값 배열을 오름차순 정렬, 내림차순 정렬하여 출력한다.
 *
 * - 힌트 : sort
 *
 * [ 9, 20, 37, 54, 88, 100 ]
 * [ 100, 88, 54, 37, 20, 9 ]
 * [ 'hello', 'js', 'party', 'wow' ]
 * [ 'wow', 'party', 'js', 'hello' ]
 */

let numbers = [20, 100, 37, 54, 88, 9];
let strings = ['wow', 'js', 'party', 'hello'];

// 코드 작성
console.log(numbers.sort((a, b) => a -b));
console.log(numbers.sort((a, b) => b -a));

console.log(strings.sort());
// console.log(strings.toSorted((a, b)));

/**
 * ### 1-4. Student 생성자 함수를 통해 생성 된 3명의 학생 객체를 studentList 배열에 담았다.
 * 해당 배열을 전달하여 score 내림차순 기준으로 정렬해주는 sortFromScore(arr) 함수,
 * 해당 배열을 전달하여 lastName과 firstName을 합성하여 name 속성으로 만들어 반환하는 makeFullName 함수를 작성한다.
 *
 * - 힌트 : sort, map
 *
 * [
 *   Student { firstName: '관순', lastName: '유', score: 80 },
 *   Student { firstName: '보고', lastName: '장', score: 70 },
 *   Student { firstName: '길동', lastName: '홍', score: 60 }
 * ]
 * [
 *   { name: '유관순', score: 80 },
 *   { name: '장보고', score: 70 },
 *   { name: '홍길동', score: 60 }
 * ]
 */

function Student(firstName, lastName, score){
    this.firstName = firstName;
    this.lastName = lastName;
    this.score = score;
}

const studentList = [
    new Student('길동', '홍', 60),
    new Student('보고', '장', 70),
    new Student('관순', '유', 80)
];

sortFromScore(studentList);
console.log(studentList);
console.log(makeFullName(studentList));

function sortFromScore (arr) {
    // 코드 작성
    arr.sort((a, b) => b.score - a.score);

}

function makeFullName(arr){
    // 코드 작성
    arr.map(student => arr.name = student.lastName + student.firstName)

    return arr.map(student => {
            return{
                name: `${student.lastName}${student.firstName}`,
                score: student.score
            }
        })
}

