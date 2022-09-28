//Simple object example====================================================================================================

type Person = { name: string, age: number, nickName?: string, getPass?: () => string }

const user: Person = {
    name: 'Bohdan',
    age: 18,
    nickName: 'webDew'
}

const admin: Person = {
    name: 'Max',
    age: 20,
    getPass() {
        return `${this.name}${this.age}`
    },
}

