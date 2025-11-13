// Imports
import React from "react";
import "./product_highlights.css";
import Product from "./product";


// Images 
import thumbnail_1 from '../../../assets/images/thumbnail-1.png'
import thumbnail_2 from '../../../assets/images/thumbnail-2.png'
import thumbnail_3 from '../../../assets/images/thumbnail-3.png'
import thumbnail_4 from '../../../assets/images/thumbnail-4.png'
import thumbnail_5 from '../../../assets/images/thumbnail-5.png'
import thumbnail_6 from '../../../assets/images/thumbnail-6.png'
import thumbnail_7 from '../../../assets/images/thumbnail-7.png'
import thumbnail_8 from '../../../assets/images/thumbnail-8.png'
import thumbnail_9 from '../../../assets/images/thumbnail-9.png'
import thumbnail_10 from '../../../assets/images/thumbnail-10.png'
import thumbnail_11 from '../../../assets/images/thumbnail-11.png'
import thumbnail_12 from '../../../assets/images/thumbnail-12.png'

// Data
import data from "./data.json";
const src_1 = [thumbnail_1,thumbnail_2,thumbnail_3,thumbnail_4,thumbnail_5,thumbnail_6,thumbnail_7,thumbnail_8,thumbnail_9,thumbnail_10,thumbnail_11,thumbnail_12]
const src_2 = [thumbnail_5,thumbnail_6,thumbnail_7,thumbnail_8,thumbnail_9,thumbnail_10,thumbnail_11,thumbnail_12]
const src_3 = [thumbnail_9,thumbnail_10,thumbnail_11,thumbnail_12]



function ProductHighlights() {
  return (
    <section className="product-highlights">
      {data.map((d,i) => (
        <Product mainTitle={d.mainTitle} 
        src_1={src_1[i]}
        src_2={src_2[i]}
        src_3={src_3[i]}
        title={d.title}
        rate={d.rate}
        price={d.price}
        previous={d.previous}
        key={d.id}
        />
      ))}
    </section>
  );
}

export default ProductHighlights;
