type TNft = {
  id: string;
  img: string;
  name: string;
  currentPrice: number;
  ownerId: string;
};

type TCart = TNft[];

export const checkItemIsInArray = (cart: TCart, id: string): boolean => {
	if (cart.find((item) => item.id === id)) {
		return true;
	} else {
		return false;
	}
};
