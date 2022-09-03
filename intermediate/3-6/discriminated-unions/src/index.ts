type Square = {
	kind: 'square' // we can add literal values as a discriminating property
	size: number
}

type Rectangle = {
	kind: 'rectangle'
	width: number
	height: number
}

type Circle = {
	kind: 'circle'
	radius: number
}

// prettier-ignore
type Shape = 
    | Square
    | Rectangle
    | Circle

function area(shape: Shape) {
	if (shape.kind === 'circle') return Math.PI * shape.radius ** 2
	if (shape.kind === 'rectangle') return shape.height * shape.width
	if (shape.kind === 'square') return shape.size * shape.size
}

let soco: Circle = {
	radius: 3,
	kind: 'circle',
}

console.log(area(soco))

///////////////////////////////
///////////////////////////////

type ValidationSuccess = {
	isValid: true
	validatedValue: string
}

type ValidationFailure = {
	isValid: false
	error: string
}

type ValidationResult = ValidationFailure | ValidationSuccess

function logResult(result: ValidationResult) {
	if (result.isValid) return console.log(result.validatedValue)
	return console.log('fail')
}

let result: ValidationFailure = {
	isValid: false,
	error: 'u suck as coding',
}
let result2: ValidationSuccess = {
	isValid: true,
	validatedValue: 'nice',
}

logResult(result2)
logResult(result)
