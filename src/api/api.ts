import { IAdminsForm } from "../page/AdminsPage/types"

class Api{
    constructor(private baseUrl='http://localhost:4000/'){}
    async get(path: string, param?: {[key: string]: string}) {
        const queryParam = param
        ? '?' +
        Object.entries(param)
        .map(el => {
            return `${el[0]}=${el[1]}`
        })
            .join('&')
            : ''

        const request = await fetch(this.baseUrl + path + queryParam)
        return await request.json()
    }
    async post(path:string,body:object){
       const request = await fetch (this.baseUrl + path, { headers: {'Content-Type': 'application/json;charset=utf-8'}, body: JSON.stringify(body), method: 'Post'})
       return await request.json()
    }

    async delete(path: string) {
        const request = await fetch(this.baseUrl + path, {method: 'Delete'})  
        return await request.json()
    }
}

export const api = new Api()

export const adminsApi = {
    path: 'admins/',
    async getAll<T>(): Promise<T> {
        return await api.get(this.path)
    },
    async getById(id:string) {
        return await api.get(this.path + id)
    },
    async create(admins:IAdminsForm) {
        return await api.post(this.path, admins)
    },
    async delete(id: string) {
        return await api.delete(this.path +id)
    },
}
export const computersApi = {
    path: 'computers/',
    async getAll() {
        return await api.get(this.path)
    },
}
export const hallsApi = {
    path: 'halls/',
    async getAll() {
        return await api.get(this.path)
    },
}