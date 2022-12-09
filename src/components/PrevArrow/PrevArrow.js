import { AiOutlineLeft } from 'react-icons/ai';
import styles from './PrevArrow.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PrevArrow(props) {
    const { className, onClick, none } = props;
    return (
        <div
            className={cx('prev')}
            style={{
                display: none,
            }}
        >
            <div className={className} onClick={onClick}>
                <AiOutlineLeft />
            </div>
        </div>
    );
}

export default PrevArrow;
