import React from 'react';

import PostPreview from './PostPreview';
// styles

import '../assets/styles/components/Home.scss';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

    return (
        <React.Fragment>
            <header className="masthead">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <blockquote className="blockquote">
                                    <q>It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.</q>
                                    <footer>
                                        <cite>- Leonardo Davinci</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <p className="last-posts">Last Publications</p>
                        <PostPreview
                            cover="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                            title="Full-Text Search | Django | Postgres"
                            content="Full-text search refers to techniques for searching a single computer-stored document or a collection in a full-text database ..."
                            date="Published On June 5, 2021"
                        />
                    </div>	
                </div>
            </main>
            <section className="container more-post">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <Link className="more-post__link" to="/posts">All posts</Link>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )

}

export default Home;