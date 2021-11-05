import React from 'react';

// styles
import '../assets/styles/components/Header.scss';

const Header: React.FC = () => {
    return (
        <React.Fragment>
            <nav id="mainNav" className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <a className="navbar-brand" href=".">A.D.Leonel</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            <a className="nav-link nav-link--focussed" href=".">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="posts.html">Posts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about.html">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="mailto:adleonel3633@gmail.com">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}


export default Header;