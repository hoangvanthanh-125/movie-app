import ActorDetail from "../components/actorDetail";
import Collection from "../components/collection";
import FilmDetail from "../components/filmDetail";
import FilmPage from "../components/FilmPage";
import Home from "../components/home";
import Login from "../components/login";
import SearchPage from "../components/searchPage";
import Signup from "../components/signup";
import WatchPage from "../components/watchPage";
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
  },
  {
    path:'watch/:type/:id/:name',
    name:'FilmDetail',
    component:WatchPage
  },
  {
    path:'actor/:id/:name',
    name:'Actor',
    component:ActorDetail
  },
  {
    path:'login',
    name:'Login',
    component:Login
  },
  {
    path:'signup',
    name:'Sigup',
    component:Signup
  },
  {
    path:'collection',
    name:'',
    component:Collection
  }
]