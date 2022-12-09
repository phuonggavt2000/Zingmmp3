import classNames from 'classnames/bind';
import styles from './Player.module.scss';

import { CgArrowsExchange } from 'react-icons/cg';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';
import { BsArrowRepeat, BsPlayCircle, BsPauseCircle } from 'react-icons/bs';

import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../DefaultLayout/DefaultLayout';
import PlayerLeft from './PlayerLeft';
import vipAudio from '../../../assest/audios/audio';
import ControlAudio from './Audio';
import PlayerRight from './PlayerRight';

const cx = classNames.bind(styles);

function Player() {
    const data = useContext(ThemeContext);
    const { player, methodControlMusic, methodToggeSidebar, rightSidebar } = useContext(ThemeContext);
    const { img, name, adult, linkAudio, time = 177 } = player;

    const [audio] = useState(new Audio(vipAudio.yeulacuoi));
    const [playing, setPlaying] = useState(data.playing);

    const toggle = () => {
        methodControlMusic();
    };

    useEffect(() => {
        playing ? audio.play() : audio.pause();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playing]);

    useEffect(() => {
        if (linkAudio) {
            audio.src = linkAudio;
            audio.load();
            audio.play();
            setPlaying(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [linkAudio]);

    useEffect(() => {
        setPlaying(data.playing);
    }, [data.playing]);

    return (
        <div className={cx('wrapper')}>
            <PlayerLeft img={img} name={name} adult={adult} />
            <div className={cx('center')}>
                <div className={cx('control')}>
                    <div className={cx('icon')}>
                        <CgArrowsExchange />
                    </div>
                    <div className={cx('icon')}>
                        <BiSkipPrevious />
                    </div>
                    <div className={cx('play')} onClick={toggle}>
                        {playing ? <BsPauseCircle /> : <BsPlayCircle />}
                    </div>
                    <div className={cx('icon')}>
                        <BiSkipNext />
                    </div>
                    <div className={cx('icon')}>
                        <BsArrowRepeat />
                    </div>
                </div>
                <ControlAudio duration={time} audio={audio} data={data} />
            </div>
            <PlayerRight active={rightSidebar} methodToggeSidebar={methodToggeSidebar} />
        </div>
    );
}

export default Player;
