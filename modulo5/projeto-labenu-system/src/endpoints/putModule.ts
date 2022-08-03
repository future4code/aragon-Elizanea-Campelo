import { Request,Response } from "express";
import { ClassroomDatabase } from "../database/ClassroomDatabase";


export const putModule = async(req:Request, res:Response) => {
    let errorCode = 400

    try {
        const id = req.params.classroom_id as string
        const module = req.body.module as string

        if (!module) {
          throw new Error("nonexistent parameters.");
        }

        if (typeof id !== "string" || typeof module !== "string" ){
          errorCode = 400
          throw new Error("parameters must be a string.");           
      }

        const classroomDatabase = new ClassroomDatabase();
        await classroomDatabase.updateModule(id, module);

        res.status(200).send({ message: "Module updated successfully." });
      } catch (error) {
        res.status(errorCode).send({ message: error.message });
      }
} 



