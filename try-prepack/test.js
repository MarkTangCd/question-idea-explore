(function() {
  //自定义一个阶乘函数，就是有n个数相乘，从m开始，每个数减1
  function factorial(m, n) {
    var num = 1;
    var count = 0;
    for (var i = m; i > 0; i--) {
      if (count == n) {
        break;
      }
      num = num * i;
      count++;
    }
    return num;
  }

  //自定义组合函数(就是数学排列组合里的C)
  function combination(m, n) {
    return factorial(m, n) / factorial(n, n);
  }

  const getCountByDantuo = (tuoma, danma, max) => {
    return combination(tuoma, max - danma)
  }

  const getCount = (buyNum, perNum) => {
    if (perNum === buyNum) {
      return 1
    }

    if (perNum > buyNum) {
      throw new Error('perNum error')
    } else if (perNum <= 0) {
      throw new Error('perNum is not zero')
    }

    let diff = buyNum - perNum
    if (diff > perNum) {
      perNum = diff
    }

    let result = 1
    for (let i = perNum + 1; i <= buyNum; i++) {
      result *= i
    }

    for (let i = 1; i<=buyNum - perNum; i++) {
      result /= i
      result = Math.round(result)
    }

    return result
  }
  global.count = getCount(10, 5);
  global.dantuo = getCountByDantuo(5, 2, 7);
})();