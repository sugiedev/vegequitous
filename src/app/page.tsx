"use client"

import { Pankuzu } from "@/components/molecules/pankuzu/Pankuzu";
import { type Data } from "@/server/api/routers/data";
import { api } from "@/trpc/react";
import { SearchArea } from "@/components/molecules/search-area/searchArea";
import Image from "next/image"

import { useContext } from "react";
import { DataContext } from "@/states/DataState";
import { Card } from "@/components/organisms/card/Card";

function Home() {
  const { data, isLoading } = useContext(DataContext);

  return (
    <div className="">
      <Image className="w-full pb-2 " src="/img01.png" alt={""} width={200} height={200} />
      <div className="flex justify-between items-center mx-1 mb-2">
        <div className="">
          <Pankuzu paths={[{ text: "販売所一覧", href: "/" }]} />
        </div>
      </div>

      <SearchArea />
      <div className="flex flex-col items-end">
        <div className="text-right text-sm">
          検索結果
        </div>
        {data?.length ?
          <p className="text-right">
            <span className="text-lg text-gray-700">{data.length}</span>
            /
            <span className="text-lg text-gray-700">{data.length}</span>
            件
          </p>
          :
          <p className="text-right">
            <span className="text-lg text-gray-700">{0}</span>
            件
          </p>
        }
      </div>
      {/* <Image className="w-full py-1" src="/top_banner.png" alt={""} width={200} height={200} /> */}
      <ul className=''>
        {!isLoading ? data.map((data: Data) => (
          <div key={data.id} className="mb-10">
            <Card data={{ ...data }}></Card>
          </div>
        ))
          :
          <div className="flex justify-center m-10" aria-label="読み込み中">
            <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
            <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full mx-4"></div>
            <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
          </div>
        }
      </ul>
    </div>
  );
}

export default Home