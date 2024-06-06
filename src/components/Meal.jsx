import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Meal = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching meals:", err));
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading meals...</p>
      ) : (
        items.map(({ strMeal, strMealThumb, idMeal }) => (
          <section key={idMeal}>
            <img src={strMealThumb} height="100px" />
            <section>
              <p>{strMeal}</p>
              <p>{idMeal}</p>
            </section>
          </section>
        ))
      )}
    </>
  );
};

export default Meal;
