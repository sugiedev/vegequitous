import Image from "next/image";
import Link from "next/link";

export const CardTopImage = ({
    src = '/noimage.png',
    href = "#",
    width = 1000,
    height = 430,
    alt = "",
}: {
    src?: string,
    href?: string,
    width?: number,
    height?: number,
    alt?: string
}) => {
    console.log(src)
    return (
        <div className="px-3">
            <Link href={href}>
                <Image
                    className='rounded-t-lg border border-black'
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                />
            </Link>
        </div>
    );
}