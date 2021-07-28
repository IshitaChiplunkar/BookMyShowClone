import React from "react";
import Slider from "react-slick";

// components
import Poster from "../Poster/Poster.component";

export const Premiere = () => {
  const settings = {
    infinity: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlide: 0,
    responsive: [
      {
        breakpoints: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoints: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          InitialSlide: 1,
        },
      },
      {
        breakpoints: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const PremiereImages = [
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
      alt: "zack",
      title: "Zacl",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310648-yhdnmuexaf-portrait.jpg",
      alt: "resistance",
      title: "Resistance",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302306-xxwtjnexzz-portrait.jpg",
      alt: "proximity",
      title: "Proximity",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309748-pqkuenkpvy-portrait.jpg",
      alt: "another round",
      title: "Another Round",
      subtitle: "Danish",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00303783-tydhanqvye-portrait.jpg",
      alt: "the tunnel",
      title: "The Tunnel",
      subtitle: "Norwegian",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302293-rbxsftdhdd-portrait.jpg",
      alt: "radioactive",
      title: "Radioactive",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137455-eywmevjnes-portrait.jpg",
      alt: "capone",
      title: "Capone",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137324-nsmjcquscr-portrait.jpg",
      alt: "the courier",
      title: "The Courier",
      subtitle: "English",
    },
  ];

  return (
    <>
    <div className="flex flex-col items-start">
      <h3 className="text-white text-xl font-bold">Premieres</h3>
      <p className="text-white text-sm">Brand new release every Friday!</p>
    </div>
      <Slider {...settings}>
        {PremiereImages.map((image) => (
          <Poster {...image} isDark />
        ))}
      </Slider>
    </>
  );
};

export default Premiere;