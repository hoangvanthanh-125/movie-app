import React from "react";
import { idText } from "typescript";
import { useAppDispatch } from "../../redux/hook";
import { uiActions } from "../../redux/slice/uiSlice";
interface Props {
  videoKey: string;
  closeVideo: () => void;
}

function VideoTrailer({ videoKey, closeVideo }: Props) {
  const dispatch = useAppDispatch();
  const handleCloseVideo = () => {
    if (closeVideo) {
      closeVideo();
    }
    dispatch(uiActions.closeOverlay());
  };
  return (
    <div
      onClick={() => handleCloseVideo()}
      className="fixed top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 px-[20px] max-w-full flex justify-center items-cente w-[853px] "
    >
      <span className="inline-block p-[10px] bg-mainTextColor absolute top-[-45px] right-0 md:right-5 z-20 w-[40px] h-[40px] rounded-[40px] text-center cursor-pointer font-semibold hover:bg-white">
        X
      </span>

      <iframe
        className="max-w-full
  "
        title="video"
        width="853"
        height="430"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}

export default VideoTrailer;
