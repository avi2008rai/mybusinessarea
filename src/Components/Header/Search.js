import React from 'react';
const search = () => {
  return (
    <div className="header-mid">
      <div className="container">
        <div className="row">
          <div className="col-md-3 header-left">
            <div className="logo"> <a href="index.html"><img src="images/logo.png" alt="#" /></a> </div>
          </div>
          <div className="col-md-6 search_block">
            <div className="search">
              <form action="grid-view.html">
                <div className="search_cat">
                  <select className="search-category" name="search-category">
                    <option className="computer" selected="">All Categories</option>
                    <option className="computer">Men</option>
                    <option className="computer">Women</option>
                    <option className="computer">Kids</option>
                    <option className="computer">Computer</option>
                    <option className="computer">Electronics</option>
                  </select>
                  <span className="fa fa-angle-down"></span> </div>
                <input type="text" placeholder="Search..." />
                <button type="submit" className="btn submit"> <span className="fa fa-search"></span></button>
              </form>
            </div>
          </div>
          <div className="col-md-3 header-right">
            <div className="cart">
              <div className="cart-icon dropdown"></div>
              <a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" className="dropdown-toggle" href="cart.html">My Cart( 2 )<span> $261.20</span></a>
              <ul className="dropdown-menu pull-right cart-dropdown-menu">
                <li>
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <td className="text-center"><a href="product.html"><img className="img-thumbnail" src="images/product/car3-70x92.jpg" alt="img" /></a></td>
                        <td className="text-left"><a href="https://mybusinessarea.com">Black African Print Pencil Skirt</a></td>
                        <td className="text-right quality">X1</td>
                        <td className="text-right price-new">$254.00</td>
                        <td className="text-center"><button type="button" title="Remove" className="btn btn-xs remove"><i className="fa fa-times"></i></button></td>
                      </tr>
                      <tr>
                        <td className="text-center"><a href="product.html"><img className="img-thumbnail" src="images/product/car3-70x92.jpg" alt="img" /></a></td>
                        <td className="text-left"><a href="https://mybusinessarea.com">Black African Print Pencil Skirt</a></td>
                        <td className="text-right quality">X1</td>
                        <td className="text-right price-new">$254.00</td>
                        <td className="text-center"><button type="button" title="Remove" className="btn btn-xs remove"><i className="fa fa-times"></i></button></td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li>
                  <div className="minitotal">
                    <table className="table pricetotal">
                      <tbody>
                        <tr>
                          <td className="text-right"><strong>Sub-Total</strong></td>
                          <td className="text-right price-new">$210.00</td>
                        </tr>
                        <tr>
                          <td className="text-right"><strong>Eco Tax (-2.00)</strong></td>
                          <td className="text-right price-new">$2.00</td>
                        </tr>
                        <tr>
                          <td className="text-right"><strong>VAT (20%)</strong></td>
                          <td className="text-right price-new">$42.00</td>
                        </tr>
                        <tr>
                          <td className="text-right"><strong>Total</strong></td>
                          <td className="text-right price-new">$254.00</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="controls"> <a className="btn btn-primary pull-left" href="cart.html" id="view-cart"><i className="fa fa-shopping-cart"></i> View Cart </a> <a className="btn btn-primary pull-right" href="checkout.html" id="checkout"><i className="fa fa-share"></i> Checkout</a> </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default search;