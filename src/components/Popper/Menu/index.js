import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultfn = () => {};

function Menu({ children, items, hideOnClick = false, onChange = defaultfn }) {
    const [history, setHistory] = useState([items]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else onChange(item);
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            offset={[14, 8]}
            interactive // cho phep select
            delay={[0, 300]}
            placement="bottom-end"
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => {
                                        return prev.slice(0, history.length - 1);
                                        // const newHistory = [...history];
                                        // newHistory.pop()
                                        // return newHistory
                                    });
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
