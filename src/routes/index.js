import { HeaderOnly } from '~/layouts';
import { Home, Following, Profile, Upload, Search, Explore, Live } from '~/pages';
import config from '~/config';

export const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.explore,
        component: Explore,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.live,
        component: Live,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
];
export const privateRoutes = [];
