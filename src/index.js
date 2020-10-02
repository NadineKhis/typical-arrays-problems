
exports.min = function min (array) {
  if (array === undefined || array.length === 0) return 0
  let min = Infinity
  for (let i of array){
    if (i < min) min = i
  }
  return min;
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) return 0
  let max = -Infinity
  for (let i of array){
    if (i > max) max = i
  }
  return max;
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) return 0
  let res = array.reduce(function (acc, cur) {
    return acc + cur
  })
  return res / array.length
}
