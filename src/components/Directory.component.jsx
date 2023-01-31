import "./Directory.style.scss";
import CategoryItem from "./CategoryItem.compoment";
const Directory = ({ catagories }) => {
  return (
    <div className="categories-container">
      {catagories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
