import { IconHeart } from "@/components/atoms/icons/icons";
import useLikeData from "@/hooks/useLike";


export const CardLikeButton = ({ id }: { id: string }) => {
    const { like, unlike, isLiked } = useLikeData()
    const sIcon: {
        stroke: "red" | "white";
        fill: "red" | "white";
    } = isLiked(id)
            ? { stroke: "white", fill: "red" }
            : { stroke: "red", fill: "white" }

    return (
        <div onClick={() => isLiked(id) ? unlike(id) : like(id)}>
            <IconHeart {...sIcon} />
        </div>
    )
}