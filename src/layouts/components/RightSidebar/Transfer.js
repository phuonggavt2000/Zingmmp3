import classNames from 'classnames/bind';
import styles from './RightSidebar.module.scss';
import { Button } from 'react-bootstrap';
import icons from '../../../utils/Icons';

const cx = classNames.bind(styles);

function Transfer() {
    return (
        <div className="d-flex">
            <div className={cx('transfer')}>
                <Button variant="secondary" className="h-100 w-50 fs-8 r rounded-5 text-nowrap" size="sm">
                    Danh sách phát
                </Button>
                <Button variant="transpanret" className="h-100 w-50 fs-8 rounded-5 text-nowrap" size="sm">
                    Nghe gần đây
                </Button>
            </div>
            <Button variant="alpha" size="sm" className="rounded-circle ms-2">
                {<icons.TfiAlarmClock />}
            </Button>
            <Button variant="alpha" size="sm" className="rounded-circle ms-2">
                {<icons.FiMoreHorizontal />}
            </Button>
        </div>
    );
}

export default Transfer;
