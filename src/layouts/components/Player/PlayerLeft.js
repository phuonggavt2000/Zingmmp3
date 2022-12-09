import images from '../../../assest/images/images';
import Image from '../../../components/Image/Image';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import styles from './Player.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PlayerLeft({ img = images.yeulacuoi, name = 'Yêu là cưới', adult = 'Hồ Phát' }) {
    return (
        <div className={cx('left')}>
            <div className={cx('img')}>
                <Image src={img} classNames="rounded" />
            </div>
            <div className={cx('title')}>
                <span className={cx('name')}>{name}</span>
                <span className={cx('adult')}>{adult}</span>
            </div>
            <div className={cx('favourite')}>
                <AiOutlineHeart />
            </div>
            <div className={cx('more')}>
                <FiMoreHorizontal />
            </div>
        </div>
    );
}

export default PlayerLeft;
