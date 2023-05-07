import { useQuery } from 'react-query'
import { hallsApi } from '../../api/api'
export const HallsPage = () => {
    const query = useQuery({ queryKey: ['admins'], queryFn: () => hallsApi.getAll() })

    console.log(query.data)

    return <div> HallsPage </div>
}