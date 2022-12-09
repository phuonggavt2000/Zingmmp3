import classNames from 'classnames/bind';
import styles from './WaveMusic.module.scss';

const cx = classNames.bind(styles);

function WaveMusic() {
    return (
        <div className={cx('waves')}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default WaveMusic;
