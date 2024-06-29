import { useEffect, useState } from "react";
import { ImageResult, getImages} from "../../unsplash-api";
import { ImageItem } from "../ImageGallery/ImageGallery.types";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

export default function App() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>("");
  const [imageLikes, setImageLikes] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getImages(searchQuery, page);
        setImages((prevImages) => [
          ...prevImages,
          ...data.map(convertToImageItem),
        ]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    if (searchQuery != "") {
      fetchData();
    }
  }, [searchQuery, page]);

  const handleSearch = async (topic:string) => {
    setImages([]);
    setSearchQuery(topic);
    setPage(1);
    
  };
  const handleLoadMore = async () => {
    setPage(page + 1);
  };
  const openModal = (imageUrl:string, likes:number) => {
    setSelectedImageUrl(imageUrl);
    setImageLikes(likes);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const convertToImageItem = (result: ImageResult): ImageItem => ({
    id: result.id,
    urls: result.urls,
    slug: result.id,
    likes:result.likes,
  });
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && <ImageGallery items={images} onClick={openModal} />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        imageLikes={imageLikes}
        onClose={closeModal}
        imageUrl={selectedImageUrl}
      />
    </div>
  );
}
