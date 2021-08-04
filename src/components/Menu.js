import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="grid grid-cols-1 w-96 md:w-full h-auto md:h-full lg:grid-cols-2 gap-4 md:gap-12">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article
            key={id}
            className="capitalize h-42 grid grid-cols-1 md:grid-cols-2 md:h-44 overflow-hidden mx-0 lg:mx-10 "
          >
            <img
              src={img}
              alt={title}
              className="w-full object-cover h-60 border-4 border-beige rounded md:w-2/3 md:h-full"
            />

            <div className="-ml:0 md:-ml-16 pt-4 md:pt-0">
              <header className="flex justify-between  border-b-2 border-gray-600 border-dotted">
                <h4 className="font-semibold ">{title}</h4>
                <h4 className="text-yellow-700 price font-semibold">{price}</h4>
              </header>
              <p className="text-gray-600">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
