import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './AccountPreview.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2dafe1c32ed4895b6d1ef8b550cb696a~c5_100x100.jpeg?x-expires=1688871600&x-signature=STf1KVb71O7fWPNTTJ6r%2FS9F4Hg%3D"
                    alt=""
                />
                <Button className={cx('follow-btn')} outline>
                    Đăng ký
                </Button>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('nickname')}>
                    <span>nickname</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('name')}>Rin</span>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>1.5M </strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>4M </strong>
                    <span className={cx('label')}>Like</span>
                </p>
                <p className={cx('user-bio')}>Mọi người ấn follow ☝☝☝ kênh nhé !!! 💕💕</p>
            </div>
        </div>
    );
}

export default AccountPreview;
