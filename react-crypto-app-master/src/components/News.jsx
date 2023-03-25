import React, { useEffect, useState } from 'react'
import { BounceLoader } from 'react-spinners';
const News = () => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
         fetch(`https://newsapi.org/v2/everything?domains=ambcrypto.com,coindesk.com,cointelegraph.com,bitcoinist.com&language=en&apiKey=98e5e3d358cc4046a110612b1762c2f8&pageSize=20`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setNews(result.articles)
                setLoading(false)
            })
    },[])
    return (
        <>
        <h1 className='text-2xl my-4 text-center font-bold '>News</h1>
        <div className='mx-10 flex flex-wrap justify-center items-center gap-16 mt-20'>
            
            

            {news.map((articles) => {
                
                    if (loading===true) {
                        return(<BounceLoader></BounceLoader>)
                    }else{
                        return (
                            <>
                                <div key={articles.url} className="w-[20rem] overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl my-8">
                                    <img src={articles.urlToImage==="" ? "https://via.placeholder.com/400":articles.urlToImage} alt={articles.title} className="h-auto w-full" />
                                    <div className="p-5">
        
                                        <p className="text-medium mb-5 text-gray-700">{articles.title}</p>
        
                                        <a href={articles.url} target="_blank" rel="noreferrer" >
                                        <button className="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">Read More</button>
                                        </a>
                                        
                                    </div>
                                </div>
                                </>
                        )
                    }
                
                
            })}
            
        </div>
        </>
    )
}

export default News