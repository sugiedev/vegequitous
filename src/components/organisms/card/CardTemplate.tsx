import React, { type ReactNode } from "react"

export const CardTemplate = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <li className='bg-white rounded shadow-xl rounded-t-lg border-2 border-blue-500 mt-1'>
            {children}
        </li>
    )
}
