# numberic-bigint
Number 타입처럼 쓰는 BigInt 를 위한 패키지

우리는 무한하고 광활하며 정확한 숫자를 원한다.

> # Cause
수치 표시 중 1.79..e+308 을 넘으면 Infinity 표기되는 걸 발견.

BigInt 로 처리시 너무 길게 표시되는 것을 발견.

이 두가지를 보안하고자 제작하였습니다.

> # License
MIT License

> # Example
```js
const numberic_bigint = require('numberic-bigint');

let num1 = numberic_bigint.create({
    string: "1.583e+404"
});
let num2 = numberic_bigint.create({
    bigint: 10000000000000000000000000n
});
let num3 = numberic_bigint.create({
    number: 1e+308
});

console.log(num1.add({
    string: "500"
}));
console.log(num2.minus({
    number: 1e+20
}));
console.log(num3.mulitple({
    bigint: 3n
}));
console.log(num1.divide({
    string: "2"
}));

console.log(num2.toData('string'));
console.log(JSON.parse(
    JSON.stringify(num3),
    numberic_bigint.replace
));
```