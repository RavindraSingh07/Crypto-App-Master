import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import '@splidejs/react-splide/css';
// Default theme
import '@splidejs/react-splide/css/sea-green';


const Carousel = () => {
    const [trending, setTrending] = useState([])
    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/search/trending`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTrending(data.coins)
            })
    }, [])
    return (
        <>
        
        <h1 className='text-2xl border-4 outline-dashed font-bold text-center py-2 mx-16 mt-16'>Top-7 trending coins on <a href="https://coingecko.com/" target="_blank" className='underline text-[#FF9900] px-2 py-1 '>CoinGecko</a> as searched by users in the last 24 hours</h1>
        <div className='flex justify-center items-center '>
            
        <Splide options={{
            perPage: 1,
            arrows: true,
            pagination: true,
            drag: "free",
            gap:'0rem',
            
            
            
          }
          } >
            {trending.map((crypto) => {
                return (
                    <SplideSlide className='flex flex-col justify-center items-center'>
                        <img src={crypto.item.large} alt={crypto.item.id} />
                        <p className='text-xl font-semibold uppercase'>{crypto.item.name}</p>
                    </SplideSlide>
                )
            })}
        </Splide>
        </div>
        </>
    )
}

export default Carousel