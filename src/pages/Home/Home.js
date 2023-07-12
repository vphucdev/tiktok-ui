import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import * as videoService from '~/services/videoService';
import styles from './Home.module.scss';
import Video from '~/components/Video/Video';

const cx = classNames.bind(styles);

function Home() {
    const [page, setpage] = useState(1);
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        const fetApi = async () => {
            const result = await videoService.getVideo('for-you', page);
            setVideos(result);
        };

        fetApi();
    }, [page]);

    return (
        <div className={cx('wrapper')}>
            {videos.map((video) => (
                <Video key={video.id} data={video} />
            ))}
        </div>
    );
}

export default Home;
