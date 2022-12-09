import classNames from 'classnames/bind';
import styles from './WeekChart.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Image from '../../../components/Image/Image';

const cx = classNames.bind(styles);

function WeekChart({ items = [] }) {
    return (
        <div className={cx('wrapper')}>
            <Row>
                {items.map((item, index) => (
                    <Col key={index}>
                        <Link to={item.link}>
                            <div className="overflow-hidden rounded">
                                <Image enlarge src={item.cover} />
                            </div>
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default WeekChart;
