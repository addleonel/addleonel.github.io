import React from 'react';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// styles
import '../assets/styles/App.scss';

const App: React.FC = () => {
    return (
        <React.Fragment>
            <Header />
            <Footer />
        </React.Fragment>
    )
}

export default App;