import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GifList from '../../components/GifList/GifList';

export default function Favorite() {
  const dispatch = useDispatch();
  const { favorites, categories } = useSelector((store) => store);
  console.log(categories);

  useEffect(() => {
    dispatch({ type: 'GET_FAVORITES' });
    dispatch({ type: 'GET_CATEGORIES' });
  }, []);

  return (
    <div>
      <GifList gifList={favorites} />
    </div>
  );
}
