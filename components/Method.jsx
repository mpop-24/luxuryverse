import React from "react";
import Card from "./Card";

const Method = () => {
  const methodCards = [
    {
      title: "Lorem Ipsum",
      desc: "Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis",
    },
    {
      title: "Sagittis nisl rhoncus mattis",
      desc: "Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis",
    },
    {
      title: "Nisl rhoncus mattis",
      desc: "Eornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis",
    },
    {
      title: "Nisl & rhoncus mattis",
      desc: "Aornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <span className="method-bg"></span>
      <div className="method-wrapper wrapper">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-sm md:text-xl text-purpleAsh">Feugiat nibh sed pulvinar proin</p>
          <h1 className="text-5xl md:text-7xl my-4 dm-font">
            <span className="text-5xl md:text-7xl text-stroke">Lorem A</span>{" "}
            <span className="font-extrabold text-purpleAsh">Lorem Ips</span>
          </h1>
          <h1 className="text-5xl md:text-7xl dm-font">
            <span className="font-extrabold text-purpleAsh">Ipsum</span>{" "}
            <span className="text-5xl md:text-7xl text-stroke">Lorem</span>
          </h1>
          <p className="text-sm md:text-xl text-purpleAsh mt-8">
            Ornare aenean euismod elementum nisi quis eleifend quam adipiscing <br />  vitae proin sagittis nisl rhoncus mattis
          </p>
        </div>
        <div className="flex md:grid md:grid-cols-4 gap-5 px-4 md:px-20 overflow-x-auto no-scrollbar">
          {methodCards.map((item, index) => (
            <Card key={index} card={item} className="flex-shrink-0 w-80 md:w-auto" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Method;
