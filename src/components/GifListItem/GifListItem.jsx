import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteCategories from '../FavoriteCategories/FavoriteCategories';

export default function GifListItem({ gif, isFavorite }) {
  const dispatch = useDispatch();
  const favoriteIds = useSelector((store) => store.favorites).map((g) => g.id);

  const toggleFavorite = async () => {
    if (favoriteIds.includes(gif.id)) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: gif.id });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: gif });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center" key={gif.id}>
        <p className="text-sm">{gif.title}</p>
        <div className="h-48 w-48 relative">
          <img className="h-48 w-48 rounded-lg" src={gif.url} alt={gif.title} />
          <button
            className="absolute bg-black rounded-xl p-1 bottom-[10%] right-[10%]"
            onClick={toggleFavorite}
          >
            {favoriteIds.includes(gif.id) ? (
              <IoHeart className="text-red-500" />
            ) : (
              <IoHeartOutline className="text-white" />
            )}
          </button>
        </div>
      </div>
      <div>{isFavorite && <FavoriteCategories />}</div>
    </div>
  );
}
