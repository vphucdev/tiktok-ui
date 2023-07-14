import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

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
const cx = classNames.bind(styles);

function Video({ data }) {
    const [isPlay, setIsPlay] = useState(false);
    const videoRef = useRef();
    // console.log(data.file_url);

    const handleToggle = () => {
        if (!isPlay) {
            videoRef.current.play();
            setIsPlay(true);
        } else {
            videoRef.current.pause();
            setIsPlay(false);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <Link className={cx('link')} to={`/@${data.user.nickname}`}>
                <Image className={cx('avatar')} src={data.user.avatar} alt={data.user.nickname} />
            </Link>

            <div className={cx('content')}>
                <div className={cx('info')}>
                    <Link className={cx('name')} to={`/@${data.user.nickname}`}>
                        <h4 className={cx('nickname')}>
                            <span>{data.user.nickname}</span>
                            {true && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </h4>
                        <span className={cx('fullname')}>{`${data.user.first_name}  ${data.user.last_name}`}</span>
                    </Link>
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
                            ref={videoRef}
                            src={data.file_url}
                            loop
                            style={
                                data.meta.video.resolution_x < data.meta.video.resolution_y
                                    ? { width: '273px' }
                                    : { width: '463px' }
                            }
                        ></video>
                        <button className={cx('control-play')} onClick={handleToggle}>
                            {isPlay ? <PauseIcon /> : <PlaySolidIcon />}
                        </button>

                        <button className={cx('report')}>
                            <FlagIcon className={cx('flag-icon')} /> Báo cáo
                        </button>
                        {/*<button>
                            <VolumeIcon />
                        </button>
                        <button>
                            <MutedIcon />
                        </button> */}
                    </div>
                    <div className={cx('actions')}>
                        <div className={cx('action-inner')}>
                            <Button className={cx('action-btn')} circle>
                                <HeartIcon />
                            </Button>
                            <p className={cx('like-count')}>123</p>
                        </div>

                        <div className={cx('action-inner')}>
                            <Button className={cx('action-btn')} circle>
                                <CommentIcon className={cx('action-icon')} />
                            </Button>
                            <p className={cx('like-count')}>123</p>
                        </div>

                        <div className={cx('action-inner')}>
                            <Button className={cx('action-btn')} circle>
                                <ShareSolidIcon className={cx('action-icon')} />
                            </Button>
                            <p className={cx('like-count')}>123</p>
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