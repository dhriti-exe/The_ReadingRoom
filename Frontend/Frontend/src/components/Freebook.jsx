import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json"
import Cards from './Cards';

const Freebook = () => {
    const filterData = list.filter((data)=>data.category==="Free")
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <>
            <div className="max-w-screen 2xl container mx-auto md:px-20 px-4">
                <div>
                    <h1 className="font-semibold text-3xl pb-2">Free <span className="text-pink-500">Books!!</span></h1>
                    <p className="font-medium text-xl"> We are thrilled to announce that The Reading Room now offers a 
                        curated selection of free books for your reading pleasure. 
                        Whether you're passionate about fiction, fascinated by history, 
                        or eager to explore new genres, there's something for everyone. 
                        Our collection includes timeless classics, contemporary gems, 
                        and insightful non-fiction titles, all available at no cost.
                    </p>
                </div>
                <div>
                    <Slider {...settings}>
                        {filterData.map((item)=>(
                            <Cards item={item} key={item.id}/>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Freebook
