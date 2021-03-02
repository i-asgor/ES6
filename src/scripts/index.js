import '../styles/index.scss'

// var age= 30
// var name = "Md. Asgor Ali"
// console.log('my name is '+name + ' and  my age is '+age+' years old')
// console.log(`My name is ${name} and my age is ${age} years old. I am ${age<18?'not ':''} adult`)

// console.log(name.padStart(15,'*'))
// console.log(name.padEnd(15,'a'))
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

// let add = (a,b) =>  a+b
// console.log(add(40,50))

// let sqr = x => x*x
// console.log(sqr(5))

// function testMe(){
// 	console.log(this)
// }

// testMe.call({})

// let obj = {
// 	name:'Asgor',
// 	print: () => {
// 		console.log(this)
// 	}
// }


// obj.print()

// let obj = {
// 	name: 'Md. Asgor Ali',
// 	print: function(){
// 		let self = this
// 		setTimeout(function(){
// 			console.log(this)
// 			alert(`Hello, ${self.name}`)
// 		},1000)
// 	}
// }
// obj.print()

// let obj = {
// 	name: 'Md. Asgor Ali',
// 	print: function(){
// 		setTimeout(() =>{
// 			console.log(this)
// 			console.log(`Hello, ${this.name}`)
// 		},1000)
// 	}
// }
// obj.print()

// let sum = function(a,b){
// 	return a+b
// }

// function sqr(n=1){
// 	// if(!n){
// 	// 	n = 1
// 	// }
// 	// n = n||1
// 	return n*n
// }

// console.log(sqr())

// function greet(name='asgor',msg='hello'){
// 	console.log(name.length)
// 	console.log(`${msg}! ${name}`)
// }

// greet(null,'Hello')
// greet('Asgor','Hello')

// function sum(){
// 	let sum = 0

// 	for (let i=0; i<arguments.length; i++){
// 		sum += arguments[i]
// 	}

// 	return sum
// }

// console.log(sum(1,2,3,4,5))

// function sum(...rest){
// 	return rest.reduce((a,b) => a+b)
// }

// console.log(sum(1,2,3,4,5))

// let a= [1,2,3]
// console.log(...a)

// let obj = {
// 	a:10,
// 	b:20,
// 	c:30
// }

// let obj2 = {
// 	..obj
// }

let a =10, b=20

let obj = {
	a,
	b,
}

console.log(obj)