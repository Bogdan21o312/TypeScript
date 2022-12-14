//BooleanType====================================================================================================

let isCompleted: boolean = false;

// isCompleted = 'abc' <-- Error

isCompleted = true;

//NumberType====================================================================================================

const a: number = 6
const b: number = 6.1

//StringType====================================================================================================

const string: string = 'abc'
const string2: string = `cba ${a}`

//Null & Undefined Types====================================================================================================

const u: undefined = undefined
const n: null = null

//VoidType====================================================================================================

const v = (): void => {

}

//ArrayType====================================================================================================

let list: number[] = [1, 2, 3]

let list2: Array<number> = [1, 2, 3]

//TupleType====================================================================================================

// Multi line
let x: [string, number]
x = ["Hello", 10]

// One line
let y: [string, number] = ["Hello", 10]

//AnyType====================================================================================================

// Any type for array

const p: [any, any] = ["Hello", 10]
const m: Array<any> = ["Hello", 10]

// Any type for string

let notSure: any = false;

// Issue case (no error)

notSure = true // boolean
notSure = 10 // number
notSure = 'abc' // string

//EnumType====================================================================================================

enum Directions {
    Up,
    Down,
    Left = 10,
    Right,
}

Directions.Up // 0
Directions.Down // 1
Directions.Left // 10
Directions.Right // 11

Directions[0] // 0
Directions[1] // 1
Directions[10] // 10
Directions[11] // 11

enum links {
    google = 'https://www.google.com.ua/',
    apple = 'https://www.apple.com',
    twitter = 'https://twitter.com/'
}

links.apple
links.google
links.twitter

//NeverType====================================================================================================

// Function return Error
const msg = 'abc'
const error = (msg: string): never => {
    throw new Error(msg)
}

// Function infinite loop
const infiniteLoop = (): never => {
    while (true) {

    }
}

//ObjectType====================================================================================================

const create = (o: object | null): void => { }

// create(1)
// create('abc')
create({obg: 1})

let id: number | string

id = 10
id = 'abc'
// id = true

//Type====================================================================================================

type Name = string

let ID: Name

ID = 'abc'
// ID = 10

