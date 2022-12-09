import { AiOutlineRight } from 'react-icons/ai';
import styles from './NextArrow.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function NextArrow(props) {
    const { className, onClick, none } = props;
    return (
        <div
            className={cx('next')}
            style={{
                display: none,
            }}
        >
            <div className={className} onClick={onClick}>
                <AiOutlineRight />
            </div>
        </div>
    );
}

export default NextArrow;
