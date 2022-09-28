//FunctionType====================================================================================================

const createPassword = (
    name: string = 'abc',
    age?: number | string) =>
    `${name}${age}`

createPassword('Bohdan')
createPassword('Bohdan', 18)
createPassword('Bohdan', '18')

//RestType====================================================================================================

const createSkills = (
    name: string,
    ...skills: Array<string>) =>
    `${name}, my skils are ${skills.join()}`

createSkills('Bohdan', 'JS', 'ES6', 'React')

//Describe function type====================================================================================================

let myFunction: (firstArg: string) => void

function oldFunction(name: string): void {
    console.log(`Hello ${name}`)
}

myFunction = oldFunction