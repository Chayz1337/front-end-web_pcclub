import { Outlet } from "../../../node_modules/react-router-dom/dist/index"
import ButtonAppBar from "../appbar/appbar"
import { SideBar } from "../sidebar/sidebar"
import s from './s.module.scss'

export const Layout = () =>{
    return(
        <div className={s.root}>
          <ButtonAppBar/>
          <div className={s.body}>
        <div className={s.sidebar}>
          <SideBar />
        </div>
        <div className={s.page}>
          <Outlet />
        </div>
      </div>
      </div>
  )
    }