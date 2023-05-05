export class Api{
    constructor(private path:string, private baseUrl = 'http://localhost:4000/') {}

    async get (path: string) {
        const request = await fetch (this.baseUrl + path)
        const json = await request.json()
        return json 
    }
}

export const adminsApi = new Api('admins')