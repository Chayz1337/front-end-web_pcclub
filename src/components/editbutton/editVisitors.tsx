import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { useQuery } from 'react-query';
import { visitorsApi } from '../../api/visitorsApi';
import { IVisitors, IVisitorsEdit, IVisitorsForm } from '../../page/VisitorsPage/types';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import s from './s.module.scss'

export const VisitorsEdit=(props: any) => {
    type Anchor = 'right';
    const {refetch} = useQuery(['visitors'], () => visitorsApi.getAll<IVisitors[]>())
    const [state, setState] = React.useState({
    right: false,
  });
  const {register, handleSubmit} = useForm<IVisitorsForm>()
    
    const onEdit = async (data: IVisitorsEdit) => {
        let id = props.id
        let visitors = {
            full_name: data.full_name,
            birthday: data.birthday,
            constancy: data.constancy,
        }
        await visitorsApi.update(id, visitors)
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
            <p>Отредактируйте данные посетителя</p>
            </div>
        <form onSubmit={handleSubmit(onEdit) } className={s.form}>
        <TextField id="outlined-basic"{...register('full_name')} label="ФИО Посетителя" variant="outlined" />
        <TextField id="outlined-basic"{...register('birthday')} type = {'date'} label="Дата рождения" focused variant="outlined" ></TextField>
            <TextField id="outlined-basic"{...register('constancy')} label="Постоянство" variant="outlined" />
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