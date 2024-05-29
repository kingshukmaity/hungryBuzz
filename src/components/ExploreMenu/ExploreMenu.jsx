import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  function defineCategory(item) {
    setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name));
  }
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Welcome to Hungry Buzz, a cozy eatery serving up delicious homestyle
        comfort food. We use only the freshest ingredients, and our dishes are
        made with love.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={()=>defineCategory(item)}
            key={index}
            className="explore-menu-list-item"
          >
            <img className={category===item.menu_name? "active" : ""} src={item.menu_image} alt="menu_image" />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
