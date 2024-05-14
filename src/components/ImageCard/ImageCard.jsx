import css from "./ImageCard.module.css";

const ImageCard = ({
  item: {
    alt_description: alt,
    urls: { small, regular },
    user: { name },
    likes,
    description,
  },
  onOpen,
}) => {
  return (
    <div className={css.item}>
      <img
        className={css.image}
        src={small}
        alt={alt}
        width={360}
        onClick={() => {
          onOpen(regular, alt, name, likes, description);
        }}
      />
    </div>
  );
};

export default ImageCard;
