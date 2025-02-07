import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../style/blog.scss";


function Blog() {
    return ( 
        <>
        <div className="blog-bg">
        <Navbar/>
        
                <main className="blog">
                    <section className="blog__header">
                        <h1 className="blog__title">HIFI Corner Blog</h1>
                        <p className="blog__subtitle">Latest news and insights about high-fidelity audio equipment</p>
                    </section>
                    
                    <section className="blog__content">
                        <article className="blog__post">
                            <h2 className="blog__post-title">The Art of High-Fidelity Sound</h2>
                            <div className="blog__post-meta">
                                <span className="blog__post-date">January 1, 2024</span>
                                <span className="blog__post-author">By Audio Expert</span>
                            </div>
                            <div className="blog__post-body">
                                <p>Discover the world of premium audio equipment and how it can transform your listening experience. From vintage turntables to modern amplifiers, we explore the finest in audio technology.</p>
                            </div>
                            <div className="blog__post-tags">
                                <span className="blog__post-tag">Audio Equipment</span>
                                <span className="blog__post-tag">Hi-Fi</span>
                            </div>
                        </article>
        
                        <article className="blog__post">
                            <h2 className="blog__post-title">Choosing Your Perfect Speaker System</h2>
                            <div className="blog__post-meta">
                                <span className="blog__post-date">January 2, 2024</span>
                                <span className="blog__post-author">By Sound Specialist</span>
                            </div>
                            <div className="blog__post-body">
                                <p>A comprehensive guide to selecting the right speakers for your space. Learn about different types of speakers, sound characteristics, and how to create the perfect audio setup.</p>
                            </div>
                            <div className="blog__post-tags">
                                <span className="blog__post-tag">Speakers</span>
                                <span className="blog__post-tag">Audio Setup</span>
                            </div>
                        </article>
                    </section>
        
                    <aside className="blog__sidebar">
                        <div className="blog__categories">
                            <h3 className="blog__categories-title">Categories</h3>
                            <ul className="blog__categories-list">
                                <li className="blog__categories-item">Amplifiers</li>
                                <li className="blog__categories-item">Speakers</li>
                                <li className="blog__categories-item">Turntables</li>
                            </ul>
                        </div>
                        
                        <div className="blog__recent">
                            <h3 className="blog__recent-title">Recent Posts</h3>
                            <ul className="blog__recent-list">
                                <li className="blog__recent-item">The Art of High-Fidelity Sound</li>
                                <li className="blog__recent-item">Choosing Your Perfect Speaker System</li>
                            </ul>
                        </div>
                    </aside>
                </main>
                <Footer/>
                </div>
        
        </>
     );
}

export default Blog;