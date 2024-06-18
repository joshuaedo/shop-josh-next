import { useEffect, useState } from 'react';
import useMounted from './use-mounted';

const useLocation = () => {
  const [location, setLocation] = useState<Partial<Location>>({});
  const isMounted = useMounted();

  useEffect(() => {
    if (isMounted && typeof window !== 'undefined') {
      setLocation(window.location);
    }
  }, [isMounted]);

  return location;
};

export default useLocation;
