"use client"

import { ButtonItem } from "@/components/atoms/button/ButtonItem"
import { IconLine } from "@/components/atoms/icons/icons"
import useLineLogin from "@/hooks/use-line-login/useLineLogin"
import useAffiliatorId from "@/hooks/useAffiliatorId"

export const CardFooter = ({
    id
}: {
    id: string
}) => {
    const { affiliatorId } = useAffiliatorId('a')
    const { submit, isLoading: isLineLoading } = useLineLogin()
    return (
        <div className="w-full">
            <div className="flex rounded-md justify-center shadow-sm my-5 mx-3" role="group">
                {
                    isLineLoading
                        ?
                        <ButtonItem
                            loading={true}
                            round="rounded"
                            bgColor="bg-green-300"
                            textColor="text-white"
                            flex="flex-1"
                            text="読み込み中です"
                            barColor="green"
                            h="h-20"
                        />
                        :
                        <ButtonItem
                            onClick={() => {
                                submit(process.env.NEXT_PUBLIC_LINE_CLIENT_ID ?? "", {
                                    base: process.env.NEXT_PUBLIC_LINE_LOGIN_WEBHOOK_URL ?? "",
                                    params: {
                                        id,
                                        affiliatorId,
                                        type: "1", //tmp
                                    }
                                })
                            }}
                            round="rounded"
                            bgColor="bg-green-500"
                            textColor="text-white"
                            flex="flex-1"
                            text="注文・お問い合わせはこちらから"
                            h="h-20"
                        >
                            <IconLine />
                        </ButtonItem>
                }
            </div>
        </div>
    )
}