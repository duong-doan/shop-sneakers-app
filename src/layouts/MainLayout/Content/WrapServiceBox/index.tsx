import React from 'react'
import icon2 from '../../../../assets/images/icon-ser-24h.png'
import icon4 from '../../../../assets/images/icon-ser-card.png'
import icon1 from '../../../../assets/images/icon-ser-cart.png'
import icon3 from '../../../../assets/images/icon-ser-change.png'
import ServiceBox from '../../../../components/ServiceBox/index'

function WrapServiceBox() {
  const attrService = [
    {
      url: icon1,
      title: 'Free Shipping',
      des: 'Proin hendrerit suscipit justo, luctus volutpat l hendrerit suscipit justo, luctu'
    },
    {
      url: icon2,
      title: '24/7 Technical Support',
      des: 'Proin hendrerit suscipit justo, luctus volutpat l hendrerit suscipit justo, luctu'
    },
    {
      url: icon3,
      title: 'RETURN AND EXCHANGES',
      des: 'Proin hendrerit suscipit justo, luctus volutpat l hendrerit suscipit justo, luctu'
    },
    {
      url: icon4,
      title: 'CUSTOMER LOYALTY PROGRAMS',
      des: 'Proin hendrerit suscipit justo, luctus volutpat l hendrerit suscipit justo, luctu'
    }
  ]

  return (
    <div className='wrap-service'>
      {attrService.map((item, index) => (
        <ServiceBox
          key={index}
          url={item.url}
          title={item.title}
          des={item.des}
        />
      ))}
    </div>
  )
}

export default WrapServiceBox
