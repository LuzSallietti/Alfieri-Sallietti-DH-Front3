import Contact from '../Routes/Contact'
import Detail from '../Routes/Detail'
import Login from '../Routes/Login'
import Favs from '../Routes/Favs'
import Home from '../Routes/Home'
import Layout from '../Components/Layout/Layout'

export const routes = [
    {
        id: 1,
        path: "/home",
        Component: Home
    },
    {
        id: 2,
        path: "/contact",
        Component: Contact
    },
    {
        id: 3,
        path: "/favs",
        Component: Favs
    },
    {
        id: 4,
        path: "/dentist/:id",
        Component: Detail
    }
];
export { Login, Layout }