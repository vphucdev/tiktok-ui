import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import * as videoService from '~/services/videoService';
import styles from './Home.module.scss';
import Video from '~/components/Video/Video';

const cx = classNames.bind(styles);

function Home() {
    const [page, setPage] = useState(1);
    const [videos, setVideos] = useState([]);
    const [mute, setMute] = useState(true);
    const [volume, setVolume] = useState(0.5);
    const [prevVolume, setPrevVolume] = useState(volume);

    console.log('prevVolume :' + prevVolume);

    useEffect(() => {
        const fetApi = async () => {
            const result = await videoService.getVideo('for-you', page);
            setVideos(result);
        };

        fetApi();
    }, [page]);

    useEffect(() => {
        if (volume === 0) {
            setMute(true);
        }
        if (mute) {
            setVolume(0);
        }
    }, [volume]);

    const handleToggleMute = () => {
        if (mute) {
            setVolume(prevVolume);
            setMute(false);
        } else {
            setPrevVolume(volume);
            setVolume(0);
            setMute(true);
        }
    };

    const handleAdjustVolume = (e) => {
        if (mute) {
            setVolume(e.target.value / 100);
            setPrevVolume(volume);
            setMute(false);
        } else {
            setVolume(e.target.value / 100);
            setPrevVolume(volume);
        }
    };
    return (
        <div className={cx('wrapper')}>
            {videos.map((video) => (
                <Video
                    key={video.id}
                    data={video}
                    mute={mute}
                    volume={volume}
                    toggleMute={handleToggleMute}
                    adjustVolume={handleAdjustVolume}
                />
            ))}
        </div>
    );
}

export default Home;
