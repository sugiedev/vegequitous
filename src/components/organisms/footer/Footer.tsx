import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
    return (
        <footer className='footer items-center p-4'>
            <Link href={'https://lin.ee/bLawYUk'}>
                <Image
                    src={'/lineimg.jpg'}
                    alt={''}
                    width={800}
                    height={600}
                    className='w-full'
                />
            </Link>

            <aside
                id="aff"
                className='items-center grid-flow-col text-center cursor-pointer'
            >
            </aside >
        </footer >
    )
}