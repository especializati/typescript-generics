class Person {
  constructor(
    public name: string,
    public age: number,
  ) {
  }
}

const display = <T extends Person, U extends string|number>(person: T, prm2: U): void => {
  console.log(person.name)
}

// const display2 = <T extends Person, U extends T>(person: T, prm2: U): void => {
//   console.log(person.name)
// }

const p1 = new Person('Carlos', 12)
display(p1, 123)

class User extends Person {}
const user1 = new User('Carlos', 12)
display<Person, number>(user1, 123)

class Test {
}
const test = new Test()
// display(test, 123)

export {}
