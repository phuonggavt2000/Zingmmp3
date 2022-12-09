/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import images from '../../../assest/images/images';
import { Nav, Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import data from '../../../data';
import { IoMdAdd } from 'react-icons/io';

function LeftSidebar() {
    const inactive = 'px-4 d-flex align-items-center sidebar-item';
    const active = 'active px-4 d-flex align-items-center sidebar-item';

    const [activeLink, setActiveLink] = useState('home');

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Nav className="sidebar">
            <Link as={Link} to="/" className="sidebar-logo">
                <img className="logo " src={images.logo} />
            </Link>
            <div className="d-flex flex-column sidebar__container">
                <div className="sidebar-items">
                    {data.sidebar.medias.map((media, index) => {
                        return (
                            <Nav.Link
                                key={index}
                                as={Link}
                                to={media.path}
                                className={activeLink === media.path ? active : inactive}
                                onClick={() => onUpdateActiveLink(media.path)}
                            >
                                {media.icon}
                                <span className="sidebar-title">{media.title}</span>
                            </Nav.Link>
                        );
                    })}
                </div>
                <div className="sidebar-select">
                    <div className="sidebar-select-music">
                        {data.sidebar.music.map((media, index) => {
                            return (
                                <Nav.Link
                                    key={index}
                                    as={Link}
                                    to={media.path}
                                    className={activeLink === media.path ? active : inactive}
                                    onClick={() => onUpdateActiveLink(media.path)}
                                >
                                    {media.icon}
                                    <span className="sidebar-title">{media.title}</span>
                                </Nav.Link>
                            );
                        })}
                        <Card className="text-center card-vip">
                            <Card.Body className="card-container">
                                <Card.Text>Nghe nhạc không quản cáo cùng kho nhạc VIP</Card.Text>
                                <Button as={Link} to={'/'} className="card-vip-button">
                                    NÂNG CẤP VIP
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card className="text-center card-vip">
                            <Card.Body className="card-container">
                                <Card.Text>Xem Phim không quản cáo cùng kho phim VIP</Card.Text>
                                <Button as={Link} to={'/'} className="card-vip-button">
                                    NÂNG CẤP VIP
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card className="text-center card-vip">
                            <Card.Body className="card-container">
                                <Card.Text>Xem Phim không quản cáo cùng kho phim VIP</Card.Text>
                                <Button as={Link} to={'/'} className="card-vip-button">
                                    NÂNG CẤP VIP
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="create-list d-flex align-items-center justify-content-center ">
                <IoMdAdd className="create-list_icon" />
                <span className="create-list_title">Tạo playlist mới</span>
            </div>
        </Nav>
    );
}

export default LeftSidebar;
