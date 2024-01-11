import "@/styles/globals.css";
import { cookies } from "next/headers";
import { TRPCReactProvider } from "@/trpc/react";
import { Header } from "@/components/organisms/header/Header";
import { Footer } from "@/components/organisms/footer/Footer";
import { DataContext, DataProvider } from "@/states/DataState";
import { LikeProvider } from "@/states/LikeState";
export { metadata } from "./metadata"

const menu: { label: string; href: string }[] = [
  {
    label: 'TOP',
    href: '/'
  },
  {
    label: 'よくあるご質問',
    href: '/faq'
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja' prefix='og: http://ogp.me/ns#'>
      <TRPCReactProvider cookies={cookies().toString()}>
        <DataProvider>
          <LikeProvider>
            <body className={`flex flex-col items-center justify-center bg-green-100`}>
              <Header menuList={[...menu]} />
              <main className='w-full max-w-xl'>
                {children}
              </main>
              <Footer />
            </body>
          </LikeProvider>
        </DataProvider>
      </TRPCReactProvider>
    </html >
  );
}
