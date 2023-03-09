// const arr = [1, 2, 3] => 6

const getSum = (arr) => {
    return arr.reduce((acc, el) => acc + el)
}
console.log(getSum([2.5, 3.7, 0]))
module.exports = getSum