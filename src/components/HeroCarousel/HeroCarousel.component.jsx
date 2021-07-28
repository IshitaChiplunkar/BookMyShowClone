import React from "react";
import HeroSlider from "react-slick";

//Component
import { NextArrow, PrevArrow } from "./Arrows.component";



const HeroCarousel = () => {
    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "350px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    const images = [
        "https://in.bmscdn.com/promotions/cms/creatives/1627383196819_bosslevelweb28.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1627022032111_sunfeastdesktop.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1625720005981_upgradgrouppagebanner_webshowcase_1280x500.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1626372121139_bsm_1280x500_romcom_1.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1627021091636_vaccinationdrivemaxnanavati_webshowcase_1280x500.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1625135512787_bas_1280x500.jpg"
    ];

    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((image) => (
                        <div className="w-full h-80 md:h-80 py-3">
                            <img src={image} alt="testing" className="w-full h-full" />
                        </div>
                    ))}
                </HeroSlider>
            </div>
            <div className="hidden lg:block">
                <HeroSlider {...settingsLG}>
                    {images.map((image) => (
                        <div className="w-full h-96 px-2 py-3">
                            <img src={image} alt="testing" className="w-full h-full rounded-md" />
                        </div>
                    ))}
                </HeroSlider>
            </div>
        </>);
};

export default HeroCarousel;