import axios from 'axios';

const getPhotos = () => {
  axios.get(
    'https://pixabay.com/api/?key=23926523-f17af8d65895f2b1c4bb3a756&q=yellow+flowers&image_type=photo',
  );
};

export const fetchPhotos = async () => {
  const res = await getPhotos();
  return res;
};
