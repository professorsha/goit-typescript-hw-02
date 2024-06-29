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
    <div onClick={handleClick}>
      {/* <p>likes:{item.likes}</p>
              <p>description:{item.description}</p>
              <span>url for modal: {item.urls.regular}</span> */}
      <img
        className={css.galeryImg}
        src={imgUrl}
        height="300px"
        alt={imgDescr}
      ></img>
    </div>
  );
};
export default ImageCard;
