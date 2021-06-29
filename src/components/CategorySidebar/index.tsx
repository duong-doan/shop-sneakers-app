import React, { useState } from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import { useDispatch } from 'react-redux'
import { FormGroup, Input, Label } from 'reactstrap'
import * as actions from '../../containers/CategoryPage/store/actions/index'
import TableSizes from './TableSizes'
import ColorItem from './ColorItem'
import LoadCategoryName from '../../components/ContentLoader/ContentLoaderCategoryPage/LoadCategoryName'

function CategorySidebar(props) {
  const {
    name,
    showListCate,
    lisNameCateApi,
    showPrice,
    showRadio,
    showColor,
    showTable
  } = props
  const dispatch = useDispatch()

  const [isShowBody, setIsShowBody] = useState(true)
  const [isShowEl, setIsShowEl] = useState(true)
  const [valueRange, setValueRange] = useState({
    min: 50,
    max: 1000
  })
  const [valueBrand, setValueBrand] = useState<any[]>([])
  const [valueColor, setValueColor] = useState<string[]>([])
  const [valueSize, setValueSize] = useState<any[]>([])

  const listColors = [
    { value: 'white', color: 'white', checked: false },
    { value: 'gray', color: 'gray', checked: false },
    { value: 'lime', color: 'lime', checked: false },
    { value: 'navy', color: 'navy', checked: false },
    { value: 'yellow', color: 'yellow', checked: false },
    { value: 'green', color: 'green', checked: false },
    { value: 'fuchsia', color: 'fuchsia', checked: false },
    { value: 'olive', color: 'olive', checked: false },
    { value: 'teal', color: 'teal', checked: false },
    { value: 'black', color: 'black', checked: false }
  ]

  const listBrands = [
    { value: 1, name: 'Library Science Teacher' },
    { value: 2, name: 'Pipelaying Fitter' },
    { value: 3, name: 'Gaming Manager' },
    { value: 4, name: 'Order Clerk' },
    { value: 5, name: 'Ship Pilot' },
    { value: 6, name: 'Forestry Conservation Science Teacher' },
    { value: 7, name: 'Aviation Inspector' },
    { value: 8, name: 'Buffing and Polishing Operator' },
    { value: 9, name: 'Protective Service' },
    { value: 10, name: 'Flight Attendant' }
  ]

  let sizeOption: number[] = []

  for (let i = 4; i <= 19; ) {
    if (i < 15) {
      sizeOption.push(i)
      i += 0.5
    }
    if (i >= 15) {
      sizeOption.push(i)
      i++
    }
  }

  const handleClick = () => {
    let toggle = !isShowBody
    setIsShowBody(toggle)
  }

  const handleSubmitFormBrands = e => {
    e.preventDefault()
  }

  const handleGetColor = (isShow: boolean, color: any) => {
    setValueColor(prev => {
      if (prev.includes(color)) {
        const index = prev.findIndex(item => item === color)
        prev.splice(index, 1)
        return prev
      } else {
        if (!isShow) prev.push(color)
      }
      return prev
    })
    dispatch(actions.getValueColors(valueColor))
  }

  const handleClickedSize = (number: number) => {
    setValueSize(prev => {
      if (prev.includes(number)) {
        const index = prev.findIndex(item => item === number)
        prev.splice(index, 1)
        return prev
      } else prev.push(number)
      return prev
    })
    dispatch(actions.getValueSizes(valueSize))
  }

  const handleCloseCategory = () => {
    let toggle = !isShowEl
    setIsShowEl(toggle)
  }

  const handleGetCategoryId = id => {
    dispatch(actions.getDataCategoryId(id))
  }

  return (
    <div className='sidebar__category'>
      {isShowEl ? (
        <div className='category__header'>
          <div className='header__wrap' onClick={handleClick}>
            <i className='fas fa-sort-down'></i>
            <h6>{name}</h6>
          </div>

          <span onClick={handleCloseCategory}>x</span>
        </div>
      ) : (
        ''
      )}

      {isShowBody && showListCate ? (
        <div className='category__body__list'>
          {lisNameCateApi.map((category, index) => (
            <div className='category__item' key={index}>
              <p onClick={() => handleGetCategoryId(category.id)}>
                {category.name}
              </p>
              <span>{category.products_count}</span>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}

      {isShowBody && showPrice ? (
        <div className='category__body__price'>
          <div className='category__price__value'>
            <input type='text' value={valueRange.min} disabled />
            <input type='text' value={valueRange.max} disabled />
          </div>

          <InputRange
            draggableTrack
            maxValue={3000}
            minValue={0}
            value={valueRange}
            onChange={(value: any) => {
              setValueRange(value)
              dispatch(actions.getValuePrice(value))
            }}
            onChangeComplete={value => value}
          />
        </div>
      ) : (
        ''
      )}

      {isShowBody && showRadio ? (
        <div className='category__body__checkbox'>
          <form action='' onSubmit={handleSubmitFormBrands}>
            {listBrands.map((brand, index) => (
              <FormGroup key={index}>
                <Label for={brand.name}>{brand.name}</Label>
                <Input
                  type='checkbox'
                  value={valueBrand}
                  id={brand.name}
                  onChange={e => {
                    if (e.target.checked) {
                      setValueBrand(prev => {
                        prev.push(brand.name)
                        return prev
                      })
                    } else {
                      setValueBrand(prev => {
                        const index = prev.findIndex(item => item === brand)
                        prev.splice(index, 1)
                        return prev
                      })
                    }
                    dispatch(actions.getValueBrands(valueBrand))
                  }}
                />
              </FormGroup>
            ))}
          </form>
        </div>
      ) : (
        ''
      )}

      {isShowBody && showColor ? (
        <div className='category__body__color'>
          {listColors.map((item, index) => (
            <ColorItem
              key={index}
              color={item.color}
              onClickColor={(isShow: boolean) =>
                handleGetColor(isShow, item.color)
              }
            />
          ))}
          <div className='circle'>
            <i className='fas fa-check'></i>
          </div>
        </div>
      ) : (
        ''
      )}

      {isShowBody && showTable ? (
        <div className='category__body__table'>
          {sizeOption.map((number, index) => (
            <TableSizes
              key={index}
              number={number}
              onClickedSize={() => handleClickedSize(number)}
            />
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default CategorySidebar
