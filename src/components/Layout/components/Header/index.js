import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import logo from '~/assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('logo')} src={logo} alt="logo" />
                <div className={cx('search')}>
                    <input placeholder="Tìm kiếm" spellCheck={false} />
                    <button className={cx('search-clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}>

                </div>
            </div>
        </header>
        
    );
}

export default Header;
