import toTitleCase from '../../utils/toTitleCase';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useSelector } from 'react-redux';

export default function FavoriteCategories() {
  const categories = useSelector((store) => store.categories);

  return (
    <div className="flex mx-2 justify-between items-center">
      <select className="text-sm">
        <option value="">Categories</option>
        {categories.map((category) => {
          return (
            <option key={category.id} value={category.name}>
              {toTitleCase(category.name)}
            </option>
          );
        })}
      </select>
      <button className="text-gray-600 active:scale-105 transition-all duration-300 hover:text-gray-900">
        <IoIosAddCircleOutline size={20} />
      </button>
    </div>
  );
}
