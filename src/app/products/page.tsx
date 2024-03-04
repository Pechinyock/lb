import { ProductCard } from '@/components/products/product_card';
import PocketBase from 'pocketbase'

 export const dynamic = 'auto',
   dynamicParams = true,
   revalidate = 0,
   fetchCache = 'auto',
   runtime = 'nodejs',
   preferredRegion = 'auto'

async function getProducts(){
    const pb = new PocketBase('http://127.0.0.1:8090');
    const products = await pb.collection('products').getList();    
    return products?.items as any[];
}

export default async function About() {
    const produtcs = await getProducts();    
    return (
        <><h1>Products page</h1>
            <div>
                {produtcs?.map((product) => {                    
                    return <ProductCard key={product.id} product={product}/>
                })}
            </div>
        </>
    );
}