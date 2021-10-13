import axios from 'axios';
import React, { useState } from 'react';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');
  const [submit, setSubmit] = useState(false);
  let emailRegex = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '') {
      e.preventDefault();
      setError('Please enter your Email Address');
      return false;
    } else if (!email.match(emailRegex)) {
      e.preventDefault();
      setError('Please enter a valid email');
      return false;
    } else {
      const { data } = axios.post(
        'https://foodapisamju.herokuapp.com/subscribe',
        {
          email,
        }
      );
      localStorage.setItem('message', JSON.stringify(data));
      console.log(data);
      setSubmit(true);
      setEmail('');
    }
  };
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
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <span class="error">{error}</span>

            <button type="submit" onClick={handleSubmit}>
              {' '}
              SUBSCRIBE
            </button>
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
