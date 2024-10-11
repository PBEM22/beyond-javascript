// 콜백 함수
// 함수의 매개변수를 통해 다른 함수의 내부로 전달 되는 함수를 콜백 함수라고 한다.
// 매개변수를 통해 함수의 외부에서 콜백 함수를 전달 받는 함수를 고차 함수라고 한다.

function increase(value) { return value + 1; }
function decrease(value) { return value - 1; }

function apply(func, value) { return func(value); }

console.log(apply(increase, 5));
console.log(apply(decrease, 5));