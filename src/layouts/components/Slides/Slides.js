import Image from '../../../components/Image/Image';
import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import PrevArrow from '../../../components/PrevArrow/PrevArrow';
import { useContext } from 'react';
import { ThemeContext } from '../../DefaultLayout/DefaultLayout';
import data from '../../../data';
import NextArrow from '../../../components/NextArrow/NextArrow';

const cx = classNames.bind(styles);

function Slides() {
    const datas = useContext(ThemeContext);
    const items = datas.banner.items || data.slides;

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
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

    const getDetail = (id) => {};

    return (
        <div className={cx('wrapper')}>
            {items && (
                <Slider {...settings}>
                    {items.map((slide, index) => (
                        <div
                            key={index}
                            className={cx('item')}
                            onClick={() => {
                                getDetail(slide.encodeId);
                            }}
                        >
                            <Image src={slide.banner} alt="ok" />
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
}

export default Slides;
