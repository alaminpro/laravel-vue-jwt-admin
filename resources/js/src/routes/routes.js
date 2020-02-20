import home from "../pages/home";

const routes = [
    {
        path: "/",
        name: "home",
        component: home,
        meta: {
            breadcrumb: "Home Page"
        }
    }
];

export default routes;
