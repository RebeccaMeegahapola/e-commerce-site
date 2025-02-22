import {ProductCard} from "@/components/product-card";

const products = [
    {id: 1, name: "FADED T-SHIRT WITH SLOGAN", price: 50, image: "/assets/products-images/image1.jpg"},
    {id: 2, name: "FADED T-SHIRT WITH SLOGAN", price: 60, image: "/assets/products-images/image2.jpg"},
    {id: 3, name: "SHORT SLEEVE INTERLOCK T-SHIRT", price: 40, image: "/assets/products-images/image3.jpg"},
    {id: 4, name: "ZW COLLECTION LONG SKIRT", price: 80, image: "/assets/products-images/image4.jpg"},
    {id: 5, name: "JACQUARD WRAP SKORT", price: 90, image: "/assets/products-images/image5.jpg"},
    {id: 6, name: "CREPE MIDI SKIRT", price: 50, image: "/assets/products-images/image6.jpg"},
    {id: 7, name: "MINI PLEATED SKIRT", price: 60, image: "/assets/products-images/image7.jpg"},
    {id: 8, name: "DENIM TRF MINI SKIRT", price: 80, image: "/assets/products-images/image8.jpg"},
    {id: 9, name: "ZW COLLECTION VOLUMINOUS MIDI SKIRT", price: 100, image: "/assets/products-images/image9.jpg"},
    {id: 10, name: "PLEATED MIDI SKIRT ZW COLLECTION", price: 120, image: "/assets/products-images/image10.jpg"},
]

export const ProductSection = () => {
    return (
        <div className="p-8">
           <h1 className="text-2xl font-bold mb-6">Products</h1>
            <div className="grid grid-cols-1 sm-grid-cols-2 md:grid-cols-5 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    )
}