export function ProductCard({product}: any){
    const { id, price, title, description, img} = product || {};    
    const imgUrl = `http://127.0.0.1:8090/api/files/products/${id}/${img}`;
    return(
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={imgUrl} />
            <h4>{price}</h4>
        </div>
    );
}