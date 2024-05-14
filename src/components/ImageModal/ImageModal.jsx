import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
import { FcLike } from "react-icons/fc";

const ImageModal = ({
  modal,
  onClose,
  url,
  alt,
  author,
  likes,
  description,
}) => {
  if (description == null) {
    description = "Want to add a photo description?";
  }
  return (
    <div>
      <ReactModal
        isOpen={modal}
        contentLabel="Modal"
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={onClose}
        overlayClassName={css.overlay}
        className={css.modal}
      >
        <img className={css.img} src={url} alt={alt} />
        <div className={css.info_block}>
          <div className={css.bottom}>
            <p className={css.author}>
              <b>Author: </b>
              {author}
            </p>
            <p>
              <b>Likes: </b>
              <FcLike />
              {likes}
            </p>
          </div>
          <p className={css.describe}>
            <b>Description: </b>
            {description}
          </p>
        </div>
      </ReactModal>
    </div>
  );
};
export default ImageModal;
