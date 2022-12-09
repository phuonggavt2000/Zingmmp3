import styles from './Album.module.scss';
import classNames from 'classnames/bind';

import { Row, Col } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../layouts/DefaultLayout/DefaultLayout';
import Music from './Music';

const cx = classNames.bind(styles);

function AlbumRight({ songs = [], decs, code }) {
    const { loading, playing, methodGetPlaylist, methodRenderSong, methodControlMusic, player } =
        useContext(ThemeContext);
    const [active, setActive] = useState(false);

    const handleActive = (index) => {
        setActive(index);
    };

    return (
        <div className={cx('album_right')}>
            <div>
                <span className="text-secondary fs-6 me-2">Lời tựa</span>
                <span>{decs}</span>
            </div>

            <div className="text-secondary fs-7 border-secondary my-3">
                <Row className="g-0 ">
                    <Col sm={12} className="border-color-album p-2 fw-semibold ">
                        <Row>
                            <Col sm={6}>
                                <span>Bài hát</span>
                            </Col>
                            <Col sm={4}> Album</Col>
                            <Col sm={2}>Thời gian</Col>
                        </Row>
                    </Col>

                    {songs.map((song, index) => {
                        const isActive = index === active;
                        return (
                            <Music
                                key={index}
                                duration={song.duration}
                                img={song.thumbnail}
                                artists={song.artists}
                                title={song.title}
                                loading={loading}
                                playing={playing}
                                album={song.album}
                                methodGetPlaylist={methodGetPlaylist}
                                code={code}
                                active={isActive}
                                onClick={() => {
                                    if (song.title === player.name) {
                                        methodControlMusic();
                                    } else {
                                        handleActive(index);
                                        methodRenderSong(song.encodeId);
                                    }
                                }}
                            />
                        );
                    })}
                </Row>
            </div>
        </div>
    );
}

export default AlbumRight;
