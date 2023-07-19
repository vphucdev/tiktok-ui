import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { ForwardStepIcon } from '~/components/Icons/';
import styles from './GoToTop.module.scss';

const cx = classNames.bind(styles);

function GoToTop() {
    const [active, setActive] = useState(false);

    const handleGoToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setActive(true);
            } else setActive(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
    return (
        <button className={cx('wrapper', { active })} onClick={handleGoToTop}>
            <ForwardStepIcon />
        </button>
    );
}

export default GoToTop;
