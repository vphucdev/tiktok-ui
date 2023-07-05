import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu/';
import config from '~/config';
import { ExploreIcon, HomeIcon, LiveIcon, UserGroupIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem to={config.routes.home} title='Dành cho bạn' icon={<HomeIcon />} />
                <MenuItem to={config.routes.following} title='Đang Follow' icon={<UserGroupIcon />} />
                <MenuItem to={config.routes.explore} title='Khám Phá' icon={<ExploreIcon />} />
                <MenuItem to={config.routes.live} title='LIVE' icon={<LiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
