import {Link} from 'react-router'

export const Socialcomponent = () => {
    return (
        <div className="socialcomponent">
           <Link className="socialcomponent__icon" to="https://www.facebook.com"  target={"_blank"}><img className="socialcomponent__image" src="/img/facebook-large.png" alt="social_1"/></Link>
           <Link className="socialcomponent__icon" to={"blog"} target={"_blank"}><img className="socialcomponent__image" src="/img/blog-large.png" alt="social_2"/></Link>
           <Link className="socialcomponent__icon" to="https://www.twitter.com" target={"_blank"}><img className="socialcomponent__image" src="/img/twitter-large.png" alt="social_3"/></Link>
</div>)
}