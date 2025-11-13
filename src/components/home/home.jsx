// Imports
import React from 'react'
import './home.css'
import './homeRespon.css'
import Slider from './main-slider/slider'
import Categories from './categories/categories'
import Popular from './popular/popular'
import Daily_best_sells from './daily_best_sells/daily_best_sells'
import Deals from './deals/deals'
import ProductHighlights from './product_highlights/product_highlights'



function Home() {
  return (
    <section className='home'>
      <Slider/>
      <Categories/>
      <Popular/>
      <Daily_best_sells/>
      <Deals/>
      <ProductHighlights/>

    </section>
  )
}

export default Home
