import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import AccountItem from './AccountItem';
import styles from './SuggestedAccountItems.module.scss';

const cx = classNames.bind(styles);

function SuggestedAccountItems({ label, more, less,  data, onSeeAll, seeAll }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}

            {!seeAll ? <p className={cx('more-btn')} onClick={onSeeAll}>{more}</p> : <p className={cx('more-btn')} onClick={onSeeAll}>{less}</p>}
        </div>
    );
}

SuggestedAccountItems.propTypes = {
    label: PropTypes.string.isRequired,
    more: PropTypes.string,
    data: PropTypes.array,
    onSeeAll: PropTypes.func,
};

export default SuggestedAccountItems;
