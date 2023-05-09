import { useQuery } from 'react-query'
import { computersApi } from '../../api/computersApi'
import { IComputers, IComputersForm } from './types'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TextField, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import s from './s.module.scss'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export const ComputersPage = () => {
    const { data, refetch }= useQuery({ queryKey: ['computers'], queryFn: () => computersApi.getAll<IComputers[]>() })
    const { register, handleSubmit } = useForm<IComputersForm> ()
    const onSubmit = async (data: IComputersForm) => {
        await computersApi.create(data)
        refetch()
    }
    const onDelete = async (id:string) => {
      await computersApi.delete(id)
      refetch()
  }
    return (
        <div className={s.root}>
            <form onSubmit={handleSubmit(onSubmit)}className={s.form}>
            <div className = {s.comp}>
            <p>Введите данные нового компьютера</p>
            </div>
            <TextField id="outlined-basic"{...register('specifications')} label="Характеристики" variant="outlined" />
            <TextField id="outlined-basic"{...register('date_of_last_service')} type = {'date'} label="Дата последнего обслуживания" focused variant="outlined" />
            <TextField id="outlined-basic"{...register('halls_id_halls')} label="Компьютер (ID)" variant="outlined" />
                <Button type = 'submit' variant="contained">Добавить</Button>
            </form>
            <div className={s.table}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
              <TableCell align="right">ID</TableCell>
                <TableCell align="right">Характеристики</TableCell>
                <TableCell align="right">Дата обслуживания</TableCell>
                <TableCell align="right">Зал (ID)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data && data.map((computers) => (
                <TableRow
                  key={computers.specifications}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell align="right">{computers.id_computers}</TableCell>  
                  <TableCell align="right">{computers.specifications}</TableCell>
                  <TableCell align="right">{computers.date_of_last_service}</TableCell>
                  <TableCell align="right">{computers.halls_id_halls}</TableCell>
                  <TableCell align="right" onClick ={()=>onDelete(computers.id_computers)}> <DeleteForeverIcon/></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
        </div>
      );
}