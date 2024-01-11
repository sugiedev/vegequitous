"use client"

import type { Data } from "@/server/api/routers/data";
import { api } from "@/trpc/react";
import React, { useState, createContext, type ReactNode, useEffect } from "react";

interface DataContextType {
    data: Data[];
    setData: (product: Data[]) => void;
    isLoading: boolean
}

export const DataContext = createContext<DataContextType>({
    data: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setData: () => { },
    isLoading: false,
});

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const { data: fetchData, isLoading } = api.data.getAll.useQuery()
    const [data, setData] = useState<Data[]>([]);
    useEffect(() => {
        if (fetchData) {
            setData(fetchData), [fetchData]
        }
    }, [fetchData])

    return (
        <DataContext.Provider value={{ data, setData, isLoading }}>
            {children}
        </DataContext.Provider>
    );
};
