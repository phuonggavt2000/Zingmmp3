import classNames from 'classnames/bind';
import styles from './Sponsor.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../../../components/Image/Image';
import images from '../../../assest/images/images';

const cx = classNames.bind(styles);

function Sponsor() {
    return (
        <div className={cx('wrapper')}>
            <Row className="gx-2 gy-2">
                <Col lg={6} md={12}>
                    <Row className="gx-2">
                        <Col sm={3}>
                            <div className="bg-white p-3 rounded w-100">
                                <div className={cx('img')}>
                                    <Image src={images.sponsor1} sponsor />
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="bg-white p-3 rounded w-100">
                                <div className={cx('img')}>
                                    <Image src={images.sponsor2} sponsor />
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="bg-white p-3 rounded w-100">
                                <div className={cx('img')}>
                                    <Image src={images.sponsor3} sponsor />
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="bg-white p-3 rounded w-100">
                                <div className={cx('img')}>
                                    <Image src={images.sponsor4} sponsor />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} md={12}>
                    <Row className="gx-2">
                        <Col>
                            <div className="bg-white p-3 rounded w-100 ">
                                <div className={cx('img')}>
                                    <Image src={images.sponsor5} sponsor />
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="bg-white p-3 rounded w-100">
                                <div className={cx('img')}>
                                    <Image src={images.sponsor6} sponsor />
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="bg-white p-3 rounded w-100">
                                <div className={cx('img')}>
                                    <Image src={images.sponsor7} sponsor />
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="bg-white p-3 rounded w-100">
                                <div className={cx('img')}>
                                    <Image src={images.sponsor8} sponsor />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Row className="gx-0 my-2">
                    <Col lg={6} md={6}>
                        <Row className="justify-content-end gx-2 px-1">
                            <Col lg={3} sm={6}>
                                <div className="bg-white p-3 rounded w-100">
                                    <div className={cx('img')}>
                                        <Image src={images.sponsor9} sponsor />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} md={6}>
                        <Row className="gx-2 px-1">
                            <Col lg={3} sm={6}>
                                <div className="bg-white p-3 rounded w-100">
                                    <div className={cx('img')}>
                                        <Image src={images.sponsor10} sponsor />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>
        </div>
    );
}

export default Sponsor;
