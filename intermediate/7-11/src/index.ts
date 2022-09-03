// CLASS PARAMETER PROPERTIES

// theres a lot of duplication here
class Person {
	public name: string
	public age: number
	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}
}

// TS allows us to condense to this:
class BetterPerson {
	constructor(public name: string, public age: number) {}
}

const adam = new Person('adam', 12999)

const able = new BetterPerson('able', 13009)

console.log({ adam, able })

//////////////////////////////////////////////////
//////////////////////////////////////////////////

//STRICT COMPILER OPTION
// some basic configs:
let configJSON = {
	strict: true, // basically keep this on or it's not typescript
	noImplicitAny: false, // can override one "child" config by setting it against strict=true
	// see the tsconfig.json file
}

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// NULL VS UNDEFINED

// this dude is recommend loose equality to cover null AND undefined

console.log(null === undefined) // false
console.log(null == undefined) // true
console.log(null == 0) // false
console.log(null == '') // false

function somethingCouldBeNull() {
	return Math.random() < 0.5 ? null : ''
}
// so if you want to check for undefined or null without leaking through other falsey values:
const result = somethingCouldBeNull()

if (result == null) console.log(result + ' is null')
else console.log('not null or undefined')

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// INTERSECTION TYPES:

// extend a type without restating it's properties with &:

type Point2d = {
	x: number
	y: number
}

type Point3d = Point2d & {
	z: number
}

type AlternativeWay = {
	x: number
	y: number
	z: number
}

// similiar to single pipe, allowing multiple types, single & will intersect the types:

type Name = {
	name: string
}

type Phone = {
	num: number
}

type Email = {
	address: string
}

function takesPersonsDetail(person: Name & Phone & Email) {
	console.log(person.name, person.address, person.num)
}

takesPersonsDetail({ name: 'mike', num: 55, address: 'eee' })

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// OPTIONAL MODIFIER: ?

type Profile = {
	name: string
	email: string
	phone?: number // ? makes it optional
	// above is basically same as this: 
	phone2 : number | undefined
}

//////////////////////////////////////////////////

type Vector2d = {
	x: number
	y: number
	velocity?: Vector2d
}

// probably useless but wanted to see if you could do it
const movingPoint: Vector2d = {
	x: 1,
	y: 4,
	velocity: {
		x: 30,
		y: 33,
	}
}
 
//////////////////////////////////////////////////

// NON-NULL ASSERTION OPERATOR: 
// Assertion, same as suffixing "as <type>" to a value, we can also assert that a value is NOT null with this:
// <value>!
// kinda like !important
// overall is basiclaly just an override when you know it's not null but TS doesn't

let point: Vector2d
console.log(point!)

type OptionalPerson = {
	name: string
	email?: string | null | undefined
}

function sendEmail(email:string ){
	console.log("sent email to " + email)
}

function validateEmail(person: OptionalPerson){
	if (person.email == null) throw new Error('email is null or undefined')
}

function contact(person: OptionalPerson ){
	validateEmail(person)
	sendEmail(person.email!) // typescript doesn't understand that person is guaranteed to by type string by validateEmail, so this is a good case to override
	// we can avoid this situation if line 150 was included inline in contact() instead of invoked through another function
}


// INTERFACES 
import "./interfaces"


// type: never
// super interesting, automatically assigned to infinite loops and functions that don't return, but is used deliberately to ensure there are 0 leaks in a code block

//ex: 

type Square = {
	kind: 'square',
	size: number	
}

type Rectangle = {
	kind: "rectangle"
	width: number
	height: number
}

type Circle  = {
	kind: 'circle'
	radius: number
}

type Shape = Square | Rectangle | Circle


function area(shape: Shape){
	if (shape.kind ===  'square') return shape.size **2 
	if (shape.kind === 'rectangle') return shape.height * shape.width
	// if we make a change like add Circle to Shape, _ensure will error out again to alert us that there is an unhandled case in our code
	if (shape.kind === 'circle') return Math.PI * (shape.radius ** 2)

	const _ensureAllCasesAreHandled: never = shape // "(:never = shape) === shape should never be assigned to this" 
	return _ensureAllCasesAreHandled
	// a value being assigned to type never should not happen, and so if there's any unhandled path through the function that might possible lead to us hitting line 187, it will error out and let us know that we missed something
	// all routes through a function should return something
}
