/** @format */

class Person {
	private age: number
	constructor(age: number) {
		this.age = age
	}
	growOld = (): number => {
		return this.age++
	}
	getAge = (): number => {
		return this.age
	}
}

let mo: Person = new Person(28)
mo.growOld()
const growOld = mo.growOld
growOld()

console.log({ mo })
