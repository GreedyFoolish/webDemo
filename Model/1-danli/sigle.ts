
export class sigle {
    private static instance: sigle
    private name: string
    private age: number

    private constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    public static getInstance(name: string, age: number) {
        if (sigle.instance == null) {
            const instance = new sigle(name, age)
            sigle.instance = instance
            return instance
        }
        return sigle.instance
    }
}