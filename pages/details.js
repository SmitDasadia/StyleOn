import React from 'react'
const mongoose = require('mongoose');


import Product from '../models/Product';

const details = ({products}) => {
  return (
    <div>{products} products</div>
  )
}

export default details


export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        family: 4,
      })
    }
    let products = await Product.find().count();
    return {
      props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
    }
  }