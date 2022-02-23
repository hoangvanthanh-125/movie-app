import FilmPage from "../components/FilmPage";
import Home from "../components/home";
export interface USER_ROUTE{
  name:string,
  path:string,
  component:any
}
export const USER_ROUTER :USER_ROUTE[] = [
  {
    path:'/',
    name:'Trang chủ',
    component:Home
  },
  {
      path:'/list/:type',
      name:'Page-Film',
      component:FilmPage
  }
]