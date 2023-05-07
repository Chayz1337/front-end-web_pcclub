import { useQuery } from 'react-query'
import { adminsApi } from '../../api/api'
import { IAdmins, IAdminsForm } from './types'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TextField, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import s from './s.module.scss'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export const AdminsPage = () => {
    const { data, refetch }= useQuery({ queryKey: ['admins'], queryFn: () => adminsApi.getAll<IAdmins[]>() })
    const { register, handleSubmit } = useForm<IAdminsForm> ()
    const onSubmit = async (data: IAdminsForm) => {
        await adminsApi.create(data)
        refetch()
    }
    const onDelete = async (id:string) => {
      await adminsApi.delete(id)
      refetch()
  }
    return (
        <div className={s.root}>
            <form onSubmit={handleSubmit(onSubmit)}className={s.form}>
            <TextField id="outlined-basic"{...register('full_name')} label="ФИО Администратора" variant="outlined" />
            <TextField id="outlined-basic"{...register('email')} label="Адрес эл.почты" variant="outlined" />
            <TextField id="outlined-basic"{...register('telephone')} label="Номер телефона" variant="outlined" />
                <Button type = 'submit' variant="contained">Добавить</Button>
            </form>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">ФИО</TableCell>
                <TableCell align="right">Почтовый адресс</TableCell>
                <TableCell align="right">Номер телефона</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data && data.map((admins) => (
                <TableRow
                  key={admins.full_name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right">{admins.id_admins}</TableCell>
                  <TableCell align="right">{admins.full_name}</TableCell>
                  <TableCell align="right">{admins.email}</TableCell>
                  <TableCell align="right">{admins.telephone}</TableCell>
                  <TableCell align="right" onClick ={()=>onDelete(admins.id_admins)}> <DeleteForeverIcon/></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      );
   // return  <div> {data && data.map(admins => <div key = {admins.id_admins}> full_name: {admins.full_name}</div>)} </div>
}