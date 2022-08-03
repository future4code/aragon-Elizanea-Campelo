import { IClassroomDB } from "../models/Classroom"
import { BaseDatabase } from "./BaseDatabase"

export class ClassroomDatabase extends BaseDatabase {
    public static TABLE_CLASSROOMS = "Labe_Classrooms"

    public async getAllClassrooms() {
        const result = await BaseDatabase
            .connection(ClassroomDatabase.TABLE_CLASSROOMS)
            .select()

        return result
    }

    public async getClassActive() {
        const result = await BaseDatabase
        .connection(ClassroomDatabase.TABLE_CLASSROOMS)
        .select()
        .where("module", ">", "0")

        return result
    }



    public async createClassroom(classroom: IClassroomDB){
        const result = await BaseDatabase
        .connection(ClassroomDatabase.TABLE_CLASSROOMS)
        .insert(classroom)
        return result
    }

    public async findById(id:string){
        const findClass = await BaseDatabase
        .connection(ClassroomDatabase.TABLE_CLASSROOMS)
        .where({id})
        .select()

        return findClass
    }

    public async updateModule(id:string, module:string){

        const result = await BaseDatabase
        .connection(ClassroomDatabase.TABLE_CLASSROOMS)
        .where({id})
        .update({module})

        return result


    }
    
} 