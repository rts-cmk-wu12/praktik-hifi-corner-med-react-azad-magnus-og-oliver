import "../style/shop-page.scss";
import Footer from "../components/footer"
import Navbar from "../components/navbar"
const ShopPage = () => {
    return (
        <>
        <Navbar />
        <div>
        <div className="grid-container">

<div class="grid__items"> 
<p class="overlay-text">SHOP BY BRAND</p>
<img src="/img/SHOP BY BRAND.jpg"></img>
</div>

<div class="grid__items"> 
<p class="overlay-text">AMPLIFIERS</p>
<img src="/img/AMPLIFIERS.jpg"></img>
</div>
    
<div class="grid__items"> 
<p class="overlay-text">SPEAKERS</p>
<img src="/img/SPEAKER.jpg"></img>

</div>

<div class="grid__items"> 
<p class="overlay-text">TURNTABLES</p>
<img src="/img/TURNTABLES.jpg"></img>

</div>

<div class="grid__items"> 
<p class="overlay-text">CD PLAYERS</p>
<img src="/img/cdplayer2.jpg"></img>
</div>

<div class="grid__items"> 
<p class="overlay-text">STREAMERS</p>
<img src="/img/COLOURBOX14811521.jpg"></img>
</div>


<div class="grid__items"> 
<p class="overlay-text">CABLES</p>
<img src="/img/CABLES.jpg"></img>

</div>

<div class="grid__items"> 
<p class="overlay-text">FURNITURE</p>
<img src="/img/FURNITURE.jpg"></img>
</div>


<div class="grid__items"> 
<p class="overlay-text">HEADPHONES</p>
<img src="/img/headphones3.jpg"></img>
</div>


<div class="grid__items"> 
<p class="overlay-text">HOME CINEMA</p>
<img className="color-none" src="/img/HOME CINEMA.jpg"></img>
</div>

<div class="grid__items"> 
<p class="overlay-text">OUTLET - SAVE UP TO 50% OFF</p>
<img className="color-red-on-pic" src="/img/outlet50.jpg"></img>
</div>

<div class="grid__items"> 
<p class="overlay-text">EBAY SHOP</p>
<img src="/img/ebay2.jpg"></img>
</div>

    
<div class="grid__items"> 
<p class="overlay-text">CEILING SPEAKERS</p>
<img src="/img/CEILING SPEAKER.jpg"></img>
</div>

<div class="grid__items"> 
<p class="overlay-text">TVS</p>
<img className="color-none" src="/img/TV.jpg"></img>
</div>


<div class="grid__items"> 
<p class="overlay-text">VINYL LPS</p>
<img className="color-none" src="/img/vinyl3.jpg"></img>
</div>



<div className="button" >
<button type="submit">SHOP NOW</button>   
</div>

</div>
</div>

         <Footer/>
        
         </>)

    }
export default ShopPage