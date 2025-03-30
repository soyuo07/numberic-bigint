const Util_1 = require('./util');

class numberic_bigint {
    constructor(data) {
        Object.defineProperty(this, 'isNumbericBigInt', {
            writable: false,
            value: true
        });
        this.value = String(this.wrapper(data));
    }

    add(data) {
        this.value = String(BigInt(this.value) + this.wrapper(data));
        return this.value;
    }

    minus(data) {
        this.value = String(BigInt(this.value) - this.wrapper(data));
        return this.value;
    }

    multiple(data) {
        this.value = String(BigInt(this.value) * this.wrapper(data));
        return this.value;
    }

    divide(data) {
        this.value = String(BigInt(this.value) / this.wrapper(data));
        return this.value;
    }

    toData(type) {
        switch (type) {
            case 'number':
                return Number(this.value);
            case 'bigint':
                return Util_1.string(this.value);
            case 'string':
                return Util_1.bigint(BigInt(this.value));
            case 'correct':
                return this.value;
            default:
                throw new Error('invalid input type: ' + type);
        }
    }

    wrapper(data) {
        if (!data || typeof data !== 'object') {
            throw new Error('Invalid input data');
        }

        const key = Object.keys(data)[0];
        switch (key) {
            case 'string':
                return Util_1.string(data.string);
            case 'number':
                if (String(data.number).includes('.') && !String(data.number).includes('e+')) {
                    throw new Error(`Cannot convert ${data.number} to BigInt!`);
                }
                return BigInt(data.number);
            case 'bigint':
                return data.bigint;
            default:
                throw new Error('Invalid input data key: ' + key);
        }
    }

    static replacer(key, value) {
        if (value && typeof value === 'object' && value.isNumbericBigInt === true) {
            return numberic_bigint.create({ string: value.value });
        }
        return value;
    }

    static create(config) {
        return new numberic_bigint(config);
    }
}

Object.defineProperty(numberic_bigint.prototype, 'toString', {
    value: Function.prototype.toString.bind(Object.prototype.toString),
    writable: false,
    enumerable: false,
    configurable: false
});

module.exports = numberic_bigint;
