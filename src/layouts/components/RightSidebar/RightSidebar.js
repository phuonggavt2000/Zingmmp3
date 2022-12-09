import classNames from 'classnames/bind';
import MusicList from './MusicList';
import PrevMusic from './PrevMusic';
import styles from './RightSidebar.module.scss';
import Transfer from './Transfer';

const cx = classNames.bind(styles);

function RightSidebar({ active }) {
    return (
        <div
            className={cx('wrapper', {
                active: active,
            })}
        >
            <Transfer />
            <div className={cx('musics')}>
                <PrevMusic />
                <MusicList />
            </div>
        </div>
    );
}

export default RightSidebar;
