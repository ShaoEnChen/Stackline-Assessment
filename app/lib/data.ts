import { API_ENDPOINT } from "./constants";

export default function fetchProductData(productId: string) {
  return fetch(`${API_ENDPOINT}/${productId}`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  });
}