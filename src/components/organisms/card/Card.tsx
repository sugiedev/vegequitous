"use client"

import { CardHeader } from "./CardHeader";
import { CardTemplate } from "./CardTemplate";
import type { Data } from "@/server/api/routers/data";
import { Tags } from "@/components/molecules/tags/Tags";
import { CardDetailIconWithText } from "./CardDetailIconWithText";
import type { DetailInfo } from "./CardDetailIconWithText";
import { CardFooter } from "./CardFooter";
import { BorderArea } from "@/components/molecules/border-area/BorderArea";
import { Table } from "@/components/molecules/table/Table";
import { CardTopImage } from "./CardTopImage";

export const Card = ({ data }: { data: Data }) => {
    return (
        <CardTemplate>
            <CardHeader {...{ data }} />

            <CardTopImage {...{
                src: data.imgUrl,
                href: `//${data.id}`,
                alt: "",
            }} />

            <Tags tags={data.tags} />

            <BorderArea title={"品目"}>
                <Table props={data.vegetables} />
            </BorderArea>

            <BorderArea title={"情報"}>
                <CardDetailIconWithText {...{
                    details: new Map<"expose" | "hide", DetailInfo[]>([
                        ["expose", [
                            {
                                icon:
                                    (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>

                                    ),
                                text: "エリア",
                                description: `${data.address.prefecture}${data.address.city}${data.address.other}`
                            },

                            {
                                icon:
                                    (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                        </svg>

                                    ),
                                text: "配送",
                                description: "可 (公式LINEからお問い合わせください) "
                            },
                            {
                                icon:
                                    (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                        </svg>

                                    ),
                                text: "配達料",
                                description: "着払い" ?? "お問い合わせください"
                            },
                        ]],

                        ["hide", [
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                ),
                                text: "状態",
                                description: "良(JA規格 重量基準外のみ)" ?? "お問い合わせください"
                            },
                            {
                                icon:
                                    (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    ),
                                text: "最終更新",
                                description: "1/10 8:01" ?? "お問い合わせください"
                            },
                        ]]
                    ])
                }} />
            </BorderArea>

            <BorderArea title={"地図"}>
                <iframe
                    src={data.address.url}
                    width="100%"
                    height="300"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </BorderArea>

            {/* <div className="mx-3 text-gray-800 text-xl font-bold">
                {data.description}
            </div> */}

            {/* <BorderArea title={"動画"}>
                <iframe
                    src="https://www.youtube.com/embed/VxF3-rlC8Wo?si=dJCMROe8syrivJc4"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="w-full "
                >
                </iframe>
            </BorderArea> */}


            <CardFooter id={data.id} />

        </CardTemplate>
    )
}
