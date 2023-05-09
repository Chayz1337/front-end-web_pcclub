export interface IAdmins {
    id_admins: string
    full_name: string
    telephone: number
    email: string
  }

  export interface IAdminsForm extends Omit<IAdmins, 'id_admins'>{}
  export interface IAdminsEdit extends Omit<IAdmins, 'id_admins'>{}