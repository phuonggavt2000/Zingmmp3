import classNames from 'classnames/bind';
import styles from './Album.module.scss';
import icons from '../../utils/Icons';
import { Link } from 'react-router-dom';
import moment from 'moment';
import nFormatter from '../../utils/nFormatter';
import { Button } from 'react-bootstrap';

const cx = classNames.bind(styles);

function AlbumLeft({ title, timeStamp, artists = [], img, like }) {
    const lastUpdate = moment.unix(timeStamp).format('DD/MM/YYYY');
    const convertLike = nFormatter(like);

    return (
        <div className={cx('album_left')}>
            <div className={cx('left_img')}>
                <img src={img} alt={'error'} className={cx('img')} />
                <div className={cx('play')}>
                    <icons.BsPlayCircle />
                </div>
            </div>
            <span className="fw-bold fs-5 mt-2 py-1  overflow-hidden">{title}</span>
            <div className="d-flex flex-column text-center fs-7">
                <div>
                    <span className="text-secondary mb-1 text-nowrap">Cập nhật: {lastUpdate}</span>
                </div>
                <div className="d-flex justify-content-center mb-1 text-wrap ">
                    {artists.map((artist, index) => (
                        <Link key={index} className="text-secondary text-nowrap link-hover-primary pe-1 link-artist">
                            {artist.name}
                        </Link>
                    ))}
                </div>
                <span className=" text-nowrap text-secondary  mb-1">{convertLike} nguời yêu thích</span>
            </div>
            <Button
                variant="primary"
                className="mx-5 mt-2 d-flex justify-content-center align-items-center rounded-pill text-capitalize"
            >
                {<icons.BsPlayFill className="fs-4" />} Phát Tất cả
            </Button>
            <div className="mt-3 pb-5">
                <Button variant="alpha" className="rounded-circle me-1 ">
                    <icons.AiOutlineHeart />
                </Button>
                <Button variant="alpha" className="rounded-circle ms-1 ms-1">
                    <icons.FiMoreHorizontal />
                </Button>
            </div>
        </div>
    );
}

export default AlbumLeft;
