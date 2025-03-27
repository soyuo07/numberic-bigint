# numberic-bigint
Number 타입처럼 쓰는 BigInt 를 위한 패키지

우리는 무한하고 광활하며 정확한 숫자를 원한다.

> # Cause
수치 표시 중 1.79..e+308 을 넘으면 Infinity 표기되는 걸 발견.

BigInt 로 처리시 너무 길게 표시되는 것을 발견.

이 두가지를 보안하고자 제작하였습니다.

제작에 도와주신 분들에게 감사를 표합니다.

> # Structure
> '1e+404' -> '1n' * Math.pow(10n, 404)
>
> '1,000,000,000,...,000' -> 1e+(n.length - 1)
>
> wrapper('1.39593e+1000') -> 139593n * Math.pow(10n, 1000 - 5)
>
> And etc.

> # Example
> We Don't Know About It

> # License
> MIT License
