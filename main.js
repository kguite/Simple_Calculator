const numOne = document.querySelector('#num1').value.Number
const numTwo = document.querySelector('#num2').value.Number


document.querySelector('#calcMult').addEventListener('click', multiply)
document.querySelector('#calcDiv').addEventListener('click', division)
document.querySelector('#calcAdd').addEventListener('click', add)
document.querySelector('#calcSub').addEventListener('click', sub)


function multiply() {
	const numOne = Number(document.querySelector('#num1').value)
	const numTwo = Number(document.querySelector('#num2').value)

   let total = numOne * numTwo;
   
	document.querySelector('#result').innerText = total

} 

function division () {
	const numOne = Number(document.querySelector('#num1').value)
	const numTwo = Number(document.querySelector('#num2').value)

   let total = numOne / numTwo;
   
	document.querySelector('#result').innerText = total
} 


function add () {
	const numOne = Number(document.querySelector('#num1').value)
	const numTwo = Number(document.querySelector('#num2').value)

   let total = numOne + numTwo;
   
	document.querySelector('#result').innerText = total
}

function sub () {
	const numOne = Number(document.querySelector('#num1').value)
	const numTwo = Number(document.querySelector('#num2').value)

   let total = numOne - numTwo;
   
	document.querySelector('#result').innerText = total
}
