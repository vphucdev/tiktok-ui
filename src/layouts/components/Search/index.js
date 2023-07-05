import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchService';
import styles from './Search.module.scss';
import AccountItem from '~/components/AccountItem';
import { ClearIcon, LoadingIcon, SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);
    const inputRef = useRef();

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const results = await searchServices.search(debouncedValue);
            setSearchResult(results);
            setLoading(false);
        };

        fetchApi();
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => setShowResult(false);

    return (
        //Using a wrapper <div> tag to fix warning Tippy
        <div>
            <HeadlessTippy
                offset={[0, 6]}
                placement="bottom"
                interactive // cho phep select
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} onClick={() => setSearchResult([])} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        onFocus={() => setShowResult(true)}
                        onChange={(e) => {
                            if (!e.target.value.startsWith(' ')) {
                                setSearchValue(e.target.value);
                            }
                        }}
                        placeholder="Tìm kiếm"
                        spellCheck={false}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('search-clear')} onClick={handleClear}>
                            <ClearIcon />
                        </button>
                    )}
                    {loading && <LoadingIcon className={cx('loading')} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
