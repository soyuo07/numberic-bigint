module.exports = function (bigint) {
    let str = bigint.toString();
    if (bigint < BigInt(1e+21)) {
        return str;
    }
    let forward = str.slice(0, 1);
    let backward = str.slice(1).slice(0, 17).replace(/0+$/, '');
    let tenUp = str.slice(1).split(".")[0].length;
    return forward + (Number(backward) == 0 ? "" : "." + backward) + "e+" + tenUp;
}