import React from "react";
import Header from "./Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="flex w-full ">
        <div className="w-1/2 text-white mt-60 text-start ms-20 flex-col">
          <h1 className="text-white mt-30 text-6xl">Book Shop</h1>

          <p className="text-justify mt-5 w-[25rem]">
            Find your next literary companion amidst the whispers of paper and
            ink, waiting to transport you to new realms
          </p>
        </div>
        <div className="flex justify-center mx-auto  w-1/2 p-6 mt-40">
          <div>
            <img
              class=" ms-auto h-96 w-96"
              src="../../shop.jpeg"
              alt="image description"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
