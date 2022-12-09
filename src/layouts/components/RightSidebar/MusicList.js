import images from '../../../assest/images/images';
import Music from '../../../components/Music/Music';
import { Form } from 'react-bootstrap';

function MusicList() {
    return (
        <div className="d-flex flex-column my-3">
            <div className="d-flex align-items-center">
                <div className="d-flex flex-column flex-grow-1 mb-2 ms-2">
                    <span className="fs-6 fw-bold">Tự động phát</span>
                    <span className=" fs-7 text-second ">Gợi ý từ nội dung đang phát</span>
                </div>
                <Form.Check type="switch" id="custom-switch" className="pe-1" />
            </div>
            <Music className="py-2" heightImg={40} widthImg={40} img={images.phahong} adult="Chung" name="Congkhoong" />
        </div>
    );
}

export default MusicList;
