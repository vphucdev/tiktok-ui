import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import {
    CommentIcon,
    FlagIcon,
    HeartIcon,
    MusicIcon,
    MutedIcon,
    PauseIcon,
    PlaySolidIcon,
    ShareSolidIcon,
    VolumeIcon,
} from '~/components/Icons/';
import Image from '~/components/Image';
import styles from './Video.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '~/components/SuggestedAccountItems/AccountPreview';

const cx = classNames.bind(styles);

function Video({ data, mute, volume, toggleMute, adjustVolume }) {
    const [isPlay, setIsPlay] = useState(false);

    const ref = useRef();
    const { ref: inViewRef, inView } = useInView({
        /* Optional options */
        threshold: 1,
    });

    const setRefs = useCallback(
        (node) => {
            // Ref's from useRef needs to have the node assigned to `current`
            ref.current = node;
            // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
            inViewRef(node);
        },
        [inViewRef],
    );

    useEffect(() => {
        if (mute) {
            ref.current.volume = 0;
        } else ref.current.volume = volume;
    }, [volume]);

    const playVideo = () => {
        setTimeout(() => {
            ref.current.play();
            setIsPlay(true);
        }, 200);
    };

    const pauseVideo = () => {
        ref.current.pause();
        setIsPlay(false);
    };

    // function playVideoInViewport() {
    //     var bounding = ref.current.getBoundingClientRect();

    //     if (
    //         bounding.top >= 0 &&
    //         bounding.left >= 0 &&
    //         bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
    //         bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    //     ) {
    //         playVideo();
    //     } else {
    //         pauseVideo();
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', playVideoInViewport);
    //     return () => window.removeEventListener('scroll', playVideoInViewport);
    // });

    useEffect(() => {
        if (inView) {
            if (!isPlay) {
                playVideo();
            }
        } else {
            if (isPlay) {
                pauseVideo();
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    const handleTogglePlay = () => {
        if (isPlay) {
            pauseVideo();
        } else {
            playVideo();
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Tippy
                interactive
                placement="bottom-start"
                // offset={[0, 10]}
                delay={[800, 0]}
                render={(attrs) => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <AccountPreview data={data.user} />
                        </PopperWrapper>
                    </div>
                )}
            >
                <Link className={cx('link')} to={`/@${data.user.nickname}`}>
                    <Image className={cx('avatar')} src={data.user.avatar} alt={data.user.nickname} />
                </Link>
            </Tippy>
            <div className={cx('content')}>
                <div className={cx('info')}>
                    <Tippy
                        interactive
                        placement="bottom-start"
                        // offset={[0, 10]}
                        delay={[800, 0]}
                        render={(attrs) => (
                            <div className="box" tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <AccountPreview data={data.user} />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <Link className={cx('name')} to={`/@${data.user.nickname}`}>
                            <h4 className={cx('nickname')}>
                                <span>{data.user.nickname}</span>
                                {data.user.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                            </h4>
                            <span className={cx('fullname')}>{`${data.user.first_name}  ${data.user.last_name}`}</span>
                        </Link>
                    </Tippy>
                    <div className={cx('desc')}>{data.description}</div>
                    <h4 className={cx('music')}>
                        <MusicIcon /> {data.music}
                    </h4>
                    <Button className={cx('btn-follow')} outline>
                        Follow
                    </Button>
                </div>
                <div className={cx('video')}>
                    <div className={cx('video-content')}>
                        <video
                            ref={setRefs}
                            src={data.file_url}
                            loop
                            // muted="muted"
                            style={
                                data.meta.video.resolution_x < data.meta.video.resolution_y
                                    ? { width: '273px' }
                                    : { width: '550px' }
                            }
                        ></video>
                        <button className={cx('control-play')} onClick={handleTogglePlay}>
                            {isPlay ? <PauseIcon /> : <PlaySolidIcon />}
                        </button>

                        <button className={cx('report')}>
                            <FlagIcon className={cx('flag-icon')} /> Báo cáo
                        </button>
                        <button className={cx('control-sound')}>
                            <div className={cx('control-volume')}>
                                <input
                                    className={cx('range-slider')}
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="2"
                                    onChange={adjustVolume}
                                    value={volume * 100}
                                />
                            </div>
                            <div className={cx('volume-icon')} onClick={toggleMute}>
                                {mute ? <MutedIcon /> : <VolumeIcon />}
                            </div>
                        </button>
                    </div>

                    <div className={cx('actions')}>
                        <div className={cx('action-inner')}>
                            <Button className={cx('action-btn')} circle>
                                <HeartIcon />
                            </Button>
                            <p className={cx('likes-count')}>{data.likes_count}</p>
                        </div>

                        <div className={cx('action-inner')}>
                            <Button className={cx('action-btn')} circle>
                                <CommentIcon className={cx('action-icon')} />
                            </Button>
                            <p className={cx('comments-count')}>{data.comments_count}</p>
                        </div>

                        <div className={cx('action-inner')}>
                            <Button className={cx('action-btn')} circle>
                                <ShareSolidIcon className={cx('action-icon')} />
                            </Button>
                            <p className={cx('shares-count')}>{data.shares_count}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Video.propTypes = {
    data: PropTypes.object,
};

export default Video;
