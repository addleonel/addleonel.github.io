import React from 'react';

// styles
import '../assets/styles/components/Footer.scss';

const Footer: React.FC = () => {
    return (
        <React.Fragment>
            <footer className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <a href="https://github.com/addleonel">
                                        <span className="fa-stack fa-lg">
                                            <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <p className="text-center">Copyright &copy 2021</p>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer;