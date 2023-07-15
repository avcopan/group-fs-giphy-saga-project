import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchGifs } from '../../api/request';
import GifList from '../../components/GifList/GifList';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_FAVORITES' });
    dispatch({ type: 'GET_CATEGORIES' });
  }, []);

  const handleSearch = async () => {
    const results = await searchGifs(searchText);
    setSearchResults(results);
    setSearchText('');
  };

  return (
    <div>
      <div className="mb-8 flex justify-center items-center">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Enter Search Here..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {searchResults.length ? (
          <GifList gifList={searchResults} />
        ) : (
          <div>Nothing here yet...</div>
        )}
      </div>
    </div>
  );
}
