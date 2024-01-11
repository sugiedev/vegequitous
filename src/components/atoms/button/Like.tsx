"use client"
import React, { useEffect } from 'react';
import { useToggle } from 'react-use';
import { IconHeart } from '../icons/icons';
import useLikeData from '@/hooks/useLike';


const Like = ({
    id // ジョブIDをプロップとして追加
}: {
    id: string
}): JSX.Element => {
    const { ids, like, unlike } = useLikeData();
    const [liked, setLiked] = useToggle(false);

    useEffect(() => {
        if (ids.includes(id)) {
            setLiked(true)
        }
    }, [id, ids, setLiked])

    return (
        <>
            {liked
                ?
                <button
                    onClick={() => {
                        unlike(id)
                        setLiked(false)
                    }}
                >
                    <IconHeart {...{
                        stroke: "red",
                        fill: "red"
                    }} />
                </button>
                :
                <button
                    onClick={() => {
                        like(id)
                        setLiked(true)
                    }}
                >
                    <IconHeart {...{
                        stroke: "white",
                        fill: "white"
                    }} />
                </button>
            }
        </>
    );
};

export default Like;
