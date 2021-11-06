import * as React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// styles
import '../assets/styles/App.scss';

const App: React.FC = () => {
    return (
        <React.Fragment>
            <Router>
                <Header />
                <div className="wrap">
                    <div className="main">
                        <Routes>
                            <Route exact path="/"/>
                            <Route path="/about"  />
                            <Route path="/contact"/>
                        </Routes>
                    </div>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </Router>
        </React.Fragment>
    )
}

export default App;