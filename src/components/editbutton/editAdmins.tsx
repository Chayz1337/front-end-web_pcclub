import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { useQuery } from 'react-query';
import { adminsApi } from '../../api/adminsApi';
import { IAdmins, IAdminsEdit, IAdminsForm } from '../../page/AdminsPage/types';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import s from './s.module.scss'
import csgo from '../../imgs/3.png'

export const AdminsEdit=(props: any) => {
    type Anchor = 'right';
    const {refetch} = useQuery(['admins'], () => adminsApi.getAll<IAdmins[]>())
    const [state, setState] = React.useState({
    right: false,
  });
  const {register, handleSubmit, formState:{errors}} = useForm<IAdminsForm>()
    
    const onEdit = async (data: IAdminsEdit) => {
        let id = props.id
        let admins = {
            full_name: data.full_name,
            email: data.email,
            telephone: data.telephone,
        }
        await adminsApi.update(id, admins)
        refetch()
    }

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box role="presentation"  className={s.root}>
      <List>
        <div className ={s.font}>
        <div className = {s.adm}>
            <p>Отредактируйте данные администратора</p>
            </div>
        <form onSubmit={handleSubmit(onEdit) } className={s.form}>
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
            <Button type ='submit' onClick={toggleDrawer(anchor, true)} color='success' variant="contained">Отредактировать</Button>
            </form>
        </div>
        <Box
        component="img"
        sx={{
          height: 500,
          width: 400,
          maxHeight: { xs: 500, md: 500 },
          maxWidth: { xs: 400, md: 400},
        }}
        alt="The house from the offer."
        src={csgo}
      />
      
    </List>
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <EditIcon onClick={toggleDrawer(anchor, true)} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}