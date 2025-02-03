import '../style/style.css'
function Navbar() {
    return ( 
        <>
         <header>
        <div class="topnav">
            <p><i class="fa-solid fa-location-dot"></i></p>
            <p><i class="fa-solid fa-phone"></i></p>
            <p><i class="fa-regular fa-envelope"></i></p>
            <button class="topnav_button"><i class="fa-solid fa-envelope"></i><span class="topnav_black_line">|</span>Subscribe</button>
        </div>
        <nav class="navbar">
            <ul class="navbar_list">
               <li><a class="navbar_active" href="#">HOME</a></li>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">BRANDS</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">EVENTS</a></li>
                <li><a href="#">SHOP</a></li>
                <li><a href="#">CONTACT US</a></li>
            </ul>
        </nav>
    </header>
        </>
     );
}

export default Navbar;