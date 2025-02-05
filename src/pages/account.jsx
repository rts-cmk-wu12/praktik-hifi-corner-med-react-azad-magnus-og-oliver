import "../style/account.scss";
import Footer from "../components/footer"
import Navbar from "../components/navbar"


const Account = () => {
    return (
        <>
            <Navbar />
        <div class="customer_info">
        <h1>Log in</h1>
        <form>
            <div class="form_group">
                <label for="name">E-mail:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div class="form_group">
                <label for="Password">Password:</label>
                <input type="text" id="Password" name="Password" required />
                
            </div>
            <button>Log in</button>
            <p>Don't have an account? <a href="#">Sign up</a> </p>
        </form>
    </div>
    <Footer />

        
        
        
        
        </>
    )
}

export default Account