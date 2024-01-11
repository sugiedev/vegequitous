import type { Data } from "@/server/api/routers/data"
import { CardLikeButton } from "./CardLikeButton"
import { CardTitle } from "./CardTitle"

export const CardHeader = ({ data }: { data: Data }) => {
    return (
        <div className="flex items-center justify-between mb-4 bg-blue-500 rounded-t">
            <CardTitle {...{ text: `[${data.address.prefecture} ${data.address.city}]` }} />

            <div className="flex items-center mx-2">
                <CardLikeButton {...{ id: data.id }} />
            </div>
        </div>
    )
}