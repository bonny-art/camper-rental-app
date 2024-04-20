import React, { useEffect } from 'react';
import { Backdrop } from './ModalContainer.styled';

export const ModalContainer = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.documentElement.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.documentElement.style.overflow = 'visible';
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return <Backdrop onClick={handleBackdropClick}>{children}</Backdrop>;
};
