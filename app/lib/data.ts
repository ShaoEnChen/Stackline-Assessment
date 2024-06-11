import { API_ENDPOINT } from "./constants";

export function fetchProductData(productId: string) {
  return fetch(`${API_ENDPOINT}/${productId}`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  }).then((res) => res.json());
}

export function formatPrice(price: number): string {
  const priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  });

  return priceFormatter.format(price);
}

export function formatDate(date: string): string {
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    timeZone: "UTC"
  });

  return dateFormatter.format(new Date(date)).replaceAll('/', '-');
}
