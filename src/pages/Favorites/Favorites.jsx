import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GifList from "../../components/GifList/GifList";

export default function Favorite() {
  const dispatch = useDispatch();
  const favoriteGifs = useSelector((store) => store.favorites);

  useEffect(() => {
    dispatch({ type: "GET_FAVORITES" });
  }, []);

  return (
    <div>
          <GifList gifList={favoriteGifs} />
    </div>
  );
}
