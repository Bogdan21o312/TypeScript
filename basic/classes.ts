//ClassType====================================================================================================

class User {
    name: string
    age: number
    nickName: string

    constructor(name: string, age: number, nickName: string) {
        this.name = name
        this.age = age
        this.nickName = nickName
    }
}

const bohdan = new User('Bohdan', 31, 'webDeb')

bohdan.name
bohdan.nickName
bohdan.age

