import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { db } from "@/libs/firebase/server";

export type Data2 = {
  id: string;
  /* 品目名 */
  productName: string;
  /* 品目説明 */
  description: string;
  /* バナー画像 */
  imageUrl: string;
  /* LINE Flex MessageのJSON文字列 */
  lineFlexMsgCard: string;
  /* コンポストレベル */
  componstLevel: "S" | "A" | "B" | "C";
  /* コンポスト理由 */
  compostDescription: string;
  /* 価格単価 */
  unitPrice: string;
  /* 配送料 */
  deliveryCharge: string;
  /* 配送可能エリア */
  delivaryArea: string;
  /* 備考 */
  notes: string[];
  /* タグ */
  tags?: string[];
};

export type Data = {
  /* 販売所ID */
  id: string;
  /* 名称 */
  title: string;
  /* 画像URL */
  imgUrl: string;
  /* 住所 */
  address: {
    /* 都道府県 */
    prefecture: string;
    /* 市区町村 */
    city: string;
    /* その他の住所情報 */
    other: string;
    /* google map 埋め込み用URL */
    url: string;
  };
  vegetables: {
    /* 野菜の名前 */
    name: string;
    /* 値段 */
    price: string;
    /* 野菜の写真URL */
    imgUrl: string;
    /* 野菜の動画URL */
    videoUrl: string;
  }[];
  tags?: string[];
};

export const dataRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const ref = db.collection("items").doc(input.id);
      const doc = await ref.get();
      return { id: doc.id, ...doc.data() } as Data;
    }),

  getAll: publicProcedure.query(async () => {
    const docRefs = await db.collection("items").listDocuments();
    const docs = await Promise.all(
      docRefs.map(async (docRef) => {
        const doc = await docRef.get();
        if (doc.exists) {
          return { id: doc.id, ...doc.data() } as Data;
        }
      }),
    );

    // docs.sort((a: any, b: any) => a.priority - b.priority)
    return docs as Data[];
  }),
});
