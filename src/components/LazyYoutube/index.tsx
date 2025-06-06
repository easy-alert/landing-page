"use client";

import { useState } from "react";

import CustomImage from "../CustomImage";

import YoutubeIcon from "../../assets/youtubeFilled.svg";

interface ILazyYoutube {
  videoId: string;
  width?: number;
  height?: number;
}

export const LazyYoutube = ({
  videoId,
  width = 560,
  height = 315,
}: ILazyYoutube) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex items-center justify-center rounded-md shadow-shadowCard">
      {!isPlaying ? (
        <div
          role="button"
          style={{ cursor: "pointer", width, height }}
          className="group flex items-center justify-center overflow-hidden relative"
          tabIndex={0}
          onClick={() => setIsPlaying(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsPlaying(true);
            }
          }}
        >
          <div
            className="flex items-center justify-center w-full h-full"
            style={{ position: "relative" }}
          >
            <CustomImage
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="YouTube Video"
              width={width}
              height={height}
              loading="lazy"
              style={{ objectFit: "cover", display: "block" }}
            />

            <div
              className="flex items-center justify-center"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.3)",
                transition: "background 0.2s",
                pointerEvents: "none",
              }}
            >
              <CustomImage
                src={YoutubeIcon}
                alt="YouTube Icon"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      ) : (
        <iframe
          width={width}
          height={height}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};
