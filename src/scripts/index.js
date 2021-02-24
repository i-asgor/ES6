import '../styles/index.scss'

var age= 30
var name = "Md. Asgor Ali"
console.log('my name is '+name + ' and  my age is '+age+' years old')
console.log(`My name is ${name} and my age is ${age} years old. I am ${age<18?'not ':''} adult`)

console.log(name.padStart(15,'*'))
console.log(name.padEnd(15,'a'))
// console.log('S'.repeat(10))

// let a=10
// a = 100
// console.log(a)

// const b=10
// console.log(b)

// {

// }

// function add(a,b){
// 	return a+b
// }

let add = (a,b) =>  a+b
console.log(add(40,50))

let sqr = x => x*x
console.log(sqr(5))

function testMe(){
	console.log(this)
}

testMe()

let obj = {
	name:'Asgor',
	print: () => {
		console.log(this)
	}
}


obj.print()



// let sum = function(a,b){
// 	return a+b
// }