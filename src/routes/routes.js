import config from '../config';

import Category from '../pages/Category/Category';
import Discovery from '../pages/Discovery/Discovery';
import Following from '../pages/Following/Following';
import MusicVideo from '../pages/MusicVideo/MusicVideo';
import NewMusic from '../pages/NewMusic/NewMusic';
import Radio from '../pages/Radio/Radio';
import Top100 from '../pages/Top100/Top100';
import ZingChart from '../pages/ZingChart/ZingChart';
import Individual from '../pages/Individual/Individual';
import Album from '../pages/Album/Album';
import WeekZingChart from '../pages/WeekZingChart/WeekZingChart';
import Profile from '../pages/Profile/Profile';

const publicRoutes = [
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.newMusic,
        component: NewMusic,
    },
    {
        path: config.routes.category,
        component: Category,
    },
    {
        path: config.routes.discovery,
        component: Discovery,
    },
    {
        path: config.routes.musicVideo,
        component: MusicVideo,
    },
    {
        path: config.routes.radio,
        component: Radio,
    },
    {
        path: config.routes.top100,
        component: Top100,
    },
    {
        path: config.routes.zingChart,
        component: ZingChart,
    },
    {
        path: config.routes.individual,
        component: Individual,
    },
    {
        path: config.routes.album,
        component: Album,
    },
    {
        path: config.routes.weekZingChart,
        component: WeekZingChart,
    },
];

export default publicRoutes;
