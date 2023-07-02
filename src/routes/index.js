import { HeaderOnly } from '~/components/Layout';
import {Home, Following, Profile, Upload, Search} from '~/pages';
import routesConfig from '~/config/routes';

export const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.following,
        component: Following,
    },
    {
        path: routesConfig.profile,
        component: Profile,
    },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: HeaderOnly
    },
    {
        path: routesConfig.search,
        component: Search,
        layout: null
    }
];
export const privateRoutes = [];
