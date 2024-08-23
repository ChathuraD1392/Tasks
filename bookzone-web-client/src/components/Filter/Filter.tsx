// custom filter compnent

import categories from "../../data/categories";

interface Props {
  onSelectCategory: (cateory: string) => void;
}

const Filter = ({ onSelectCategory }: Props) => {
  return (
    <div className="p-2">
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
