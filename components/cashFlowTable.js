import React from 'react'
import '../static/styles/main.scss'

// TODO - pull from API
const data = [
  {
    '_id': '89ab0ca0-02fb-4e98-ae15-fe1b5f0ebaca',
    'type': 'in',
    'name': 'Kiya Berger',
    'amount': '1,000',
    'date': '2019-03-24'
  },
  {
    '_id': 'c7fe81c1-db41-44ae-9aef-20d6c338216c',
    'type': 'in',
    'name': 'Junaid Church',
    'amount': '200',
    'date': '2019-03-20'
  },
  {
    '_id': 'fcd34e68-5f9d-424f-9de2-c02b6a0e51d6',
    'type': 'out',
    'name': 'Kole Hawkins',
    'amount': '300',
    'date': '2019-02-01'
  },
  {
    '_id': '4d924e8b-884f-4385-a0cd-7acb6027e306',
    'type': 'in',
    'name': 'Anne-Marie North',
    'amount': '50.25',
    'date': '2018-12-25'
  },
  {
    '_id': '5d8445e7-dca5-4469-a5c8-547611298166',
    'type': 'out',
    'name': 'Deniz Whittle',
    'amount': '850',
    'date': '2018-10-30'
  },
  {
    '_id': 'a440966c-f4a1-40d0-8fae-4fba3dc1f07c',
    'type': 'out',
    'name': 'Jamelia Robin',
    'amount': '120',
    'date': '2018-09-08'
  }
].map((data) => {
  data.key = `cashflow-${data._id}`
  return data
})

const CashFlowTable = (props) => (
  <div className='cfTable--container'>
    <h2 className='cfTable--title'>
      Cash Flow
    </h2>
    <div className='cfTable--table'>
      <div className='cfTable--row'>
        <span className='cfTable--row--span'><strong>type</strong></span>
        <span className='cfTable--row--span'><strong>donor/recipient</strong></span>
        <span className='cfTable--row--span'><strong>amount</strong></span>
        <span className='cfTable--row--span'><strong>date</strong></span>
      </div>

      {
        data.map(({ key, type, name, amount, date }) => (
          <div className='cfTable--row'>
            <span className='cfTable--row--span'>{type}</span>
            <span className='cfTable--row--span'>{name}</span>
            <span className='cfTable--row--span'>{amount}</span>
            <span className='cfTable--row--span'>{date}</span>
          </div>
        ))
      }
    </div>
  </div>
)

export default CashFlowTable
