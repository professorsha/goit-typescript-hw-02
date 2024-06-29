import css from './ImageModal.module.css';
import React from 'react';
import Modal from 'react-modal';
import { ImageModalProps } from './ImageModal.types';
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '10%',
    left: '25%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'none',
    overflow: 'visible',
  },
};

Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageLikes,
  onClose,
  imageUrl,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div className={css.container}>
      <button onClick={onClose} className={css.closeBtn}>
        &times;
      </button> 
        <span className={css.likes}>likes: {imageLikes}</span>
        <img src={imageUrl} className={css.img} alt="Large" width="500px" />
      </div>
      
    </Modal>
  );
};

export default ImageModal;
