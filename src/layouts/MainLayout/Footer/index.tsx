import React, { Fragment } from 'react'

function Footer(props) {
  return (
    <Fragment>
      <div className='footer'>
        <div className='footer__subcribe'>
          <div className='footer__subcribe__wrap'>
            <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
            <p>
              Aliquam erat erat volutpat. Maecenas veh Aliquam erat volutpat.
              Maecenas veh Aliquam erat volutpat. Maecenas veh Aliquam erat
              volutpat. Maecenas veh
            </p>
            <div className='subcribe__wrap__form'>
              <input type='text' placeholder='Enter your email' />
              <i className='fas fa-envelope'></i>
            </div>
          </div>
        </div>
        <div className='footer__main'>
          <div className='footer__main__wrap'>
            <div className='footer__main__info'>
              <h4>AGORA</h4>
              <p>
                Aliquam erat volutpat. Maecenas vehicula sapien quis erat sapien
                quis erat
              </p>
              <ul>
                <li>Guides</li>
                <li>Terms of Use</li>
                <li>Privacy Plicy</li>
              </ul>
              <span>&copy; 2013 - 2016</span>
            </div>

            <div className='footer__main__help'>
              <h5>Get Help</h5>
              <ul>
                <li>Order Status</li>
                <li>Shipping and Delivery</li>
                <li>Payment options</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className='footer__main__about'>
              <h5>About Us</h5>
              <ul>
                <li>Careers</li>
                <li>Sustainability</li>
                <li>Service</li>
                <li>CA Supply Chains Act</li>
              </ul>
            </div>

            <div className='footer__main__social'>
              <ul className='social'>
                <li>
                  <i className='fab fa-facebook-f'></i>
                </li>
                <li>
                  <i className='fab fa-twitter'></i>
                </li>
                <li>
                  <i className='fab fa-facebook-f'></i>
                </li>
                <li>
                  <i className='fab fa-google-plus-g'></i>
                </li>
                <li>
                  <i className='fab fa-instagram'></i>
                </li>
              </ul>

              <div className='payment'>
                <p>Payment method</p>
                <ul>
                  <li>
                    <i className='fab fa-cc-paypal'></i>
                  </li>
                  <li>
                    <i className='fab fa-cc-visa'></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer
