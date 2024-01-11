import { Card } from "@/components/organisms/card/Card"
import { api } from "@/trpc/react"

export const CardById = ({ id }: { id: string }) => {
    const { data: data } = api.data.getById.useQuery({ id });

    return (
        <>
            {data && <Card {...{ data }} />}
        </>
    )
}