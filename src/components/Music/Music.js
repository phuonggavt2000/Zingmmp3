import classNames from 'classnames/bind';
import styles from './Music.module.scss';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';
import icons from '../../utils/Icons';
import Spinner from 'react-bootstrap/Spinner';
import { useContext } from 'react';
import { ThemeContext } from '../../layouts/DefaultLayout/DefaultLayout';
import WaveMusic from '../WaveMusic.js/WaveMusic';

const cx = classNames.bind(styles);

function Music({ name, adult, time, img, active, onClick, heightImg, widthImg, className, artists = [] }) {
    const data = useContext(ThemeContext);

    return (
        <div className={cx('music', { active: active })}>
            <div className={`d-flex align-items-center position-relative rounded-1 p-2 ${className}`}>
                <div
                    className={cx('img', {
                        disable: data.loading,
                    })}
                    onClick={onClick}
                    style={{
                        height: heightImg,
                        width: widthImg,
                    }}
                >
                    <Image src={img} />
                    <div className={cx('play')}>{<icons.BsPlayFill />}</div>
                    <div className={cx('control')}>
                        {data.playing && !data.loading && <WaveMusic />}
                        {!data.playing && !data.loading && <icons.BsPlayFill />}
                        {data.loading && <Spinner animation="border" />}
                    </div>
                </div>
                <div className={cx('desc')}>
                    <span className=" text-capitalize">{name}</span>
                    <div className="d-flex my-1">
                        {artists.map((artist, index) => (
                            <Link className="link-artist fs-8">{artist.name}</Link>
                        ))}
                    </div>

                    <span className={cx('time')}>{time}</span>
                </div>
            </div>
        </div>
    );
}

export default Music;
