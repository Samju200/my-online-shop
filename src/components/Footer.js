import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <h3>Contact Us Here!</h3>
          <p>
            Address: Martha's Living products Ltd. 43 Longley road, Tooting,
            London, SW17 9LA, United Kingdom
          </p>
          <li>
            {' '}
            Tel number:<a href=" tell:+2348084624301"> +2348084624301</a>
          </li>
          <li>
            Email:{' '}
            <a href=" mailto:shopify.raymart7@gmail.com">
              {' '}
              shopify.raymart7@gmail.com
            </a>
          </li>
        </div>
        <div>
          <h3>About Business</h3>
          <ul>
            <li>
              {' '}
              <a href="#"> About Us </a>
            </li>
            <li>
              {' '}
              <a href="#"> Blog </a>
            </li>
            <li>
              {' '}
              <a href="#"> Contact Us </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Business Policy</h3>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Returns &amp; Refund Policicy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div>
          <form action="" className="newsletter">
            <h3>Newsletter</h3>
            <p>Sign up for the latest news, offers and styles</p>
            <br />
            <input type="text" placeholder="your mail" id="email" />
            <br />
            <br />
            <button type="submit"> SUBSCRIBE</button>
            <span class="error"></span>
          </form>
        </div>
      </div>
      <div class="copy">
        <p>Copyright &copy; 2020, Martha's Living Brands.</p>
        <ul>
          <li>
            <a href=""></a>
            <i class="fa fa-cc-amex" aria-hidden="true"></i>
          </li>
          <li>
            <a href="">
              <i class="fa fa-cc-mastercard" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa fa-paypal" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa fa-cc-visa" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa fa-google-wallet" aria-hidden="true"></i>
            </a>
          </li>
          <l1>
            <a href="">
              <i class="fa fa-credit-card" aria-hidden="true"></i>
            </a>
          </l1>
        </ul>
      </div>
    </>
  );
}

export default Footer;
