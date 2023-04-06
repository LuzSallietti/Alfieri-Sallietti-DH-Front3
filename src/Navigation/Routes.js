import Contact from '../Routes/Contact'
import Detail from '../Routes/Detail'
import Favs from '../Routes/Favs'
import Home from '../Routes/Home'

import Example from '../Components/utils/Example'
import FavsExample from '../Components/utils/FavsExample'

export const routes = [
    {
        id: 1,
        path: "/home",
        Component: Example
    },
    {
        id: 2,
        path: "/contact",
        Component: Contact
    },
    {
        id: 3,
        path: "/favs",
        Component: FavsExample
    },
    {
        id: 4,
        path: "/dentist/:id",
        Component: Detail
    },
];