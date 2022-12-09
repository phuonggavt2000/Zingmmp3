import classNames from 'classnames/bind';
import styles from './NewRelease.module.scss';
import Image from '../../../components/Image/Image';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import PrevArrow from '../../../components/PrevArrow/PrevArrow';
import NextArrow from '../../../components/NextArrow/NextArrow';
import icons from '../../../utils/Icons';
import moment from 'moment';

const cx = classNames.bind(styles);

function NewRelease({ items = [], title, link }) {
    console.log('link', link);
    console.log('title', title);
    console.log('items', items);
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: <PrevArrow none="none" />,
        nextArrow: <NextArrow none="none" />,
    };

    return (
        <div className={cx('wrapper')}>
            <div className="d-flex align-items-center mx-2 mb-3">
                <span className="fs-4 fw-bold text-capitalize">{title}</span>
                <Link className="text-second hover-primary ms-auto ">Tất cả {<icons.AiOutlineRight />}</Link>
            </div>
            <Slider {...settings}>
                {items.map((item, index) => {
                    const dateString = moment.unix(item.releasedAt).format('DD/MM/YYYY');

                    return (
                        <div key={index} className="px-2">
                            <div className="d-flex bg-ct-alpha rounded justify-content-center align-items-center p-3 ">
                                <div className={cx('img')}>
                                    <Image enlarge src={item.thumbnailM} />
                                </div>
                                <div className="d-flex flex-column flex-grow-1 p-2">
                                    <div>
                                        <span className={cx('title')}>{item.title}</span>
                                        <div className="fs-7 ">
                                            {item.artists.map((artist, index) => (
                                                <Link key={index} className="link-artist">
                                                    {artist.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-auto d-flex justify-content-center align-items-center">
                                        <span className={cx('rank')}>#{index + 1}</span>
                                        <span className="ms-auto text-second">{dateString}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <div className="px-2">
                    <Link className=" position-relative d-flex bg-ct-alpha rounded justify-content-center align-items-center p-3 ">
                        <div className={cx('img')}></div>
                        <span className="position-absolute fs-4 text-primary">Xem Thêm</span>
                    </Link>
                </div>
            </Slider>
        </div>
    );
}

export default NewRelease;
