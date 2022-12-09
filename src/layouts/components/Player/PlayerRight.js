import styles from './Player.module.scss';
import classNames from 'classnames/bind';
import { Button } from 'react-bootstrap';
import icons from '../../../utils/Icons';

const cx = classNames.bind(styles);

function PlayerRight({ methodToggeSidebar, active }) {
    return (
        <div className={cx('right')}>
            <div className="ms-auto d-flex">
                <Button
                    variant="transparent"
                    disabled
                    size="sm"
                    className="ms-2 rounded-circle fs-5 btn-bd-icon-hover "
                >
                    {<icons.MdOndemandVideo />}
                </Button>
                <Button variant="transparent" size="sm" className="ms-2 rounded-circle fs-5 btn-bd-icon-hover ">
                    {<icons.GiMicrophone />}
                </Button>
                <Button variant="transparent" size="sm" className="ms-2 rounded-circle btn-bd-icon-hover fs-5">
                    {<icons.BsVolumeUp />}
                </Button>
                <div className="ps-4 ms-2 border-start border-secondary ">
                    <Button
                        className="fs-5"
                        size="sm"
                        variant={active ? 'primary' : 'alpha'}
                        onClick={() => {
                            methodToggeSidebar();
                        }}
                    >
                        {<icons.MdQueueMusic />}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PlayerRight;
