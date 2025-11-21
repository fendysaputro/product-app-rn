import { Product } from "../model/Product";

export type RootStackParamList = {
  HomeTabs: undefined;
  ProductDetail: { product: Product };
};
