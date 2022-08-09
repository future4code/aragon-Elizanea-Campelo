import { Request, Response } from "express"
import { IClassroomDB } from "../models/Classroom"
import { ClassroomDatabase } from "../database/ClassroomDatabase"

export const createClass = async (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const name = req.body.name as string
        const module = req.body.module as string
        
        
        if (!name || !module) {
            throw new Error("Please, check your information! You need complete all! of then!")
        }

        const classroom: IClassroomDB = {
            id: Date.now().toString(),
            name: name,
            module: module
        }

        const classroomDatabase = new ClassroomDatabase()
        await classroomDatabase.createClassroom(classroom)

        res.status(201).send({ message: "Class created!", classroom: classroom })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
} 