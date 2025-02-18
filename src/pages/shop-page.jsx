import "../style/shop-page.scss";
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { Link } from 'react-router-dom'; 

const ShopPage = () => {
    return (
        <>
        <Navbar />
        <main className="main-in-shop-page">
        <div>
        <div className="grid-container">

<div class="grid__items"> 
<Link to="/shop-category-page" >
<p class="overlay-text">SHOP BY BRAND</p>
<img src="/img/shop-13.jpg"></img>
</Link>
</div>



<div class="grid__items"> 
<Link to="/shop-category-page" >
<p class="overlay-text">AMPLIFIERS</p>
<img src="/img/shop-6.jpg"></img>
</Link>
</div>
    
<div class="grid__items"> 
<Link to="/shop-category-page" >
<p class="overlay-text">SPEAKERS</p>
<img src="/img/shop-2.jpg"></img>
</Link>
</div>

<div class="grid__items"> 
<Link to="/shop-category-page" >
<p class="overlay-text">TURNTABLES</p>
<img src="/img/shop-5.jpg"></img>
</Link>
</div>

<div class="grid__items"> 
<Link to="/shop-category-page" >
<p class="overlay-text">CD PLAYERS</p>
<img src="/img/shop-8.jpg"></img>
</Link>
</div>

<div class="grid__items"> 
<Link to="/shop-category-page" >
<p class="overlay-text">STREAMERS</p>
<img src="/img/shop-7.jpg"></img>
</Link>
</div>


<div class="grid__items"> 
<Link to="/shop-category-page" >
<p class="overlay-text">CABLES</p>
<img src="/img/shop-9.jpg"></img>
</Link>

</div>

<div class="grid__items"> 
<Link to="/shop-category-page" >
<p class="overlay-text">FURNITURE</p>
<img src="/img/shop-13.jpg"></img>
</Link>
</div>


<div class="grid__items"> 
<Link to="/shop-category-page" >
<p class="overlay-text">HEADPHONES</p>
<img src="/img/shop-14.jpg"></img>
</Link>
</div>


<div class="grid__items"> 
<Link to="/shop-category-page" >
<p class="overlay-text">HOME CINEMA</p>
<img src="/img/shop-11.jpg"></img>
</Link>
</div>

<div class="grid__items"> 
<Link to="/shop-category-page" >
<p class="overlay-text">OUTLET - SAVE UP TO 50% OFF</p>
<img src="/img/shop-15.jpg"></img>
</Link>
</div>

<div class="grid__items"> 
<Link to="/shop-category-page" >
<p class="overlay-text">EBAY SHOP</p>
<img src="/img/ebay2.jpg"></img>
</Link>
</div>

    
<div class="grid__items"> 
<Link to="/shop-category-page" >
<p class="overlay-text">CEILING SPEAKERS</p>
<img src="/img/shop-2.jpg"></img>
</Link>
</div>

<div class="grid__items"> 
<Link to="/shop-category-page" >
<p class="overlay-text">TVS</p>
<img src="/img/shop-11.jpg"></img>
</Link>
</div>


<div class="grid__items"> 
<Link to="/shop-category-page" >
<p class="overlay-text">VINYL LPS</p>
<img src="/img/shop-5.jpg"></img>
</Link>
</div>



<div className="button" >
<Link to="/shop-category-page" >
<button type="submit">SHOP NOW</button>  
</Link> 
</div>

</div>
</div>
</main>

         <Footer/>
        
         </>)

    }
export default ShopPage