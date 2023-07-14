import GifListItem from "../GifListItem/GifListItem";
import { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function GifList({ gifList }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_FAVORITES" });
  }, []);

  return (
    <div>
      <ul className="flex flex-wrap gap-8 justify-center items-center">
        {gifList.map((gif) => (
          <Fragment key={gif.id}>
            <GifListItem gif={gif} />
          </Fragment>
        ))}
      </ul>
    </div>
  );
}
