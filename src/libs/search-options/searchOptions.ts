export type SelectOptionType = {
  value: string;
  text: string;
};

export const items = (): SelectOptionType[] => {
  return [
    { value: "", text: "品目" },
    { value: "大根", text: "大根" },
    { value: "りんご", text: "りんご" },
    { value: "みかん", text: "みかん" },
  ];
};

export const areas = (): SelectOptionType[] => {
  return [
    { value: "", text: "エリアから探す" },
    { value: "東京都", text: "東京都" },
    { value: "愛知県", text: "愛知県" },
  ];
};
