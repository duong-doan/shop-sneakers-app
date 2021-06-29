import { motion } from 'framer-motion'
import React from 'react'
import BrandBox250 from '../../../../components/BrandBox250/index'
import ProductBox250 from '../../../../components/ProductBox250/index'
import ProductBox375 from '../../../../components/ProductBox375/index'
import SocialBox from '../../../../components/SocialBox/index'

function WrapSocial() {
  return (
    <div className='wrap-social'>
      <SocialBox name='TWITER' number={8851} bgColor='#49b8f1' icon='twitter' />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className='social-info'
      >
        <h6>LATEST WEETS</h6>
        <p>
          Sed pretium hendrerit fringilla. Vestibulum lorem justo, tincid eu
          quis. <strong>#architecture</strong> <strong>#bauhaus</strong>
        </p>
        <div className='social-info__wrap'>
          <div className='social-info__wrap__status'>
            <p>@ThemeForest</p>
            <span>12 mins</span>
          </div>
          <div className='social-info__wrap__arrow'>
            <div className='arrow-left'>
              <i className='fas fa-chevron-left'></i>
            </div>
            <div className='arrow-right'>
              <i className='fas fa-chevron-right'></i>
            </div>
          </div>
        </div>
      </motion.div>

      <SocialBox
        name='FACEBOOK'
        number={8851}
        bgColor='#2941b9'
        icon='facebook'
      />

      {/* second line */}
      <ProductBox375 />
      <SocialBox
        name='INSTAGRAM'
        number={2305}
        bgColor='#000'
        icon='instagram'
      />
      <ProductBox375 />
      <ProductBox375 />

      {/* third line */}
      <ProductBox250 />
      <ProductBox250 />
      <ProductBox250 />
      <ProductBox250 />
      <ProductBox250 />
      <ProductBox250 />

      {/* brand line */}
      <BrandBox250 />
      <BrandBox250 />
      <BrandBox250 />
      <BrandBox250 />
      <BrandBox250 />
      <BrandBox250 />
      <BrandBox250 />
      <BrandBox250 />
      <BrandBox250 />
      <BrandBox250 />
      <BrandBox250 />
      <BrandBox250 />
    </div>
  )
}

export default WrapSocial
