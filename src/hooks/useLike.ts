"use client";

import { LikeContext } from "@/states/LikeState";
import { parseCookies, setCookie } from "nookies";
import { useEffect, useContext } from "react";

const useLikeData = () => {
  const { likedItemsId, setLikedItemsId } = useContext(LikeContext);
  const cookies = parseCookies();

  useEffect(() => {
    const v = cookies.liked;
    if (!v) return;
    const likes = v.split(",");
    setLikedItemsId(likes);
  }, [cookies.liked, setLikedItemsId]);

  const isLiked = (id: string): boolean => {
    const isLiked = likedItemsId.includes(id);
    return isLiked;
  };

  const like = (id: string) => {
    if (!likedItemsId.includes(id)) {
      const updatedLikes = [...likedItemsId, id];
      setLikedItemsId(updatedLikes);
      setCookie(null, "liked", updatedLikes.join(","), {
        maxAge: 2147483647,
        secure: true,
        httpOnly: false,
        sameSite: "strict",
      });
    }
  };

  const unlike = (Id: string) => {
    const updatedLikes = likedItemsId.filter((id) => id !== Id);
    setLikedItemsId(updatedLikes);
    setCookie(null, "liked", updatedLikes.join(","), {
      maxAge: 2147483647,
      secure: true,
      httpOnly: false,
      sameSite: "strict",
    });
  };

  return {
    ids: likedItemsId,
    like,
    unlike,
    isLiked,
    count: likedItemsId.length,
  };
};

export default useLikeData;
