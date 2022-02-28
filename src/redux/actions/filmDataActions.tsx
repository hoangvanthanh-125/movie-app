import { createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeData } from "../../apis/filmApi";

export const fetchDataHome = createAsyncThunk("fetchHomeData",
async() => {
  const homeData = await getHomeData();
  return {
    filmOnCarousel :homeData[0]?.data?.results,
    popularMovie :homeData[1]?.data?.results,
    popularTv :homeData[2]?.data?.results,
    anime :homeData[3]?.data?.results,
    movieTrending :homeData[4]?.data?.results,
    tvTrending :homeData[5]?.data?.results,


  };
})