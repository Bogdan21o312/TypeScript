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

