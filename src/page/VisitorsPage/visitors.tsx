import { useQuery } from 'react-query'
import { visitorsApi } from '../../api/visitorsApi'
import { IVisitors, IVisitorsForm } from './types'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TextField, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import s from './s.module.scss'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { VisitorsEdit } from '../../components/editbutton/editVisitors'


export const VisitorsPage = () => {
    const { data, refetch }= useQuery({ queryKey: ['visitors'], queryFn: () => visitorsApi.getAll<IVisitors[]>() })
    const { register, handleSubmit } = useForm<IVisitorsForm> ()
    const onSubmit = async (data: IVisitorsForm) => {
        await visitorsApi.create(data)
        refetch()
    }
    const onDelete = async (id:string) => {
      await visitorsApi.delete(id)
      refetch()
  }
    return (
        <div className={s.root}>
            <form onSubmit={handleSubmit(onSubmit)}className={s.form}>
            <div className = {s.vst}>
            <p>Введите данные нового посетителя</p>
            </div>
            <TextField id="outlined-basic"{...register('full_name')} label="ФИО" variant="outlined" />
            <TextField id="outlined-basic"{...register('birthday')} type = {'date'} label="Дата рождения" focused variant="outlined" />
            <TextField id="outlined-basic"{...register('constancy')} label="Постоянство" variant="outlined" />
                <Button type = 'submit' variant="contained">Добавить</Button>
            </form>
            <div className={s.table}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
              <TableCell align="right">ID</TableCell>
                <TableCell align="right">ФИО</TableCell>
                <TableCell align="right">Дата рождения</TableCell>
                <TableCell align="right">Постоянство</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data && data.map((visitors) => (
                <TableRow
                  key={visitors.full_name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell align="right">{visitors.id_visitors}</TableCell>  
                  <TableCell align="right">{visitors.full_name}</TableCell>
                  <TableCell align="right">{visitors.birthday}</TableCell>
                  <TableCell align="right">{visitors.constancy}</TableCell>
                  <TableCell align="right"><VisitorsEdit id = {visitors.id_visitors}/></TableCell>
                  <TableCell align="right" onClick ={()=>onDelete(visitors.id_visitors)}> <DeleteForeverIcon/></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
        </div>
      );
}