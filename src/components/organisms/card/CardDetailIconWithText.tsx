import { useToggle } from "react-use";
import type { ReactNode } from "react";
import { DetailItemInfo } from "./DetailItemInfo";

export type DetailInfo = {
    icon: ReactNode,
    text: string,
    description: string
}

export const CardDetailIconWithText = ({
    details,
    initOpen = false
}: {
    details: Map<"expose" | "hide", DetailInfo[]>
    initOpen?: boolean
}) => {
    const exposes = details.get("expose")
    const hides = details.get("hide")

    const [showAccordion, changeShowAccordion] = useToggle(initOpen)

    return (
        <>
            {exposes?.map((detail, i) => (
                <DetailItemInfo key={i} {...detail} />
            ))}

            <div
                className={`transition-all duration-1000 ease-in-out relative 
                            ${showAccordion ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`
                }
            >
                {hides?.map((detail, i) => (
                    <DetailItemInfo key={i} {...detail} />
                ))}
            </div>

            <div className="flex justify-end">
                <button onClick={changeShowAccordion} className="px-4 py-2 z-10 text-sm text-blue-500">
                    {showAccordion ? '閉じる' : 'もっと見る'}
                </button>
            </div>
        </>
    )
}
