import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ items, onOpen }) => {
  return (
    <ul className={css.list}>
      {items.map((item) => {
        return (
          <li className={css.item} key={item.id}>
            <ImageCard item={item} onOpen={onOpen} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
