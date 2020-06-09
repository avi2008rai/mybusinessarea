import React from 'react';

const banner = () => {

    return (
        <div id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="main-slider" className="owl-carousel">
                            <div className="item"><img src="./images/main-banner1.jpg" alt="main-banner1" /></div>
                            <div className="item"><img src="./images/main-banner2.jpg" alt="main-banner2" /></div>
                            <div className="item"><img src="./images/main-banner3.jpg" alt="main-banner3" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default banner;