import { prisma } from "../../prisma";
import { FormsCreateData, FormsRepository } from "../FormsRepository";

export class PrismaFormRepository implements FormsRepository {
   async create({name, email, comment}: FormsCreateData) {
      await prisma.form.create({
         data: {
            name,
            email,
            comment
         }
      })
   }
}


