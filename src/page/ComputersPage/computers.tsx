import { useQuery } from 'react-query'
import { computersApi } from '../../api/api'
export const ComputersPage = () => {
    const query = useQuery({ queryKey: ['admins'], queryFn: () => computersApi.getAll() })

    console.log(query.data)

    return <div> ComputersPage </div>
}