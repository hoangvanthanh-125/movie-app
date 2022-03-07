import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DataFilter, genres } from "../data/filterData";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
function Carousel({ filmOnCarousel }: any) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const navigate = useNavigate();

  const getListGenre = (film: any) => {
    const listGenres = genres?.filter((item: any, index, arr: DataFilter[]) => {
      return film?.genre_ids?.includes(item?.id);
    });
    return listGenres;
  };

  return (
    <div className="mt-[-30px]">
      <Slider {...settings} className="carousel">
        {filmOnCarousel
          ?.filter((item: any) => item?.overview)
          ?.map((item: any, index: number) => (
            <div
              className="relative before:absolute before:inset-0 before:bg-overlayColor cursor-pointer "
              key={index}
              onClick={() => navigate(`movie/${item?.id}/${item?.name || item?.title}`)}
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
                <ul className="flex text-[8px] md:text-[12px] font-normal mt-[10px]">
                  {getListGenre(item)?.map((genre: any, index: number) => (
                    <Link to={`/genre/${genre?.id}`} className="py-[3px] px-[5px] border border-mainTextColor rounded-2xl mr-[5px] hover:text-white transition-all" key={index}>{genre?.name}</Link>
                  ))}
                </ul>
                <p className=" pr-[40px] text-[10px] font-normal sm:text-[13px] mt-[10px] md:text-[14px] w-full text-gray-300">
                  {item.overview?.split(" ")?.slice(0, 40).join(" ")}
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
