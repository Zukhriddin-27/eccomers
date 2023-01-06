import { Checkbox, Collapse, Slider } from 'antd'

import React, { useState } from 'react'
import './style.css'
const ShopFilter = () => {
  const { Panel } = Collapse
  const [inputValue, setInputValue] = useState(1)
  const onChange = (newValue) => {
    setInputValue(newValue)
  }

  return (
    <div className='filter'>
      <div className='title'>
        <h3>Categories</h3>
      </div>
      <div className='categories__accordion'>
        <div className='accordion' id='accordionExample'>
          <Collapse accordion expandIconPosition='end'>
            <Panel className='card-heading' header='Women' key='1'>
              <div id='collapseOne' className='collapse'>
                <div className='card-body'>
                  <ul>
                    <li>Coats</li>
                    <li>Jackets</li>
                    <li>Dresses</li>
                    <li>Shirts</li>
                    <li>T-shirts</li>
                    <li>Jeans</li>
                  </ul>
                </div>
              </div>
            </Panel>
          </Collapse>
          <Collapse accordion expandIconPosition='end'>
            <Panel className='card-heading' header='Men' key='2'>
              <div id='collapseOne' className='collapse'>
                <div className='card-body'>
                  <ul>
                    <li>Coats</li>
                    <li>Jackets</li>
                    <li>Dresses</li>
                    <li>Shirts</li>
                    <li>T-shirts</li>
                    <li>Jeans</li>
                  </ul>
                </div>
              </div>
            </Panel>
          </Collapse>
          <Collapse accordion expandIconPosition='end'>
            <Panel className='card-heading' header='Kids' key='3'>
              <div id='collapseOne' className='collapse'>
                <div className='card-body'>
                  <ul>
                    <li>Coats</li>
                    <li>Jackets</li>
                    <li>Dresses</li>
                    <li>Shirts</li>
                    <li>T-shirts</li>
                    <li>Jeans</li>
                  </ul>
                </div>
              </div>
            </Panel>
          </Collapse>
          <Collapse accordion expandIconPosition='end'>
            <Panel className='card-heading' header='Electronic' key='4'>
              <div id='collapseOne' className='collapse'>
                <div className='card-body'>
                  <ul>
                    <li>Coats</li>
                    <li>Jackets</li>
                    <li>Dresses</li>
                    <li>Shirts</li>
                    <li>T-shirts</li>
                    <li>Jeans</li>
                  </ul>
                </div>
              </div>
            </Panel>
          </Collapse>
          <Collapse accordion expandIconPosition='end'>
            <Panel className='card-heading' header='Jelewers' key='5'>
              <div id='collapseOne' className='collapse'>
                <div className='card-body'>
                  <ul>
                    <li>Coats</li>
                    <li>Jackets</li>
                    <li>Dresses</li>
                    <li>Shirts</li>
                    <li>T-shirts</li>
                    <li>Jeans</li>
                  </ul>
                </div>
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
      <div className='title'>
        <h3>Shop by price</h3>
      </div>
      <div className='filter-price'>
        <Slider
          range={{}}
          max={600}
          min={1}
          defaultValue={[1, 600]}
          onChange={onChange}
        />
        <div className='range-slider'>
          <div className='price-input'>
            <p>Price:</p>
            <span>$</span>
            <input type='text' value={inputValue[0]} id='minamount' />
            <span>-</span>
            <span>$</span>
            <input type='text' value={inputValue[1]} id='maxamount' />
          </div>
        </div>
        <button className='btn'>Filter</button>
      </div>
      <div className='title'>
        <h3>Shop by size</h3>
      </div>
      <div className='filter-checkbox'>
        <Checkbox onChange={onChange}>xxs</Checkbox>
        <Checkbox onChange={onChange}>xs</Checkbox>
        <Checkbox onChange={onChange}>xs-s</Checkbox>
        <Checkbox onChange={onChange}>s</Checkbox>
        <Checkbox onChange={onChange}>m</Checkbox>
        <Checkbox onChange={onChange}>m-l</Checkbox>
        <Checkbox onChange={onChange}>l</Checkbox>
        <Checkbox onChange={onChange}>xl</Checkbox>
      </div>
      <div className='title'>
        <h3>Shop by color</h3>
      </div>
      <div className='filter-checkbox'>
        <Checkbox onChange={onChange}>Blacks</Checkbox>
        <Checkbox onChange={onChange}>Whites</Checkbox>
        <Checkbox onChange={onChange}>Reds</Checkbox>
        <Checkbox onChange={onChange}>Greys</Checkbox>
        <Checkbox onChange={onChange}>Blues</Checkbox>
        <Checkbox onChange={onChange}>Greens</Checkbox>
        <Checkbox onChange={onChange}>Beige Tomes</Checkbox>
        <Checkbox onChange={onChange}>Yellows</Checkbox>
      </div>
    </div>
  )
}

export default ShopFilter
