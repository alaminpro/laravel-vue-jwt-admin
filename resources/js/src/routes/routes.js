import Home from "../pages/home";
import Login from "../pages/auth/login";
import NotFound from "../pages/errors/404";

const routes = [

    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            auth: true
        },

    },
    {
        path: "*",
        name: "notfound",
        component: NotFound,
        meta: {
            auth: true
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            auth: false
        }
    },
];

export default routes;
