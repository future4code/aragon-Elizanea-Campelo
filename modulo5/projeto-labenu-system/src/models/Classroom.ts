export interface IClassroomDB {
    id: string,
    name: string,
    module: string
}

export class Classroom {
    constructor(
        private id: string,
        private name: string,
        private students: string[],
        private module: number
    ) {}

    public getId() {
        return this.id
    }

    public getName() {
        return this.name
    }

    public getStudents() {
        return this.students
    }

    public getModule() {
        return this.module
    }

    public setId(newId: string) {
        this.id = newId
    }

    public setName(newName: string) {
        this.name = newName
    }

    public setStudents(newStudents: string[]) {
        this.students = [...newStudents]
    }

    public setModule(newModule: number) {
        this.module = newModule
    }
}

export enum MODULE{
    ZERO = "0",
    UM = "1",
    DOIS = "2",
    TRÊS = "3",
    QUATRO = "4",
    CINCO = "5",
    SEIS = "6"
}