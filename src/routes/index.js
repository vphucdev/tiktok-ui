import { HeaderOnly } from '~/components/Layout';
import {Home, Following, Profile, Upload, Search} from '~/pages';

export const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly
    },
    {
        path: '/search',
        component: Search,
        layout: null
    }
];
export const privateRoutes = [];
