import classNames from 'classnames/bind';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

function Image({ src, alt = 'error', classNames = { rounded: true }, enlarge, sponsor, height, width }) {
    return (
        <img
            src={src}
            alt={alt}
            style={{
                height: height,
                width: width,
            }}
            className={cx('img', { ...classNames, enlarge, sponsor })}
        />
    );
}

export default Image;
