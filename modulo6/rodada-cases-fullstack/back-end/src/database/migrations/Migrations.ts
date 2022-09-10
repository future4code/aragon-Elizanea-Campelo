import { BaseDatabase } from "../BaseDatabase"
import { ProductDatabase } from "../ProductDatabase"
import { UserDatabase } from "../UserDatabase"
import { products, ingredientes, ingredientesProducts, users } from "./data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${ProductDatabase.TABLE_INGREDIENTES_PRODUCTS};
        DROP TABLE IF EXISTS ${ProductDatabase.TABLE_INGREDIENTES};
        DROP TABLE IF EXISTS ${ProductDatabase.TABLE_PRODUCTS};
        DROP TABLE IF EXISTS ${UserDatabase.TABLE_USERS};
        
        CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("CLIENT", "ADMIN") DEFAULT "CLIENT" NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${ProductDatabase.TABLE_PRODUCTS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price INT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${ProductDatabase.TABLE_INGREDIENTES}(
            id VARCHAR(255) PRIMARY KEY,
            ingrediente VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${ProductDatabase.TABLE_INGREDIENTES_PRODUCTS}(
            id VARCHAR(255) UNIQUE,
            product_id VARCHAR(255) NOT NULL,
            ingrediente_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (product_id) REFERENCES ${ProductDatabase.TABLE_PRODUCTS}(id),
            FOREIGN KEY (ingrediente_id) REFERENCES ${ProductDatabase.TABLE_INGREDIENTES}(id)
        );
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(users)

        await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .insert(products)

        await BaseDatabase
            .connection(ProductDatabase.TABLE_INGREDIENTES)
            .insert(ingredientes)

        await BaseDatabase
            .connection(ProductDatabase.TABLE_INGREDIENTES_PRODUCTS)
            .insert(ingredientesProducts)
    }
}

const migrations = new Migrations()
migrations.execute()