/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Benifits from "../components/Benifits";
import Offers from "../components/offers";
import Carousel from "../components/Carousel";
import BestSellingTShirt from "../components/BestSellingTShirt";

export default function Home() {

  return (
    <>
      <div>
        <Head>
          <title>StyleOn.com</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>


        {/* Carousel */}

        <Carousel  />

        {/* trending */}

        <BestSellingTShirt />



        {/* ShopByCategory */}



        {/* offers */}

        {/* <Offers /> */}
        {/* benifits */}

        <Benifits />




      </div>
    </>
  );
}


