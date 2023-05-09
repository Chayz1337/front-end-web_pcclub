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

export const AdminsEdit=(props: any) => {
    type Anchor = 'right';
    const {refetch} = useQuery(['admins'], () => adminsApi.getAll<IAdmins[]>())
    const [state, setState] = React.useState({
    right: false,
  });
  const {register, handleSubmit} = useForm<IAdminsForm>()
    
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
        <div className={s.font}>
        <div className = {s.adm}>
            <p>Отредактируйте данные администратора</p>
            </div>
        <form onSubmit={handleSubmit(onEdit) } className={s.form}>
        <TextField id="outlined-basic"{...register('full_name')} label="ФИО Администратора" variant="outlined" />
            <TextField id="outlined-basic"{...register('email')} label="Адрес эл.почты" variant="outlined" />
            <TextField id="outlined-basic"{...register('telephone')} label="Номер телефона" variant="outlined" />
            <Button type ='submit' onClick={toggleDrawer(anchor, false)} color='success' variant="contained">Отредактировать</Button>
            </form>
        </div>
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