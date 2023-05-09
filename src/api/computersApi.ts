import { IComputersForm } from "../page/ComputersPage/types"
import { api } from "./api"

export const computersApi = {
    path: 'computers/',
    async getAll<T>(): Promise<T> {
        return await api.get(this.path)
    },
    async getById(id:string) {
        return await api.get(this.path + id)
    },
    async create(computers:IComputersForm) {
        return await api.post(this.path, computers)
    },
    async delete(id: string) {
        return await api.delete(this.path +id)
    },
}