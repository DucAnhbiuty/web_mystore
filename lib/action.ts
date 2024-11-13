export const getCollections = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`);
  
  if (!response.ok) {
    console.error("Failed to fetch collections:", response.status, response.statusText);
    return null; // Hoặc xử lý lỗi tùy ý
  }

  try {
    return await response.json();
  } catch (error) {
    console.error("Response is not valid JSON:", error);
    return null;
  }
}; //Check truy cập api

export const getProducts= async () => {
  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
  return await products.json()
}

export const getProductDetails = async (productId: string) => {
  const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
  return await product.json()
}