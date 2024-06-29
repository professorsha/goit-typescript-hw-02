import css from './ImageCard.module.css';
import { ImageCardProps } from './ImageCard.types';
const ImageCard: React.FC<ImageCardProps> = ({
  imgUrl,
  imgUrlBig,
  imgDescr,
  imgLikes,
  onClick,
}) => {
  const handleClick = () => {
    onClick(imgUrlBig, imgLikes);
  };
  return (
    <div onClick={handleClick} className={css.imageCard}>
      <img src={imgUrl} alt={imgDescr}></img>
    </div>
  );
};
export default ImageCard;
