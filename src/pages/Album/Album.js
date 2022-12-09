import classNames from 'classnames/bind';
import styles from './Album.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AlbumLeft from './AlbumLeft';
import AlbumRight from './AlbumRight';
import { useContext } from 'react';
import { ThemeContext } from '../../layouts/DefaultLayout/DefaultLayout';
import { Placeholder } from 'react-bootstrap';

const cx = classNames.bind(styles);

function Album() {
    const { detailPlaylist = {}, loadPage } = useContext(ThemeContext);
    const { encodeId, title, contentLastUpdate, artists, song = {}, thumbnailM, like, description } = detailPlaylist;
    const songs = song.items;
    const loadMusic = ['mb-5', 'mb-5', 'mb-5', 'mb-5', 'mb-5', 'mb-5', 'mb-5', 'mb-5'];
    return (
        <div className={cx('wrapper')}>
            <Row className="gx-0 my-4 h-100">
                <Col sm={4} className="px-5 overflow-hidden">
                    {loadPage ? (
                        <Placeholder animation="glow" className="">
                            <Placeholder xs={12} className={cx('placeholder_img')} />
                            <div className="text-center">
                                <Placeholder xs={10} className="mb-2" size="lg" />
                                <Placeholder xs={9} className="mb-2" />
                                <Placeholder xs={6} className="mb-2" />
                                <Placeholder xs={8} className="mb-2 rounded" size="lg" />
                                <Placeholder xs={5} />
                            </div>
                        </Placeholder>
                    ) : (
                        <AlbumLeft
                            like={like}
                            title={title}
                            timeStamp={contentLastUpdate}
                            artists={artists}
                            img={thumbnailM}
                        />
                    )}
                </Col>
                <Col sm={8} className=" h-100 overflow-hidden">
                    {loadPage ? (
                        <Placeholder animation="glow" className="text-center">
                            <Placeholder xs={12} size="lg" className="mb-5 rounded" />

                            {loadMusic.map((value, index) => (
                                <div className={value} key={index}>
                                    <Placeholder xs={4} className="rounded" />{' '}
                                    <Placeholder xs={3} className="rounded" />{' '}
                                    <Placeholder xs={3} className="rounded" />
                                </div>
                            ))}
                        </Placeholder>
                    ) : (
                        <AlbumRight decs={description} songs={songs} code={encodeId} />
                    )}
                </Col>
            </Row>
        </div>
    );
}

export default Album;
