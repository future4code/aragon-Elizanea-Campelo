import { Request, Response } from "express"
import { ClassroomDatabase } from "../database/ClassroomDatabase"

export const getClassActive = async (req: Request, res: Response) => {
    let errorCode = 400
    
    try {
        const classroomDatabase = new ClassroomDatabase()
        const result = await classroomDatabase.getClassActive()

        res.status(200).send({result})
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}