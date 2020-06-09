import React from 'react';
const footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="newslatter">
                            <form>
                                <h2 className="tf">Be The First To Hear Our Exciting News</h2>
                                <p>This ante posuere ac Mauris non turpis eu metus congue sagittis Fusce at.</p>
                                <div className="input-group">
                                    <input className=" form-control" type="text" placeholder="Email Here......" />
                                    <button type="submit" value="Sign up" className="btn btn-large btn-primary">Sign up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="about">
                            <div className="footer-logo"></div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature in Virginia</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="new-store">
                            <h4>What's in store</h4>
                            <ul className="toggle-footer">
                                <li><a href="https://mybusinessarea.com">Returns</a></li>
                                <li><a href="https://mybusinessarea.com">Delivery Options</a></li>
                                <li><a href="https://mybusinessarea.com">Brand Directory</a></li>
                                <li><a href="https://mybusinessarea.com">Buying Guides</a></li>
                                <li><a href="https://mybusinessarea.com">My Account</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="information">
                            <h4>information</h4>
                            <ul className="toggle-footer">
                                <li><a href="https://mybusinessarea.com">Returns</a></li>
                                <li><a href="https://mybusinessarea.com">Delivery Options</a></li>
                                <li><a href="https://mybusinessarea.com">Brand Directory</a></li>
                                <li><a href="https://mybusinessarea.com">Buying Guides</a></li>
                                <li><a href="https://mybusinessarea.com">My Account</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="contact">
                            <h4>Contact Us</h4>
                            <ul className="toggle-footer">
                                <li> <i className="fa fa-map-marker"></i>
                                    <div className="address-info">Warehouse &amp; Offices 12345 Street name,California, USA </div>
                                </li>
                                <li> <i className="fa fa-mobile"></i>
                                    <div className="call-info">+91 987-654-321<br />
                                        <span>+0987-654-321</span></div>
                                </li>
                                <li> <i className="fa fa-envelope"></i>
                                    <div className="email-info"> <a href="https://mybusinessarea.com">support@lionode.com</a></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="social-link">
                                <ul>
                                    <li><a href="https://mybusinessarea.com"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="https://mybusinessarea.com"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="https://mybusinessarea.com"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="https://mybusinessarea.com"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="https://mybusinessarea.com"><i className="fa fa-pinterest-p"></i></a></li>
                                    <li><a href="https://mybusinessarea.com"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer-link">
                                <ul>
                                    <li><a href="https://mybusinessarea.com">Specials</a></li>
                                    <li><a href="https://mybusinessarea.com">Affiliates</a></li>
                                    <li><a href="https://mybusinessarea.com">Gift Vouchers</a></li>
                                    <li><a href="https://mybusinessarea.com">Brands</a></li>
                                    <li><a href="https://mybusinessarea.com">Returns</a></li>
                                    <li><a href="https://mybusinessarea.com">Site Map</a></li>
                                    <li><a href="https://mybusinessarea.com">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copy-right">
                                <p> All Rights Reserved. Copyright 2017 Powered by lionode.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-offer">
                    <h2>Deals of the Day: Unbox Latest Offers &amp; Deals Every Single Day at Store.</h2>
                </div>
            </div>
        </footer>
    );
}

export default footer;