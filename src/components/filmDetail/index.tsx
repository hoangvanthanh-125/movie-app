import { faHome, faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { FacebookIcon, FacebookShareButton } from "react-share";
import { getDetailFilmData } from "../../apis/filmApi";
import { db } from "../../App";
import ButtonLoading from "../../common/ButtonLoading";
import { Film } from "../../common/interface";
import Loading from "../../common/Loading";
import { ToastFuncError, ToastFuncSuccess } from "../../common/toastFunc";
import { ORIGIN_PATH } from "../../constants";
import { useAppSelector } from "../../redux/hook";
import ListFilm from "../ListFilm";
import Actor from "./Actor";
import Comment from "./comment";
import ListImageFilm from "./ListImageFilm";
import ListKeyword from "./ListKeyword";
import ListSimilarFilm from "./ListSimilarFilm";
import Trailer from "./Trailer";

interface Props {
  atWatchPage: boolean;
}
function FilmDetail({ atWatchPage }: Props) {
  const { id, name, type } = useParams();
  const [film, setfilm] = useState<any>();
  const [listActor, setListActor] = useState<any>([]);
  const [listImage, setListImage] = useState<any>([]);
  const [listTrailer, setListTrailer] = useState<any>([]);
  const [listKeyWord, setListKeyWord] = useState<any>([]);
  const location = useLocation();
  const { user } = useAppSelector((state) => state.user) as any;
  const [loading, setLoading] = useState(false);
  const [loadingAddCollection, setLoadingAddCollection] = useState(false);

  const navigate = useNavigate();
  const { movieTrending, tvTrending } = useAppSelector(
    (state) => state.filmData
  );
  const year =
    film?.release_date?.split("-")[0] || film?.first_air_date?.split("-")[0];
  const time = film?.runtime
    ? `${film?.runtime} phút`
    : `${film?.episode_run_time[0]} phút / tập`;

  useEffect(() => {
    setLoading(true);
    if (type && id) {
      getDetailFilmData(type, id).then((res) => {
        setfilm(res[0].data);
        setListActor(res[1]?.data?.cast);
        setListImage(res[2]?.data?.backdrops);
        setListTrailer(res[3]?.data?.results);
        setListKeyWord(res[4].data?.keywords);
        setLoading(false);
      });
    }
  }, [id, name, type]);

  const renderInfo = (list: any, path: string) => {
    if (film) {
      let result = null;
      if (list && list?.length > 0) {
        result = list?.map((item: any, index: number) => (
          <Link
            key={item?.id || item?.iso_3166_1}
            to={`${path}${item?.id || item?.iso_3166_1?.toLowerCase()}`}
          >
            <span className="text-indigo-500 hover:text-indigo-700">
              {index === list?.length - 1 ? item?.name : `${item?.name} , `}
            </span>
          </Link>
        ));
        return result;
      }
    }
  };
  const handleAddCollection = async () => {
    if (user) {
      try {
        setLoadingAddCollection(true);
        await addDoc(collection(db, "film"), {
          id,
          name: film?.name || "",
          original_name: film?.original_name || "",
          original_title: film?.original_title || "",
          poster_path: film?.poster_path || "",
          title: film?.title || "",
          uid: user.uid,
        } as Film);
        ToastFuncSuccess("Thêm thành công");
      } catch (error) {
        ToastFuncError(error);
      } finally {
        setLoadingAddCollection(false);
      }
    }
  };
  return !loading ? (
    <div className="px-[20px] md:px-[50px]">
      {!atWatchPage && (
        <div className="w-full h-[30px] bg-gray-700 text-mainTextColor flex items-center justify-start py-[10px] mt-[30px]">
          <div
            onClick={() => navigate("/")}
            className="ml-[10px] hover:text-indigo-500 cursor-pointer transition-all"
          >
            <FontAwesomeIcon icon={faHome} className="text-[14px]" />
            <span className="ml-[5px]">Trang chủ</span>
          </div>
          <span className="mx-[5px]">/</span>
          <span>{film?.name || film?.title}</span>
        </div>
      )}
      <div className="grid grid-cols-12 mt-[30px] gap-7">
        <div className="md:col-span-8 col-span-12">
          <div className=" flex flex-col md:flex-row md:justify-start md:items-start ">
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-[150px] h-auto"
                src={`${ORIGIN_PATH}${film?.poster_path}`}
                alt=""
              />
              <div
                className="p-[4px] rounded-sm  text-mainTextColor  font-semibold text-[13px] border border-indigo-400 bg-indigo-500 hover:bg-indigo-700 transition-all w-[100px] flex justify-center items-center cursor-pointer mt-[10px] "
                onClick={() =>
                  navigate(`/watch/${type}/${id}/${name?.replaceAll(" ", "-")}`)
                }
              >
                <FontAwesomeIcon
                  icon={faPlay}
                  className="text-[14px] mr-[5px]"
                />
                <span>Xem phim</span>
              </div>{" "}
              <p className="mt-[10px] text-center text-indigo-500">
                {film?.vote_average} / {film?.vote_count} votes
              </p>
            </div>

            <div className="flex-1 text-secondTextColor md:ml-[30px] mt-[30px] md:mt-[0]">
              <h1 className="text-2xl font-semibold text-indigo-500 text-center md:text-left">
                {film?.title || film?.name}
                <span className="ml-[10px] inline-block px-[5px] bg-yellow-600 text-mainTextColor rounded-md text-[16px] w-9 text-center">
                  {film?.vote_average}
                </span>
              </h1>
              <p className="text-center md:text-left">
                {film?.original_name || film?.original_title}
              </p>

              <div className="flex justify-start items-center ">
                <FacebookShareButton
                  url={location.pathname}
                  quote={""}
                  hashtag={"#hashtag"}
                  className="Demo__some-network__share-button text-mainTextColor mt-[10px]"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>

                <div className="ml-[10px]">
                  <ButtonLoading
                    title={
                      <>
                        {!loadingAddCollection && (
                          <FontAwesomeIcon
                            icon={faPlus}
                            className="text-[14px] mr-[5px]"
                          />
                        )}
                        <span>Thêm vào bộ sưu tập</span>
                      </>
                    }
                    loading={loadingAddCollection}
                    handleClick={handleAddCollection}
                    bg="red-600"
                  />
                </div>
              </div>

              <p className="mt-[10px]">
                Xem Phim {film?.name || film?.title} (
                {film?.original_name || film?.original_title}) Phụ đề - thuyết
                minh Full HD tại Film24h. Thuộc Phim Mỹ và thể loại{" "}
                {film?.genres?.map((item: any) => (
                  <span key={item?.id}>{item?.name},</span>
                ))}
                thời lượng {time}, được sản xuất vào năm {year}. Mời các bạn
                cùng theo dõi...
              </p>
              <div className="flex-wrap mt-[10px] md:justify-between  flex-col justify-start items-start">
                <p className="basis-1/2">
                  Thể loại : {renderInfo(film?.genres, "/genre/")}{" "}
                </p>
                <p className="mt-[10px] basis-1/2">
                  Năm :{" "}
                  <Link
                    to={`/year/${year}`}
                    className="text-indigo-500 hover:text-indigo-700  "
                  >
                    {year}
                  </Link>
                </p>
                <p className="md:basis-1/2 mt-[10px]">
                  Quốc gia :{" "}
                  {renderInfo(film?.production_countries, "/country/")}
                </p>
                <p className="mt-[10px]">
                  Thời lượng : <span className="text-indigo-500">{time}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="text-secondTextColor mt-[30px]">
            <p className=" text-xl font-semibold text-indigo-500 mb-[20px]">
              Diễn viên
            </p>
            <Actor listActor={listActor} type={type!} id={id!} />
          </div>
          <div className="mt-[30px]">
            <p className=" text-xl font-semibold text-indigo-500 mb-[20px]">
              Trailer
            </p>
            <Trailer listTrailer={listTrailer} type={type!} id={id!} />
          </div>
          <div>
            <h1 className="text-indigo-500 text-2xl font-semibold mt-[30px]">
              Nội dung phim {film?.name || film?.title}
            </h1>
            <p className="mt-[10px] text-secondTextColor">{film?.overview}</p>
            <ListImageFilm listImage={listImage} type={type!} id={id!} />
          </div>

          <div>
            <ListKeyword listKeyWordFlim={listKeyWord} type={type!} id={id!} />
          </div>
          <div>
            <div className="mt-[20px]">
              <h1 className=" font-semibold text-indigo-500 cursor-pointer text-2xl  mb-[10px]">
                Bình luận phim {name}
              </h1>
              <Comment />
            </div>
          </div>
        </div>
        <div className=" col-span-12 md:col-span-4  ">
          <div>
            <div className="p-[30px] bg-gradient-to-b from-indigo-500  box-border rounded-t-2xl mb-[5px] ">
              <h1 className="text-xl text-mainTextColor font-semibold ">
                Top phim lẻ thịnh hành
              </h1>
            </div>
            <div className="scroll h-[600px] md:h-[575px] overflow-y-auto">
              <ListFilm listFilm={movieTrending} isTrending={true} />
            </div>
          </div>
          <div className="mt-[20px]">
            <div className="p-[30px] bg-gradient-to-b from-indigo-500  box-border rounded-t-2xl ] ">
              <h1 className="text-xl text-mainTextColor font-semibold ">
                Top phim bộ thịnh hành
              </h1>
            </div>
            <div className="scroll h-[600px] md:h-[575px] overflow-y-auto">
              <ListFilm listFilm={tvTrending} isTrending={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[30px]">
        <ListSimilarFilm type={type!} id={id!} />
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default FilmDetail;
