let chislo = 365
let first = Math.floor(chislo/100)
let second = Math.floor(chislo%100/10)
let third = Math.floor(chislo%10)
let result1 = first+second+third
let result2 = first*second*third
console.log("Сумма чисел трёхзначного числа ", result1,"Произведение чисел трёхзначного числа ",result2)