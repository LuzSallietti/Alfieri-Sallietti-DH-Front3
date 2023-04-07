import Contact from '../Routes/Contact'
import Detail from '../Routes/Detail'
import Favs from '../Routes/Favs'
import Home from '../Routes/Home'

import MUIExample from '../Components/utils/MUIExample'
import MUIFavs from '../Components/utils/MUIFavs'

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