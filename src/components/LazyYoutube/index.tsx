"use client";

import { useState } from "react";

import Image from "next/image";

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
        <div onClick={() => setIsPlaying(true)} style={{ cursor: "pointer" }}>
          <Image
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="YouTube Video"
            width={width}
            height={height}
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
          <span className="absolute mt-[-192.5] ml-[230] flex items-center justify-center">
            <Image
              src={YoutubeIcon}
              alt="YouTube Icon"
              width={100}
              height={100}
            />
          </span>
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
