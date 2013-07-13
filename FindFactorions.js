/**
 * Нахождение факторионов
 * @constructor
 */
function FindFactorions() {
    this.MAXNUMBER  = 10000000;
    this.factCache  = [];
    this.factorions = [];
}

/**
 * Поиск факторионов (перебором всех чисел до MAXNUMBER)
 * @param {boolean} useCache использовать массив для кэширования факториалов
 */
FindFactorions.prototype.processNumbers = function (useCache) {
    var i;
    for (i = 0; i <= this.MAXNUMBER; i++) {
        if (this.calcFactorion(i, useCache)) {
            this.factorions.push(i);
        }
    }
};

/**
 * Определяет, является ли число факторионом
 * @param   {number}  val      - число, которое надо проверить
 * @param   {boolean} useCache - использовать массив для кэширования факториалов
 * @returns {boolean}          - факторион или нет
 */
FindFactorions.prototype.calcFactorion = function (val, useCache) {
    var i, sum;

    if (typeof val !== 'number' || val < 0) {
        throw new Error("Invalid param 'val'");
    }

    val = '' + val;
    sum = 0;

    for (i = 0; i < val.length; i++) {
        if (useCache) {
            sum += this.getFactorialFromCache(+val[i]);
        } else {
            sum += this.calcFactorial(+val[i]);
        }
    }

    if (sum === (+val)) {
        return true;
    }
    return false;

};

/**
 * Работа с массивом факториалов
 * @param   {number} dig - число, которое надо найти в кэше факториалов (или передать на вычисление)
 * @returns {number}     - факториал числа dig
 */
FindFactorions.prototype.getFactorialFromCache = function (dig) {
    if (typeof this.factCache[dig] !== 'number') {
        this.factCache[dig] = this.calcFactorial(dig);
    }
    return this.factCache[dig];
};

/**
 * Нахождение факториала числа
 * @param   {number} dig - число, факториал которого надо найти
 * @returns {number}     - факториал числа dig
 */
FindFactorions.prototype.calcFactorial = function (dig) {
    var i, factorial;

    if (!dig) {
        return 1;
    } else if (dig === 1) {
        return 1;
    } else if (dig === 2) {
        return 2;
    }

    factorial = 1;
    for (i = 2; i <= dig; i++) {
        factorial *= i;
    }

    return factorial;
};
