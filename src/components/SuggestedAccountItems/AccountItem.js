import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccountItems.module.scss';
import Image from '~/components/Image';
import AccountPreview from './AccountPreview/AccountPreview';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function AccountItems({ data }) {
    return (
        <div>
            <Tippy
                appendTo={document.querySelector('#root')}
                interactive
                placement="bottom"
                delay={[800, 0]}
                render={(attrs) => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <AccountPreview data={data} />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('account-item')}>
                    <Image className={cx('avatar')} src={data.avatar} alt="" />

                    <div className={cx('info')}>
                        <h4 className={cx('nickname')}>
                            <span>{data.nickname}</span>
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </h4>
                        <span className={cx('name')}>{`${data.first_name}  ${data.last_name}`}</span>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItems.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItems;
