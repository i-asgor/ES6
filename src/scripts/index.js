import '../styles/index.scss'

var age= 30
var name = "Md. Asgor Ali"
console.log('my name is '+name + ' and  my age is '+age+' years old')
console.log(`My name is ${name} and my age is ${age} years old. I am ${age<18?'not ':''} adult`)

console.log(name.padStart(15,'*'))
console.log(name.padEnd(15,'a'))
console.log('S'.repeat(10))