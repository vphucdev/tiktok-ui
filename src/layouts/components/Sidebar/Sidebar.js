import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu/';
import config from '~/config';
import {
    ExploreIcon,
    ExploreIconActive,
    HomeIcon,
    HomeIconActive,
    LiveIcon,
    LiveIconActive,
    UserGroupIcon,
    UserGroupIconActive,
} from '~/components/Icons';
import SuggestedAccountItems from '~/components/SuggestedAccountItems/SuggestedAccountItems';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    to={config.routes.home}
                    title="Dành cho bạn"
                    icon={<HomeIcon />}
                    iconActive={<HomeIconActive />}
                />
                <MenuItem
                    to={config.routes.following}
                    title="Đang Follow"
                    icon={<UserGroupIcon />}
                    iconActive={<UserGroupIconActive />}
                />
                <MenuItem
                    to={config.routes.explore}
                    title="Khám Phá"
                    icon={<ExploreIcon />}
                    iconActive={<ExploreIconActive />}
                />
                <MenuItem to={config.routes.live} title="LIVE" icon={<LiveIcon />} iconActive={<LiveIconActive />} />
            </Menu>
            <SuggestedAccountItems label="Các tài khoản đang follow" more="Xem thêm" />
        </aside>
    );
}

export default Sidebar;
