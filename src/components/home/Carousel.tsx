import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Carousel({filmOnCarousel}:any) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  
  return (
    <div className="mt-[-30px]">
      <Slider {...settings} className='carousel'>
        {filmOnCarousel
          ?.filter((item: any) => item?.overview)
          ?.map((item: any, index: number) => (
            <div
              className="relative before:absolute before:inset-0 before:bg-overlayColor "
              key={index}
            >
              <img
                className="w-full  h-auto  object-fill"
                alt=""
                src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path!}`}
              />
              <div className="absolute top-[50px] left-[50px] text-[14px] text-mainTextColor font-bold md:text-[36px] md:top-[150px] md:left-[150px] max-w-[500px]">
                <h1>{item.original_title}</h1>
                <span className="mt-[10px] text-[12px] md:text-[27px] inline-block bg-gradient-to-r from-indigo-500 py-[10px] pl-[10px] pr-[40px] md:pr-[70px] ">
                  {item.title}
                </span>
                <p className=" pr-[40px] text-[10px] font-normal sm:text-[13px] mt-[10px] md:text-[14px] w-full text-gray-300">
                  {item.overview?.split(" ")?.slice(0,40).join(" ")}
                  {item?.overview?.length > 130 && <span>...</span>}
                </p>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Carousel;
