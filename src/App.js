import React, { useState, useEffect } from "react";
import items from "./data";
import Categories from "./components/Categories";
import Menu from "./components/Menu";

console.log("data: ", items);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const allCategories = [
      "all",
      ...new Set(items.map((item) => item.category)),
    ];
    setCategories(allCategories);
    setIsLoading(false);
  }, []);

  const filterItems = (category) => {
    console.log(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="bg-gray-200  w-full shadow-lg">
      {isLoading ? (
        "Loading..."
      ) : (
        <main className="container mx-auto flex justify-center items-center pt-16 pb-16 w-full ">
          <section className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-8">
              <h1 className="capitalize text-4xl font-semibold">our menu</h1>
              <div className="bg-beige h-1 w-1/2 mt-2"></div>
            </div>
            <Categories categories={categories} filterItems={filterItems} />
            <Menu items={menuItems} />
          </section>
        </main>
      )}
    </div>
  );
}

export default App;
