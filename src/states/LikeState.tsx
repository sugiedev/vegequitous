"use client"

import React, { useState, createContext, type ReactNode } from "react";

// コンテキストの型を定義
interface LikeContextType {
    likedItemsId: string[];
    setLikedItemsId: (likedItemIds: string[]) => void;
}

// デフォルト値を持つコンテキストを作成
export const LikeContext = createContext<LikeContextType>({
    likedItemsId: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setLikedItemsId: () => { },
});

// Provider の Props の型を定義
interface LikeProviderProps {
    children: ReactNode;
}

export const LikeProvider: React.FC<LikeProviderProps> = ({ children }) => {
    const [likedItemsId, setLikedItemsId] = useState<string[]>([]);

    return (
        <LikeContext.Provider value={{ likedItemsId, setLikedItemsId }}>
            {children}
        </LikeContext.Provider>
    );
};
