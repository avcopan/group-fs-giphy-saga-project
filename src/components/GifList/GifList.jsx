export default function GifList({ gifList }) {
  return (
    <div>
      <ul className="flex flex-wrap gap-8 justify-center items-center">
        {gifList.map((gif) => {
          return (
            <li key={gif.id}>
              <p>{gif.title}</p>
              <img className="h-48 w-48" src={gif.url} alt={gif.title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
