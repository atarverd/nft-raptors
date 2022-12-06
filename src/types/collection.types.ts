export type TCollection = {
    collectionName: string;
    description: string;
    creator: string;
    creatorId: string;
    category:string;
    id: string;    
    date: {
      seconds: number;
      nanoseconds: number;
    };
    logo: string;
    background: string;
    feature:string;
    volume:number
  };