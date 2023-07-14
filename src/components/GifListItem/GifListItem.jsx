import { IoHeart } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";

export default function GifListItem({ gif }) {
  return (
    <li className="flex flex-col items-center" key={gif.id}>
      <p className="text-sm">{gif.title}</p>
      <div className="h-48 w-48 relative">
        <img className="h-48 w-48 rounded-lg" src={gif.url} alt={gif.title} />
        <button className="absolute bg-black rounded-xl p-1 bottom-[10%] right-[10%]">
          <IoHeartOutline className="text-white" />
        </button>
      </div>
    </li>
  );
}
