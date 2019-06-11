import React from 'react';
import SearchBar from './SearchBar'
import BannerImage from './BannerImage'
import BannerText from './BannerText'
import Footer from './Footer'

const App = () => {
    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <BannerImage />
            <BannerText />
            <SearchBar />
            <Footer />
        </div>
    );
};

export default App;