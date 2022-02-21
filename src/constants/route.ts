import Home from "../components/home";
export interface USER_ROUTE{
  name:String,
  path:String,
  component:any
}
export const USER_ROUTER :USER_ROUTE[] = [
  {
    path:'/',
    name:'Trang chủ',
    component:Home
  }
]