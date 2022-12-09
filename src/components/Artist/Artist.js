import styles from './Artist.module.scss';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import Image from '../Image/Image';
import NextArrow from '../NextArrow/NextArrow';
import PrevArrow from '../PrevArrow/PrevArrow';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Artist({ artists, title, getPlaylist }) {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className={cx('wrapper')}>
            <span className="fs-4 fw-bold mb-3 d-block ms-2">{title}</span>

            {artists && (
                <Slider {...settings}>
                    {artists.map((artist, index) => (
                        <Link
                            key={index}
                            className={cx('item')}
                            to={artist.link}
                            onClick={() => {
                                getPlaylist(artist.encodeId);
                            }}
                        >
                            <div className={cx('img')}>
                                <Image enlarge src={artist.thumbnail} alt="ok" />
                            </div>
                        </Link>
                    ))}
                </Slider>
            )}
        </div>
    );
}

export default Artist;
