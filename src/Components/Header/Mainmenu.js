import React from 'react';
const mainMenu = () => {
  return (
    <>
      <div className="header-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="new-further">
                <p>New in kors look  : </p>
                <ul className="toggle-newinFurther">
                  <li><a href="https://mybusinessarea.com">Women</a></li>
                  <li><a href="https://mybusinessarea.com">Clothing</a></li>
                  <li><a href="https://mybusinessarea.com">Nightwear</a></li>
                  <li><a href="https://mybusinessarea.com">Jeans</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="main-menu">
        <div className="container">
          <nav className="navbar navbar-default">
            <div className="navbar-header">
              <button aria-controls="navbar" data-target="https://mybusinessarea.comnavbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
              <a href="https://mybusinessarea.com" className="navbar-brand">menu</a> </div>
            <div className="navbar-collapse collapse" id="navbar">
              <ul className="nav navbar-nav">
                <li><a href="index.html">HOME</a></li>
                <li><a href="grid-view.html">WOMEN</a></li>
                <li><a href="grid-view.html">MEN</a><span className="new">new</span></li>
                <li className="dropdown"> <a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" className="dropdown-toggle" href="https://mybusinessarea.com"> PAGES<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="checkout.html">Checkout</a></li>
                    <li><a href="cart.html">Shoping Cart</a></li>
                    <li><a href="checkout-step1.html">Billing &amp; shipping address</a></li>
                    <li><a href="checkout-step2.html">Delivery method </a></li>
                    <li><a href="checkout-step3.html">Payment method</a></li>
                    <li><a href="checkout-step4.html">Order riview</a></li>
                    <li><a href="404.html">Page Notfound</a></li>
                  </ul>
                </li>
                <li><a href="blog.html">BLOG</a></li>
                <li><a href="contact-us.html">CONTACT US</a></li>
                <li><a href="about-us.html">ABOUT US</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default mainMenu;