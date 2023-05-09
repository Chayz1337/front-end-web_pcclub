import { IAdminsEdit, IAdminsForm } from "../page/AdminsPage/types"
import { api } from "./api"

export const adminsApi = {
    path: 'admins/',
    async getAll<T>(params?:{ name: string}): Promise<T> {
        return await api.get(this.path, params)
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
    async update(id: number, admins:IAdminsEdit){
        return await api.put(this.path + id, admins)
    },
}