import Header from "../components/header/Header";
import SectionCard from "../components/sectionCard/SectionCard";
import poster from "../components/sectionCard/dish.jpg";
import category1 from "../assets/category (1).png"
import category2 from "../assets/category (2).png"
import category3 from "../assets/category (3).png"
import category4 from "../assets/category (4).png"
import category5 from "../assets/category (5).png"
import category6 from "../assets/category (6).png"
import category7 from "../assets/category (7).png"
import category8 from "../assets/category (8).png"
import Categories from "../components/categories/Categories";
const categoriesByType = [
  {
    image: category7,
    name: "salad",
  },
  {
    image: category5,
    name: "appetizer"
  },
  {
    image: category8,
    name: "main-course"
  },
  {
    image: category4,
    name: "dessert"
  }
];
const categoriesByRegion = [
  {
    image: category1,
    name: "asia"
  },
  {
    image: category2,
    name: "african"
  },
  {
    image: category3,
    name: "europian"
  },
  {
    image: category6,
    name: "american"
  }
]
function HomePage(props) {
  return (
    <div>
      <Header />
      <div className="container">
        <SectionCard
          title="Dish Of The Day "
          poster={poster}
          text="Healthy Bites:<br/>Nourishing Sandwich Creations"
          description="“Quick + Easy Veggie Delight Sandwich - Elevate Your Lunch in Minutes!"
        />
        <SectionCard
          title="Dish Of The Day "
          poster={poster}
          text="Healthy Bites:<br/>Nourishing Sandwich Creations"
          description="“Quick + Easy Veggie Delight Sandwich - Elevate Your Lunch in Minutes!"
          reverse
        />
        <Categories title = "Check Out Other Recipes Of Your Choice!" categories = {categoriesByType}/>
        <Categories title = "Check Out By Region!" categories = {categoriesByRegion}/>
      </div>
    </div>
  );
}
export default HomePage;
