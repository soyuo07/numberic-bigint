module.exports = (function () {
    const Util_1 = require('./util');
    function numberic_bigint(data) {
        Object.defineProperty(this, 'isNumbericBigInt', {
            writable: false,
            value: true
        });
        Object.defineProperty(this, 'value', {
            writable: true,
            value: String(
                wrapper(data)
            )
        });
    }
    numberic_bigint.prototype.add = function (data) {
        let add_value = wrapper(data);
        this.value = String(
            BigInt(this.value) + add_value
        );
        return this.value;
    }
    numberic_bigint.prototype.minus = function (data) {
        let minus_value = wrapper(data);
        this.value = String(
            BigInt(this.value) - minus_value
        );
        return this.value;
    }
    numberic_bigint.prototype.multiple = function (data) {
        let multiple_value = wrapper(data);
        this.value = String(
            BigInt(this.value) * multiple_value
        );
        return this.value;
    }
    numberic_bigint.prototype.divide = function (data) {
        let divide_value = wrapper(data);
        this.value = String(
            BigInt(this.value) / divide_value
        );
        return this.value;
    }
    numberic_bigint.prototype.toData = function (type) {
        switch (type) {
            case 'number':
                return Number(
                    String(this.value)
                );
            case 'bigint':
                return Util_1.string(this.value);
            case 'string':
                return Util_1.bigint(
                    BigInt(this.value)
                );
            case 'correct':
                return this.value;
            default:
                throw new Error('invaild input type: ' + type);
        }
    }

    function toForm() {
        return Util_1.bigint(BigInt(this.value));
    }
    toForm.toString = Function.prototype.toString.bind(Object.prototype.toString);
    Object.defineProperty(numberic_bigint.prototype, 'toString', {
        value: toForm,
        writable: false,
        enumerable: false,
        configurable: false
    });
    Object.defineProperty(numberic_bigint.prototype, 'toJSON', {
        value: function () {
            return this;
        },
        writable: false,
        enumerable: false,
        configurable: false
    });

    numberic_bigint.replacer = (key, value) => {
        if (value && typeof value === 'object' && value.isNumbericBigInt === true) {
            return numberic_bigint.create({ string: value.value });
        }
        return value;
    }
    numberic_bigint.create = function (_config) {
        return new this(_config);
    }

    function wrapper(data) {
        let value;
        switch (Object.keys(data)[0]) {
            case 'string':
                value = Util_1.string(data.string);
                break;
            case 'number':
                if (String(data.number).includes('.') && !String(data.number).includes('e+')) {
                    throw new Error('cannot convert ' + data.number + ' to BigInt!');
                }
                value = BigInt(data.number);
                break;
            case 'bigint':
                value = data.bigint;
                break;
            default:
                throw new Error('invaild input data key: ' + data[0]);
        }
        return value;
    }

    return numberic_bigint;
})();