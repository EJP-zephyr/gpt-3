import React from 'react'
import './brand.css';
import { google, slack,atlassion,dropbox,shopify } from './imports';

const Brand = () => {
  return (
    <div className='gpt3_brand section__padding'>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassion} alt="atlassion" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand