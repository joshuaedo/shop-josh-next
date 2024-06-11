import { blurDataUrl as BLUR_DATA_URL } from '@/features/bedroom/lib/db';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { GetPlaiceholderReturn } from 'plaiceholder';
import { useState, useEffect } from 'react';

const useBedroom = () => {
  const [blurDataUrl, setBlurDataURL] = useState(BLUR_DATA_URL);

  const [isCheckedImgPlaiceHolder, setIsCheckedImgPlaiceHolder] =
    useState(false);

  const { data: imagePlaiceholder } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get(`/api/plaiceholder/get`);
      return data as GetPlaiceholderReturn;
    },
    queryKey: ['image-plaiceholder'],
    enabled: true,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!imagePlaiceholder?.base64) {
        setIsCheckedImgPlaiceHolder(true);
      } else {
        setBlurDataURL(imagePlaiceholder.base64);
        setIsCheckedImgPlaiceHolder(true);
      }
    }, 3500);

    return () => clearTimeout(timeout);
  }, [imagePlaiceholder?.base64]);

  return {
    isCheckedImgPlaiceHolder,
    blurDataUrl,
  };
};

export default useBedroom;
