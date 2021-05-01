import { useEffect, useState } from 'react';

const useTabListener = (isMainListener?: boolean) => {
  const [isTabbing, setIsTabbing] = useState(false);

  const HandleTab = (e: KeyboardEvent) => {
    if (e.code === 'Tab') {
      if (isMainListener) document.body.classList.add('tabbing');

      window.removeEventListener('keydown', HandleTab);
      window.addEventListener('mousedown', HandleMouse);
      setIsTabbing(true);
    }
  };

  const HandleMouse = () => {
    if (isMainListener) document.body.classList.remove('tabbing');

    window.removeEventListener('mousedown', HandleMouse);
    window.addEventListener('keydown', HandleTab);
    setIsTabbing(false);
  };

  useEffect(() => {
    HandleMouse();
  }, []);

  return isTabbing;
};

export default useTabListener;
