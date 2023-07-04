import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';

import image from '~/assets/images/no-image.png';

const cx = classNames.bind(styles);

function Image({ alt, src, className, fallback: customFallback = image, ...props }, ref) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={cx('wrapper', className)}
            // Hoặc :
            // className={cx('wrapper', {[className]: className})}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

Image.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default forwardRef(Image);
