import "../style/about-us.scss";
import Footer from "../components/footer"
import Navbar from "../components/navbar"



const AboutUs = () => {
    return (
        <>
          <Navbar />
        <div className="about-us-box">
        <div className="pic-in-about-us">
        <h1 className="headline-in-about-us">About HiFi Corner</h1>
        </div>

<div className="section-with-pic-and-text">
  <div>
<img className="pic-next-to-ourhistory" src="/img/about.jpg"></img>
</div>

<div className="text-in-about-us">
<h2>Our history</h2>
<h3>Established in the late 1960s, our family owned business is based in Edinburgh and Falkirk, but services customers across the UK.</h3>
<p>Our Edinburgh branch has the longest history as an audio retailer in the UK. During recent renovations, receipts were found from Nicolson’s Gramophone Saloon dating back to 1926. In the 1950s WG Graham took over the shop and renamed it WG Graham’s Hi-Fi Corner. Upon his retirement, Graham Tiso bought the business and shortened the name to Hi-Fi Corner. Soon thereafter a young enthusiastic Colin MacKenzie (left), who was recommended by Linn’s own Ivor Tiefenbrun, was employed to manage the shop; with a knack for business and years of experience in the hi-fi industry, Colin would later become the owner of Hi-Fi Corner. Today, Struan MacKenzie carries on the legacy as the company’s Managing Director. </p>
</div>
</div>

        </div>
        <Footer/>
        </>
    )
}

export default AboutUs