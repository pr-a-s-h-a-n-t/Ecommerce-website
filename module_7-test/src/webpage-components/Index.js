


// import { useState } from "react";
// import NavBar from "./1_NavigationBar/NavBar";
import IntroHome from "./2_IntroHome/IntroHome";
import Product from "./03_Products/Products";
import Socials from "./04_Socials/Socials";
import Footer from "./05_Footer/Footer"
 


function LandingPage({setCartCount, cartCount}) {


//   const [cart, setCart] = useState(0);

  return (
    <>

      {/* <NavBar
        cart={cart}
      /> */}
      <IntroHome />
      <Product
        setCartCount={setCartCount}
        cartCount={cartCount}
      />
      <Socials />
      <Footer />



    </>

  );
}

export default LandingPage;
