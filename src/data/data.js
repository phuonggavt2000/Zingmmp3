import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCommentDots,
    faFileAudio,
    faFloppyDisk,
    faFolderClosed,
    faNewspaper,
} from '@fortawesome/free-regular-svg-icons';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { BiCategory } from 'react-icons/bi';
import { AiOutlineStar, AiFillSetting } from 'react-icons/ai';
import { MdOndemandVideo } from 'react-icons/md';
import { RiTShirtAirLine, RiVipLine } from 'react-icons/ri';
import { FiUpload } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import config from '../config';
import images from '../assest/images/images';

export const sidebar = {
    medias: [
        {
            title: 'Cá Nhân',
            icon: <FontAwesomeIcon icon={faFolderClosed} />,
            path: config.routes.individual,
        },
        {
            title: 'Khám Phá',
            icon: <FontAwesomeIcon icon={faFloppyDisk} />,
            path: config.routes.discovery,
        },
        {
            title: '#zingchart',
            icon: <FontAwesomeIcon icon={faCommentDots} />,
            path: config.routes.zingChart,
        },
        {
            title: 'Radio',
            icon: <FontAwesomeIcon icon={faFileAudio} />,
            path: config.routes.radio,
        },
        {
            title: 'Following',
            icon: <FontAwesomeIcon icon={faNewspaper} />,
            path: config.routes.following,
        },
    ],
    music: [
        {
            title: 'Nhạc Mới',
            icon: <BsMusicNoteBeamed />,
            path: config.routes.newMusic,
        },
        {
            title: 'Thể Loại',
            icon: <BiCategory />,
            path: config.routes.category,
        },
        {
            title: 'Top 100',
            icon: <AiOutlineStar />,
            path: config.routes.top100,
        },
        {
            title: 'MV',
            icon: <MdOndemandVideo />,
            path: config.routes.musicVideo,
        },
    ],
};

export const searchContent = {
    controlItems: [
        {
            content: 'Chủ đề',
            icon: <RiTShirtAirLine />,
        },
        {
            content: 'Nâng cấp VIP',
            icon: <RiVipLine />,
        },
        {
            content: 'Tải lên',
            icon: <FiUpload />,
        },
        {
            content: 'Cài đặt',
            icon: <AiFillSetting />,
        },
        {
            content: 'Thông tin',
            icon: <CgProfile />,
        },
    ],
};

export const slides = [
    { banner: images.daivu },
    { banner: images.chung },
    { banner: images.huongly },
    { banner: images.kim },
    { banner: images.mono },
    { banner: images.vpop },
];
