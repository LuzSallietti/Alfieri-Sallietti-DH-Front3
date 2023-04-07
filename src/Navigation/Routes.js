import Contact from '../Routes/Contact'
import Detail from '../Routes/Detail'
import Login from '../Routes/Login'
//import Favs from '../Routes/Favs'
//import Home from '../Routes/Home'


import MUIFavs from '../Components/utils/MUIFavs'
import MUILogin from '../Components/MUILogin'
import MUIExample from '../Components/utils/MUIExample'
import Layout from '../Components/Layout/Layout'
//import Login from '../Components/utils/Example'
export const routes = [
    {
        id: 1,
        path: "/home",
        Component: MUIExample
    },
    {
        id: 2,
        path: "/contact",
        Component: Contact
    },
    {
        id: 3,
        path: "/favs",
        Component: MUIFavs
    },
    {
        id: 4,
        path: "/dentist/:id",
        Component: Detail
    }
];
export { Login, Layout }