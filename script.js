let numbers = [1,2,3,4,5]

numbers.push(6)
console.log(numbers)

numbers.pop()
console.log(numbers)

numbers.forEach(function(num){
    console.log(num)
})

let doubleNumbers = numbers.map(function(num){
    return num * 2
});
console.log(doubleNumbers)