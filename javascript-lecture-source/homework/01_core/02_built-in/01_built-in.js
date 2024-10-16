/**
 * 2-1. 년, 월, 일을 전달하면 해당 날짜의 요일을
 * '월', '화', '수', '목', '금', '토', '일' 문자열로 반환해주는 함수 getWeekDay를 만든다.
 *
 * 화
 * 월
 */

console.log(getWeekDay(2022, 6, 21));       // 2022년 6월 21일
console.log(getWeekDay(2022, 12, 12));      // 2022년 12월 12일

function getWeekDay(year, month, date) {
    // 코드 작성
    let date1 = new Date(year, month-1, date);
    let day = date1.getDay();   // 0~6 일~월

    // let dayName;
    //
    // switch (day) {
    //     case 0:
    //         dayName = '일';
    //         break;
    //     case 1:
    //         dayName = '월';
    //         break;
    //     case 2:
    //         dayName = '화';
    //         break;
    //     case 3:
    //         dayName = '수';
    //         break;
    //     case 4:
    //         dayName = '목';
    //         break;
    //     case 5:
    //         dayName = '금';
    //         break;
    //     case 6:
    //         dayName = '토';
    //         break;
    // }

    // 위의 방법이 아닌 배열로.
    const dayName = ['일', '월', '화', '수', '목', '금', '토'];

    return dayName[day];
}

/**
 * 오늘 흐른 시간을 초 단위로 알려주는 getSecondsToday
 * 함수와 오늘 남은 시간을 초단위로 알려주는 getSecondsToTomorrow 함수를 만든다.
 *
 * xxxxx초나 흘렀습니다. 시간을 소중히 씁시다^^
 * xxxxx초 밖에 안 남았습니다. 다시는 오지 않는 오늘입니다^^
 */

console.log(getSecondsToday());
console.log(getSecondsToTomorrow());

function getSecondsToday() {
    // 코드 작성
    let todayDate = new Date(2024, 9, 14, 0, 0, 0, 0);
    let nowTime = new Date();

    let result = ((nowTime.getTime() - todayDate.getTime()) / 1000)
    result = Math.floor(result);

    return `${result}초나 흘렀습니다. 시간을 소중히 씁시다^^`
}

function getSecondsToTomorrow() {
    // 코드 작성
    let toDate = new Date(2024, 9, 15, 0, 0, 0, 0);
    let nowTime = new Date();

    let result = ((toDate.getTime() - nowTime.getTime()) / 1000);
    result = Math.floor(result);

    return `${result}초 밖에 안 남았습니다. 다시는 오지 않는 오늘입니다^^`;
}

/**
 * arr 배열에는 숫자 뒤에 단위 문자가 붙거나 숫자 앞에 특수 문자가 1개 붙는 형태의 문자열들이 담겨있다.
 * 해당 값들의 앞 또는 뒤에 위치한 문자를 제거하고 숫자로 형변환한 값들이 담긴 새로운 배열을 반환하는 removeChar 함수를 작성한다.
 *
 * [ 1080, 100, 200, 60, 6, -15 ]
 */

let arr = ["1080px", "$100", "+200", "60kg", "6m", "-15"];
console.log(removeChar(arr));

function removeChar(arr){
    // 코드 작성

    arr.map((item) => parseInt(item) || +item.slice(1));
    return arr;
}

/**
 *  앞으로 읽어도 거꾸로 읽어도 똑같은 문자인지 판별하는 palindrom 함수를 만든다.
 *
 *  true
 * true
 * true
 * true
 * true
 * false
 */

const list = ['기러기', '토마토', '스위스', '인도인', '별똥별', '우별림'];

list.forEach(item => console.log(palindrom(item)));

function palindrom(str) {
    // 코드 작성
    return str === str.split('').reverse().join('');
}


