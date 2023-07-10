import { useEffect, useState } from 'react';
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
import { getSuggested as userService } from '~/services/userService';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [seeAll, setSeeAll] = useState(false);
    useEffect(() => {
        const fetApi = async () => {
            if (!seeAll) {
                const data = await userService({ page: 1, per_page: 5 });
                setSuggestedUsers(data);
            } else {
                const data = await userService({ page: 1, per_page: 15 });
                setSuggestedUsers(data);
            }
        };

        fetApi();
        // getSuggested().then((data) => { console.log(data)})
    }, [seeAll]);

    const handleViewChange = () => setSeeAll(!seeAll);

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
            <div className={cx('loginBenefits')}>
                <p className={cx('benefits')}>Đăng nhập để follow các tác giả, thích video và xem bình luận</p>
                <Button large className={cx('login')}>
                    Đăng nhập
                </Button>
            </div>
            <SuggestedAccountItems
                label="Các tài khoản đang follow"
                onSeeAll={handleViewChange}
                more="Xem thêm"
                less="Ẩn bớt"
                data={suggestedUsers}
                seeAll={seeAll}
            />

            <div className={cx('footer')}>
                <div className={cx('container')}>
                    <a className={cx('footer-link')} target="blank" href="https://www.tiktok.com/about?lang=vi-VN">
                        Giới thiệu
                    </a>
                    <a className={cx('footer-link')} target="blank" href="https://newsroom.tiktok.com/vi-vn/">
                        Bảng tin
                    </a>
                    <a
                        className={cx('footer-link')}
                        target="blank"
                        href="https://www.tiktok.com/about/contact?lang=vi-VN"
                    >
                        Liên hệ
                    </a>
                    <a className={cx('footer-link')} target="blank" href="https://careers.tiktok.com/">
                        Sự nghiệp
                    </a>
                    <a className={cx('footer-link')} target="blank" href="https://www.bytedance.com/">
                        ByteDance
                    </a>
                </div>
                <span className={cx('copyright')}>@ 2023 TikTok</span>
            </div>
        </aside>
    );
}

export default Sidebar;
