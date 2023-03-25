import React, { useEffect, useState } from 'react'
import { BounceLoader } from 'react-spinners';
const Price=()=> {
  const [currency, setCurrency] = useState('usd')
  const [cryptoData, setCryptoData] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
     fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      .then(res => res.json())
      .then(data => {
        setCryptoData(data)
        setLoading(false)
      })

  }, [currency])



  const selectHandler = (e) => {
    e.target.value === 'usd' ? setCurrency('usd') : setCurrency('inr')
  }

  return (
    <>
      <div className='flex justify-end items-center mx-8 my-8'>
        <select name="currency" id="currency" onClick={selectHandler} className="border-4 px-2 py-1 border-t-black border-r-black border-l-[#FF9900] border-b-[#FF9900] rounded-sm shadow-2xl font-bold focus:outline-none hover:cursor-pointer">
          <option value="usd" className='font-bold font-mono hover:cursor-pointer'>USD</option>
          <option value="inr" className='font-bold font-mono hover:cursor-pointer'>INR</option>
        </select>
      </div>
      <div className='flex flex-col justify-center items-center mx-8 cursor-default'>
        <div className='flex flex-row justify-between items-center w-[calc(100%_-_5rem)] text-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-4 rounded-lg top-0 sticky -m-[1px]'>
          <div className='w-[25%]'>
            <h2 className='font-medium text-left mx-8'>Coin</h2>
          </div>
          <div className='w-[20%]'>
            <h2 className='font-medium text-right'>Current Price</h2>
          </div>
          <div className='w-[20%]'>
            <h2 className='font-medium text-right'>24hr High</h2>
          </div>
          <div className='w-[20%]'>
            <h2 className='font-medium text-right'>24hr Low</h2>
          </div>
          <div className='w-0 sm:w-[15%] hidden sm:block'>
            <h2 className='font-medium text-right'>24hr %</h2>
          </div>
        </div>
        {cryptoData.map((crypto) => {
          if (loading === true) {
            return (<BounceLoader/>)
          } else {


            return (

              <div className='flex flex-row justify-between items-center w-[calc(100%_-_5rem)] my-4 shadow-xl shadow-slate-200 rounded-xl py-4 px-4 hover:cursor-pointer' key={crypto.symbol}>
                <div className='flex justify-start items-center space-x-4 w-[25%]'>
                  <img src={crypto.image} alt={`${crypto.name}-logo`} className="w-12 rounded-full" />
                  <p className='font-medium text-ellipsis'>{crypto.name}</p>
                </div>
                <div className='w-[20%]'>
                  <p className='text-right font-medium'><span className='font-bold'>{currency === 'usd' ? '$ ' : '₹ '}</span>{crypto.current_price.toFixed(2)}</p>
                </div>
                <div className='w-[20%]'>
                  <p className='text-right font-medium'><span className='font-bold'>{currency === 'usd' ? '$ ' : '₹ '}</span>{crypto.high_24h.toFixed(2)}</p>
                </div>
                <div className='w-[20%]'>
                  <p className='text-right font-medium'><span className='font-bold'>{currency === 'usd' ? '$ ' : '₹ '}</span>{crypto.low_24h.toFixed(2)}</p>
                </div>
                <div className='w-0 sm:w-[15%] hidden sm:block'>
                  {crypto.price_change_percentage_24h.toFixed(2) < 0 &&

                    <p className='text-right text-red-700 font-bold '>{crypto.price_change_percentage_24h.toFixed(2)}%</p>
                  }
                  {crypto.price_change_percentage_24h.toFixed(2) >= 0 &&

                    <p className='text-right text-green-700 font-bold'>{crypto.price_change_percentage_24h.toFixed(2)}%</p>
                  }
                </div>
              </div>
            )
          }
        })}
      </div>
    </>
  )
}

export default Price