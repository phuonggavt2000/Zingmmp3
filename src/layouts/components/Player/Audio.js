import styles from './Player.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import moment from 'moment';

const cx = classNames.bind(styles);

function ControlAudio({ duration, audio, data }) {
    const toltalTime = moment.utc(moment.duration(duration, 'seconds').asMilliseconds()).format('mm:ss');

    const [range, setRange] = useState(0);

    const [currentTime, setCurrentTime] = useState(
        moment.utc(moment.duration(0, 'seconds').asMilliseconds()).format('mm:ss'),
    );
    const [isMouseDown, setIsMouseDown] = useState(false);

    audio.ontimeupdate = (e) => {
        const time = moment.utc(moment.duration(audio.currentTime, 'seconds').asMilliseconds()).format('mm:ss');
        let CurrentPercent = (audio.currentTime / audio.duration) * 100;
        setCurrentTime(time);
        if (!isMouseDown) {
            setRange(CurrentPercent);
        }

        if (!CurrentPercent) {
            setRange(`${CurrentPercent}`);
        }
    };

    audio.onended = () => {
        data.methodControlMusic();
    };

    return (
        <div className={cx('audio')}>
            <span className={cx('left_time')}>{currentTime}</span>
            <input
                type="range"
                min="0"
                max="100"
                value={range}
                onChange={(e) => {
                    setRange(e.target.value);
                }}
                className={cx('range')}
                onClick={(e) => {
                    let seekTime = (duration / 100) * e.target.value;
                    audio.currentTime = seekTime;
                }}
                onMouseDown={() => {
                    setIsMouseDown(true);
                }}
                onMouseOut={() => {
                    setIsMouseDown(false);
                }}
            />

            <span className={cx('right_time')}>{toltalTime}</span>
        </div>
    );
}

export default ControlAudio;
