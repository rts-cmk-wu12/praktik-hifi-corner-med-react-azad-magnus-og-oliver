import "../style/account.scss";
import Footer from "../components/footer"
import SearchNav from "../components/searchnav"


const Account = () => {
    return (
        <>
            <SearchNav />
            <div class="customer_info">
                <div id="customer_wrapper" className="customer_wrapper">
                    <h1>Log in</h1>
                    <form>
                        <div id="form_group" class="form_group">
                            <label for="name">E-mail:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div id="form_group" class="form_group">
                            <label for="Password">Password:</label>
                            <input type="text" id="Password" name="Password" required />

                        </div>
                        <button className="form_loginbutton">Log in</button>

                    </form>
                

                <p>Don't have an account? <button className="form_signupbutton" onClick={() => {
                    document.getElementById('signup-form').classList.toggle('show');
                    document.getElementById('customer_wrapper').style.display = 'none';
                }}>Sign up</button></p></div>
                <div id="signup-form" className="signup-form">
                    <h1>Signup</h1>
                    <form>
                        <div className="form_group">
                            <label htmlFor="signup-email">E-mail:</label>
                            <input type="email" id="signup-email" name="email" required />
                        </div>
                        <div className="form_group">
                            <label htmlFor="signup-username">Username:</label>
                            <input type="name" id="signup-name" name="name" required />
                        </div>
                        <div className="form_group">
                            <label htmlFor="signup-confirm">Password:</label>
                            <input type="password" id="signup-confirm" name="confirm" required />
                        </div>
                        <button className="form_loginbutton">Create Account</button>
                    </form>
                </div>    </div>
            <Footer />





        </>
    )
}

export default Account