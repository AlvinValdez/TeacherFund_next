const Percent = (props) => (
  <div className='percentIcon'>
    <p className='percentNumber'>{props.percent}</p>
    <svg className='percentSVG' xmlns='http://www.w3.org/2000/svg' version='1.1' x='0px' y='0px' viewBox='0 0 100 100'><g><g><g><path d='M34.7,75.3c1.8-4.4,4.8-7.9,7.4-11.8c2.9-4.3,5.6-8.8,8.5-13.1c3-4.4,6.5-8.4,9.8-12.6     c2.4-3.1,4.6-8.2,7.9-10.3c2.7-1.7,0.2-6.1-2.5-4.3c-3.6,2.3-5.2,6.1-7.6,9.4c-3.5,4.7-7.4,9-10.8,13.7     c-3.4,4.7-6.4,9.8-9.6,14.6c-2.9,4.3-5.9,8.2-7.9,13C28.7,76.9,33.5,78.2,34.7,75.3L34.7,75.3z' /></g></g><g><g><path d='M31.4,37.9c-1.8,3.3-2.7,8,0.8,10.6c3.3,2.3,6.5-0.6,8.4-3.1c2-2.6,3.9-5.9,1.4-8.9     c-2.7-3.2-7.3-3.7-9.7-0.1c-1.8,2.7,2.5,5.2,4.3,2.5c0.3-0.4,0.1-0.2,0-0.2c0.3,0,0.6,0.2,0.8,0.4c0.4,0.2,0.8,0.9,0.8,0.5     c0,0.9-1.2,2.2-1.7,2.9c-0.4,0.5-1,0.9-1.4,1.5c-0.5,0.6-0.4,0-0.1,0.5c-0.9-1.3-0.2-2.8,0.5-4C37.3,37.6,32.9,35,31.4,37.9     L31.4,37.9z' /></g></g><g><g><path d='M58.9,50.1c-1.4,2.5-1.8,5.7,0.4,7.8c2,1.8,5.1,1.6,7.2,0.1c2.6-1.9,4.2-5.3,3.6-8.5     c-0.4-2.4-2.3-4.7-4.9-4.8c-3.6-0.2-5.1,3.1-5.4,6.2c-0.1,1.3,1.2,2.5,2.5,2.5c1.5,0,2.4-1.1,2.5-2.5c0-0.3,0.2-0.9,0.2-1     c-0.1,0.3,0.3-0.6,0.1-0.2c-0.1,0.3,0.1-0.1,0.2-0.2c-0.6,0.4,0.4,0-0.4,0.2c0.4-0.1-0.4,0-0.1,0c0.4,0,0.1,0-0.1,0     c0.3,0.1,0.4,0,0,0c0.1,0,0.6,0.4,0.1,0c0.1,0,0.4,0.4,0.2,0.2c-0.2-0.3,0.1,0.2,0.1,0.2c0.3,0.6-0.1-0.5,0.1,0.2     c0,0.1,0.1,0.6,0.1,0.3c0-0.3,0,0.4,0,0.5c0,0.2,0.1-0.2,0,0.3c-0.1,0.3-0.1,0.6-0.3,0.8c-0.2,0.4-0.4,0.8-0.6,1.1     c0.1-0.1-0.3,0.3-0.3,0.4c-0.5,0.5,0.3-0.2-0.3,0.3c0,0-0.6,0.3-0.3,0.2c0.3-0.1-0.3,0.1-0.3,0.1c-0.7,0.2,0.5,0-0.1,0     c-0.1,0-0.1,0-0.2,0c0.3,0.1,0.4,0.1,0.1,0c-0.1,0-0.1,0-0.2,0c0.3,0.1,0.3,0.2,0.2,0.1c0-0.2-0.5,0,0,0c-0.4,0,0.3,0.2-0.1,0     c-0.3-0.2,0.1,0.2,0,0c-0.1-0.2,0-0.4,0,0c0-0.1,0.1-0.7,0-0.3c0.1-0.6,0.3-0.8,0.5-1.3C64.8,49.8,60.5,47.3,58.9,50.1L58.9,50.1     z' /></g></g></g></svg>

    <style jsx>{`
        .percentIcon {
          display: flex;
          flex-direction: row;
          z-index: 100000;
          position: absolute;
        }
        .percentNumber {
          font-size: 42px;
          padding-top: 20px;
          font-weight: bold;
          font-style: italic;
        }
        .percentSVG {
          width: 100px;
          height: 100px;
          padding-left: -10px;
        }
      `}</style>
  </div>
)

export default Percent