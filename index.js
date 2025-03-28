module.exports = require('./src');
// numberic-bigint  음수, 소수 미지원
/*
function bigIntToStr(bigint) {
    let str = bigint.toString();
    if (bigint < BigInt(1e+21)) {
        return str;
    }
    let forward = str.slice(0, 1);
    let backward = str.slice(1).slice(0, 17);
    let tenUp = str.slice(1).split(".")[0].length;
    return forward + (Number(backward) == 0 ? "" : "." + backward) + "e+" + tenUp;
}
function strToBigInt(str) {
    let n = str.split("e+");
    let int = formBigInt(n[0]);
    if (!n[1]) {
        return int;
    }
    for (var i = 0; i < Number(n[1]); i++) {
        int *= 10n;
    }
    return int;
}
*/
function formBigInt(str) {
/**
1.12 -> ( 거쳐서 변환 )
112n / 10n / 10n
112 ->  ( 그냥 반환 )
112n

식으로 변환하여 제작
 */
}