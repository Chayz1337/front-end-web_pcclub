import { IVisitorsEdit, IVisitorsForm } from "../page/VisitorsPage/types"
import { api } from "./api"

export const visitorsApi = {
    path: 'visitors/',
    async getAll<T>(): Promise<T> {
        return await api.get(this.path)
    },
    async getById(id:string) {
        return await api.get(this.path + id)
    },
    async create(computers:IVisitorsForm) {
        return await api.post(this.path, computers)
    },
    async delete(id: string) {
        return await api.delete(this.path +id)
    },
    async update(id: number, admins:IVisitorsEdit){
        return await api.put(this.path + id, admins)
    },
}