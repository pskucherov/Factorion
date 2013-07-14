function factorion(maxNumber) {
    var i
        , j
        , sum
        , buf
        , cache  = []
        , result = [];

    cache[0] = 1;
    cache[1] = 1;
    cache[2] = 2;
    for (i = 3; i <= 9; i++) {
        cache[i] = cache[(i-1)] * i;
    }

    for (i = 0; i <= maxNumber; i++) {
        sum = 0;
        buf = '' + i;
        for (j = 0; j < buf.length; j++) {
            sum += cache[+buf[j]];
        }
        if (sum === i) {
            result.push(i);
        }
    }

    return result;
}
