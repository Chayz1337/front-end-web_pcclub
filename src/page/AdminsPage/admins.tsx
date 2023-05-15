import { useQuery } from 'react-query'
import { adminsApi } from '../../api/adminsApi'
import { IAdmins, IAdminsForm } from './types'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TextField, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import s from './s.module.scss'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { AdminsEdit } from '../../components/editbutton/editAdmins'


export const AdminsPage = () => {
    const { data, refetch }= useQuery({ queryKey: ['admins'], queryFn: () => adminsApi.getAll<IAdmins[]>() })
    const { register, formState:{errors}, handleSubmit } = useForm<IAdminsForm> ()
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
            <div className = {s.adm}>
            <p>Введите данные нового администратора</p>
            </div>
            <TextField id="outlined-basic"{...register('full_name', {required: true})} label="ФИО Администратора" variant="outlined" />
            <div className={s.error}>
            <div style = {{height:20}}> {errors?.full_name&& <p> Обязательное поле для заполнения!</p>} </div>
            </div>
            <TextField id="outlined-basic"{...register('email', {required: true})} label="Адрес эл.почты" variant="outlined" />
            <div className={s.aboba1}>
            <div style = {{height:20}}> {errors?.email && <p> Обязательное поле для заполнения!</p>} </div>
            </div>
            <TextField id="outlined-basic"{...register('telephone', {required: true})} label="Номер телефона" variant="outlined" />
            <div className={s.aboba1}>
            <div style = {{height:20}}> {errors?.telephone&& <p> Обязательное поле для заполнения!</p>} </div>
            </div>
                <Button type = 'submit' variant="contained">Добавить</Button>
            </form>
          <div className={s.table}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650}} aria-label="simple table">
            <TableHead className={s.color}>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">ФИО</TableCell> 
                <TableCell align="right">Почтовый адрес</TableCell>
                <TableCell align="right">Номер телефона</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
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
                  <TableCell align="right"><AdminsEdit id = {admins.id_admins}/></TableCell>
                  <TableCell align="right" onClick ={()=>onDelete(admins.id_admins)}> <DeleteForeverIcon/></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
        </div>
      );
}