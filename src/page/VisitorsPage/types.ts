export interface IVisitors {
id_visitors:string
birthday: string
full_name:string
constancy:string
  }

  export interface IVisitorsForm extends Omit<IVisitors, 'id_visitors'>{}
  export interface IVisitorsEdit extends Omit<IVisitors, 'id_visitors'>{}