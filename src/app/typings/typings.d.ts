interface ProductItem {
  images: string[];
  article: string;
  price: number;
  name: string;
}

interface ProductItemDetails {
  article: string,
  description: string,
  fields: ProductField[],
  images: string[],
  name: string,
  price: number
}

interface ProductField {
  is_public: boolean,
  name: string,
  slug: string,
  value: string,
  weight: number
}