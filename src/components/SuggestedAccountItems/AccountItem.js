import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccountItems.module.scss';
import Image from '~/components/Image';
import AccountPreview from './AccountPreview/AccountPreview';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function AccountItems() {
    return (
        <div>
            <Tippy
                interactive
                placement="bottom"
                delay={[800, 0]}
                render={(attrs) => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <AccountPreview />
                        </PopperWrapper>
                    </div>
                )}
            >
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
            </Tippy>
        </div>
    );
}

export default AccountItems;
