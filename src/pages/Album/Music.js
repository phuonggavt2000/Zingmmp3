import Image from '../../components/Image/Image';
import { Link } from 'react-router-dom';
import icons from '../../utils/Icons';
import { Button, Row, Col, Spinner } from 'react-bootstrap';
import styles from './Album.module.scss';
import classNames from 'classnames/bind';
import durationFormat from '../../utils/durationFormat';
import { useState } from 'react';
import WaveMusic from '../../components/WaveMusic.js/WaveMusic';

const cx = classNames.bind(styles);

function Music({
    loading,
    playing,
    active,
    img,
    duration,
    artists = [],
    title,
    album = {},
    methodGetPlaylist,
    code,
    onClick,
}) {
    const convertDuration = durationFormat(duration);
    const [id, setId] = useState(code);

    return (
        <Col sm={12} className="border-color-album">
            <div
                className={cx('item', {
                    active: active,
                })}
            >
                <Row>
                    <Col sm={6}>
                        <div className="d-flex align-items-center ">
                            <div
                                className={cx('img', {
                                    disable: loading,
                                })}
                                onClick={onClick}
                            >
                                <Image src={img} />
                                <div className={cx('play')}>{<icons.BsPlayFill />}</div>

                                <div className={cx('control')}>
                                    {playing && !loading && <WaveMusic />}
                                    {!playing && !loading && <icons.BsPlayFill />}
                                    {loading && <Spinner animation="border" />}
                                </div>
                            </div>
                            <div className="d-flex flex-column my-2 ms-2">
                                <span className="text-white">{title}</span>
                                <div className="d-flex">
                                    {artists.map((artist, index) => (
                                        <Link
                                            key={index}
                                            className="text-secondary fs-8 link-hover-primary text-nowrap me-1"
                                        >
                                            {artist.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={4}>
                        {' '}
                        <div className="d-flex h-100 align-items-center">
                            <Link
                                to={album.link}
                                className="text-secondary  d-block link-hover-primary"
                                onClick={() => {
                                    const isAlbum = id === album.encodeId;
                                    setId(album.encodeId);

                                    if (!isAlbum) {
                                        methodGetPlaylist(album.encodeId);
                                    }
                                }}
                            >
                                {album.title}
                            </Link>
                        </div>
                    </Col>
                    <Col sm={2}>
                        {' '}
                        <div className="d-flex h-100 align-items-center justify-content-start">
                            <span className={cx('time')}>{convertDuration}</span>
                            <div className={cx('plush')}>
                                <Button variant="transparent" className="rounded-pill btn-bd-icon-hover">
                                    <icons.GiMicrophone />
                                </Button>
                                <Button variant="transparent" className="rounded-pill btn-bd-icon-hover">
                                    <icons.AiOutlineHeart />
                                </Button>
                                <Button variant="transparent" className="rounded-pill btn-bd-icon-hover me-5">
                                    <icons.FiMoreHorizontal />
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    );
}

export default Music;
