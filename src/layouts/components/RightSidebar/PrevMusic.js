import images from '../../../assest/images/images';
import Music from '../../../components/Music/Music';

function PrevMusic() {
    return (
        <div className="d-flex flex-column mt-2">
            <Music className="py-2" heightImg={40} widthImg={40} img={images.phahong} adult="Chung" name="Congkhoong" />
        </div>
    );
}

export default PrevMusic;
