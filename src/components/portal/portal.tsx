import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Portal: React.FunctionComponent<PortalProps> = ({ isOpen, children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  if (!isOpen) return null;
  return createPortal(children, document.body);
};

export default Portal;
