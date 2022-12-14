
 import { useState  } from "react";
 import NavBar from "./webpage-components/1_NavigationBar/NavBar"; 
import IntroHome from "./webpage-components/2_IntroHome/IntroHome"
import Product from "./webpage-components/03_Products/Products";
import Socials from './webpage-components/04_Socials/Socials';
import Footer from './webpage-components/05_Footer/Footer';
 
 
 
function App() {


  const [cart, setCart] = useState(0);

  return (
    <>
     
     <NavBar  
     cart={cart}
     />
     <IntroHome />
     <Product 
     setCart={setCart}
     cart={cart}
     />
     <Socials />
     <Footer />
      
    
     
    </>
     
  );
}

export default App;
