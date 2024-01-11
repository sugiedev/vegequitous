export const Table = (
    {
        props
    }: {
        props: {
            name: string;
            price: string;
            imgUrl: string;
            videoUrl: string;
        }[]
    }
) => {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 border border-gray-300">
                <thead className="text-xs text-gray-700 uppercase bg-blue-300">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            品種
                        </th>
                        <th scope="col" className="px-6 py-3">
                            値段
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.map((v, i) => (
                        <tr
                            key={i}
                            className="bg-white border border-b-gray-400">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {v.name}
                            </th>
                            <td className="px-6 py-4">
                                {v.price}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}