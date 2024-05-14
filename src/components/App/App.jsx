import { useState, useEffect } from "react";
import { fetchPhotos } from "../../services-api";
import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");
  const [imageData, setImageData] = useState({});
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleOpenModal = (imgUrl, imgAlt, name, likes, description) => {
    setShowModal(true);
    setModalUrl(imgUrl);
    setModalAlt(imgAlt);
    setImageData({ name, likes, description });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getImages() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchPhotos(query, page);
        setShowBtn(data.total_pages && data.total_pages !== page);
        setImages((prevImages) => {
          return [...prevImages, ...data.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <div className={css.container}>
        {isLoading && <Loader />}
        {error && <ErrorMessage />}
        {images.length > 0 && (
          <ImageGallery items={images} onOpen={handleOpenModal} />
        )}
        {images.length > 0 && !isLoading && showBtn && (
          <LoadMoreBtn onClik={handleLoadMore} />
        )}
        {images.length > 0 && (
          <ImageModal
            modal={showModal}
            onClose={handleCloseModal}
            url={modalUrl}
            alt={modalAlt}
            author={imageData.name}
            likes={imageData.likes}
            description={imageData.description}
          />
        )}
      </div>
    </>
  );
};

export default App;
