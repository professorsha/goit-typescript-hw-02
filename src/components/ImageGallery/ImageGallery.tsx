import css from './ImageGallery.module.css';
import { ImageGalleryProps } from './ImageGallery.types';
import ImageCard from '../ImageCard/ImageCard';
const ImageGallery:React.FC<ImageGalleryProps>=({ items, onClick })=> {
  // console.log(items);
  return (
    <ul className={css.imageGallery}>
      {items.map(({ id, urls, likes, slug }) => (
        <li key={id} className={css.imageCard}>
          <ImageCard
            imgUrl={urls.small}
            imgUrlBig={urls.regular}
            imgDescr={slug}
            imgLikes={likes}
            onClick={onClick}
          />
        </li>
      ))}
    </ul>
  );
}
export default ImageGallery;