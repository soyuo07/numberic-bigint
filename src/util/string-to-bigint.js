module.exports = function (str) {
    if(!str.includes('.') && !str.includes('e+')) {
        return BigInt(str);
    }
    if(str.includes('.') && !str.includes('e+')) {
        return BigInt(str.split('.')[0]);
    }
    let [front, back] = str.split('e+');
    let len = (front.split('.')[1] || '').length;
    let value = BigInt(
        front.replace('.', '')
    );
    back -= len;
    for(var i = 0; i < back; i++) {
        value *= 10n;
    }
    return value;
}