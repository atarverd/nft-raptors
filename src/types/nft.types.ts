export type TNft = {
  id: string;
  img: string;
  name: string;
  currentPrice: number;
  ownerId: string;
  collectionId: string;
  collectionName: string;
  isForSold: boolean;
  owner: string;
  priceHistory: TPriceHistory[];
  description:string;
};

export type TPriceHistory = {
  data: {seconds: number; nanoseconds: number;};
  prevOwner: string;
  price: number;
}
