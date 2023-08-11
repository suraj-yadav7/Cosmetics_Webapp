import React from 'react'
import "../style/footer.scss"
import {BsInstagram,BsFacebook,BsPinterest} from "react-icons/bs"
import {TfiTwitter} from "react-icons/tfi"
import {FiYoutube} from "react-icons/fi"
import android from "../assest/playstore.png"
import apple from "../assest/apple-store.png"

const Footer = () => {
  return (
    <>
     <footer>
      <div className='footerMain'>
        <div className='socialIcons'>
          <BsInstagram/>
          <TfiTwitter/>
          <BsFacebook/>
          <FiYoutube/>
          <BsPinterest/>

        </div>
        <div className='policy'>
          <ul>
            <li>Store</li>
            <li>Terms and condition</li>
            <li>Returns</li>
            <li>FAQs</li>
            <li>About us</li>
          </ul>
        </div>
        <div className='contact'>
          <div>
          <h3>GET IN TOUCH</h3>
          <div >
            <h5>Call us at</h5>
            <h5>1800-234-987</h5>
            <h5>Monday to Friday: 9AM to 7Pm</h5>
            </div>
          </div>
          <div>
            <h4>Support</h4>
            <h5>hello@cosmetics.com</h5>
           
          </div>
          <div>
          <h5>Careers</h5>
            <h5>We're Hiring</h5>
          </div>
          <div>
          <h4>Press and Media</h4>
          <h5>pr@cosmetics.com</h5>
        </div>
        </div>
      
        <div className='appIcon'>
          <h4>GET THE NEW COSMETIC APP TODAY!</h4>
          <div>
          <img src={apple}/>
          <img src={android}/>
          </div>

        </div>
        <div className='copyright'>
          <h4>Copyright © 2023 Cosmetics. All rights reserved.</h4>
        </div>
      </div>
      
     </footer>
    </>
  )
}

export default Footer
