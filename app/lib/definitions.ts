export type Review = {
  customer: string;
  review: string;
  score: number;
};

export type Sale = {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
};

export type ProductData = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  brand: string;
  retailer: string;
  details: string[];
  tags: string[];
  reviews: Review[];
  sales: Sale[];
};