import FilmDetail from "../components/filmDetail";
import FilmPage from "../components/FilmPage";
import Home from "../components/home";
import SearchPage from "../components/searchPage";
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
      path:'/:option/:type',
      name:'Page-Film',
      component:FilmPage
  },
  {
    path:'/search/:query',
    name:'SearchPage',
    component:SearchPage
  },
  {
    path:':type/:id/:name',
    name:'FilmDetail',
    component:FilmDetail
  }
]