import { BsSearch } from 'react-icons/bs';
import { MdClear } from 'react-icons/md';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { MdOutlineShowChart } from 'react-icons/md';
import { useEffect, useState, useRef } from 'react';

const cx = classNames.bind(styles);

function Search() {
    const [list, setList] = useState(false);
    const [value, setValue] = useState('');

    const ref = useRef();

    useEffect(() => {
        if (value) {
            setList(true);
        } else {
            setList(false);
        }
    }, [value]);
    return (
        <div
            className={cx('wrapper', {
                active: list,
            })}
        >
            <div className={cx('wrapper-search')}>
                <div className={cx('wrapper-search_icon')}>
                    <BsSearch />
                </div>
                <input
                    ref={ref}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    type="text"
                    className={cx('wrapper-search_input')}
                    placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                />
                {list && (
                    <div
                        className={cx('wrapper-search_icon')}
                        onClick={(e) => {
                            setValue('');
                            ref.current.value = '';
                        }}
                    >
                        <MdClear />
                    </div>
                )}
            </div>
            {list && (
                <div className={cx('search')}>
                    <Nav className={cx('result')}>
                        <span className={cx('result_heading')}>Đề xuất cho bạn</span>
                        <Nav.Link as={Link} className={cx('result-item')}>
                            <MdOutlineShowChart />
                            <span className={cx('result_title')}> Người nhu anh</span>
                        </Nav.Link>
                        <Nav.Link as={Link} className={cx('result-item')}>
                            <MdOutlineShowChart />
                            <span className={cx('result_title')}> Người nhu anh</span>
                        </Nav.Link>
                        <Nav.Link as={Link} className={cx('result-item')}>
                            <MdOutlineShowChart />
                            <span className={cx('result_title')}> Người nhu anh</span>
                        </Nav.Link>
                        <Nav.Link as={Link} className={cx('result-item')}>
                            <MdOutlineShowChart />
                            <span className={cx('result_title')}> Người nhu anh</span>
                        </Nav.Link>
                        <Nav.Link as={Link} className={cx('result-item')}>
                            <MdOutlineShowChart />
                            <span className={cx('result_title')}> Người nhu anh</span>
                        </Nav.Link>
                        <Nav.Link as={Link} className={cx('result-item')}>
                            <MdOutlineShowChart />
                            <span className={cx('result_title')}> Người nhu anh</span>
                        </Nav.Link>
                        <Nav.Link as={Link} className={cx('result-item')}>
                            <MdOutlineShowChart />
                            <span className={cx('result_title')}> Người nhu anh</span>
                        </Nav.Link>
                    </Nav>
                </div>
            )}
        </div>
    );
}

export default Search;
