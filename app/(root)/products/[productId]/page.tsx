import Gallery from "@/components/Gallery"
import ProductInfo from "@/components/ProductInfo"
import { getProductDetails } from "@/lib/action"

const ProductDetails = async ({params}: {params: {productId: string}}) => {
    const ProductDetails = await getProductDetails(params.productId)
    console.log(ProductDetails)
  return (
    <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
        <Gallery productMedia={ProductDetails.media}/>
        <ProductInfo productInfo={ProductDetails}/>
    </div>
  )
}

export default ProductDetails
