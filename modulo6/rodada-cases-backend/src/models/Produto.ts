import exp from "constants"

export class Product {
    constructor (
        private id: string,
        private name: string,
        private tag: string[]=[]
    ) {}

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }
    public getTag = () => {
        return this.tag
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setName = (newName: string) => {
        this.name = newName
    }
    public setTag = (newTag: string[]) => {
        this.tag = newTag
    }
} 

export interface ICreateProductInputDTO {
    token: string,
    name: string,
    tag: string[]
}

export interface IGetProductinputDTO {    
    order: string,
    sort: string,
    limit: string,
    page: string
}

export interface ICreateProductOutputDTO {
    message: string,
    product: Product
}

export interface IGetProductDBDTO {
    order: string,
    sort: string,
    limit: number,
    offset: number
}

export interface IProductDB {
    id: string,
    name: string
}

export interface IGetProductOutputDTO {
    products: Product[]

}

export interface ITagDB {
    id: string,
    name: string
}