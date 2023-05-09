export interface IComputers {

  id_computers: string
  specifications: string
  date_of_last_service: string
  halls_id_halls: number

  }

  export interface IComputersForm extends Omit<IComputers, 'id_computers'>{}