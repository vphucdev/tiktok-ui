import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './SuggestedAccountItems.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItems() {
    return (
        <div className={cx('account-item')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2dafe1c32ed4895b6d1ef8b550cb696a~c5_100x100.jpeg?x-expires=1688871600&x-signature=STf1KVb71O7fWPNTTJ6r%2FS9F4Hg%3D"
                alt=""
            />

            <div className={cx('info')}>
                <h4 className={cx('nickname')}>
                    <span>nickname</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('name')}>Rin</span>
            </div>
        </div>
    );
}

export default AccountItems;
