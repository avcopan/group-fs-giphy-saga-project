import GifListItem from "../GifListItem/GifListItem";
import { Fragment } from "react";

export default function GifList({ gifList }) {
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
