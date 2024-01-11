import { type Metadata } from "next";

const siteName = "農家直売 全国無人販売所";
const description = "畑から直売 全国の野菜無人販売所の情報・配送を承ります。";
const url = "https://raichi-qzin.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  icons: [{ rel: "icon", url: "/favicon.png" }],
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
    images: [
      // {
      //   url: '/og.jpg',
      //   width: 800,
      //   height: 600
      // },
      {
        url: "/og.jpg",
        width: 1800,
        height: 1600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    site: "@raichi-qzin",
    creator: "@raichi-qzin",
    images: ["/og.jpg"],
  },
  alternates: {
    canonical: url,
  },
};
