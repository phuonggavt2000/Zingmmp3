/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import styles from './NewMusic.module.scss';
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import icons from '../../../utils/Icons';
import Music from '../../../components/Music/Music';
import { Row, Col } from 'react-bootstrap';
import { ThemeContext } from '../../DefaultLayout/DefaultLayout';
import moment from 'moment';
import 'moment/locale/vi';

const cx = classNames.bind(styles);

function NewMusic() {
    const data = useContext(ThemeContext);

    const [active, setActive] = useState('all');
    const [music, setMusic] = useState(null);
    const [activeMusic, setActiveMusic] = useState(false);

    useEffect(() => {
        setMusic(data.newMusic.items);
    }, [data.newMusic.items]);

    const controls = [
        {
            type: 'all',
            title: 'TẤT CẢ',
        },
        {
            type: 'vPop',
            title: 'Việt Nam',
        },
        {
            type: 'others',
            title: 'Quốc tế',
        },
    ];

    const updateActive = (type) => {
        setActive(type);
        setActiveMusic(false);
    };

    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>Mới Phát Hành</span>
            <div className={cx('control')}>
                {controls.map((value, index) => (
                    <div
                        className={cx('musicType', {
                            active: value.type === active,
                        })}
                        onClick={() => {
                            updateActive(value.type);
                        }}
                        key={index}
                    >
                        <span className={cx('musicType_title')}>{value.title}</span>
                    </div>
                ))}

                <Link to={'/'} className={cx('all')}>
                    <span className={cx('all_title')}>TẤT CẢ</span>
                    {<icons.AiOutlineRight />}
                </Link>
            </div>
            {music && (
                <div className={cx('musics')}>
                    <Row className="gy-2 gx-4">
                        {music[active].map((value, index) => {
                            const active = index === activeMusic;
                            return (
                                <Col key={index} xs={6} lg={4}>
                                    <Music
                                        name={value.title}
                                        adult={value.artistsNames}
                                        img={value.thumbnail}
                                        time={moment.unix(value.releaseDate).fromNow()}
                                        artists={value.artists}
                                        onClick={() => {
                                            if (value.title === data.player.name) {
                                                data.methodControlMusic();
                                            } else {
                                                setActiveMusic(index);
                                                data.methodRenderSong(value.encodeId);
                                            }
                                        }}
                                        active={active}
                                        className="py-2"
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                </div>
            )}
        </div>
    );
}

export default NewMusic;
