import { useState } from 'react';
import toTitleCase from '../../utils/toTitleCase';
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

export default function FavoriteCategories({ gif }) {
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.categories);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const addCategory = async () => {
    await axios.post(`/api/favorite/category/${gif.id}`, {
      categoryId: categories.find((cat) => cat.name === selectedCategory).id,
    });

    dispatch({ type: 'GET_FAVORITES' });
  };
  const removeCategory = async () => {
    await axios.post(`/api/favorite/category/delete/${gif.id}`, {
      categoryId: categories.find((cat) => cat.name === selectedCategory).id,
    });

    dispatch({ type: 'GET_FAVORITES' });
  };

  return (
    <div className="flex relative flex-col mx-2 ">
      <div className="flex justify-between mb-4">
        <select onChange={handleCategoryChange} className="text-sm">
          <option value="">Categories</option>
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.name}>
                {toTitleCase(category.name)}
              </option>
            );
          })}
        </select>
        {selectedCategory && (
          <>
            {!gif.categories.includes(selectedCategory) ? (
              <button
                onClick={addCategory}
                className="text-gray-600 active:scale-105 transition-all duration-300 hover:text-gray-900"
              >
                <IoIosAddCircleOutline size={20} />
              </button>
            ) : (
              <button
                onClick={removeCategory}
                className="text-gray-600 active:scale-105 transition-all duration-300 hover:text-gray-900"
              >
                <IoIosRemoveCircleOutline size={20} />
              </button>
            )}
          </>
        )}
      </div>
      <div className=" flex flex-wrap ">
        {gif.categories.map((category) => {
          return (
            <span
              key={category}
              className="text-xs bg-gray-200 rounded-full px-2 py-1 mx-1"
            >
              {toTitleCase(category)}
            </span>
          );
        })}
      </div>
    </div>
  );
}
