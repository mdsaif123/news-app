import React, { useEffect, useState } from 'react'
import Card from './Card'
import logo from "../Components/logo.jpeg"

const Newsapp = () => {
    const [search, setSearch] = useState('sports')
    const [newsData, setNewsdata] = useState([])

    const api = "8c78f246d1c546af911d2f68578c87e0"

    const getdata = async (query) => {
        try {
            const resp = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${api}`)
            const jsonData = await resp.json()
            console.log(jsonData)
            setNewsdata(jsonData.articles)
        } catch (error) {
            console.error("Error fetching news:", error)
        }
    }

    const handleinput = (e) => {
        setSearch(e.target.value)
    }

    const handleCategoryClick = (category) => {
        setSearch(category)
        getdata(category)
    }
 // Fetch default news when the component mounts
 useEffect(() => {
    getdata('sports') // Replace 'trending' with any default category or keyword you prefer
}, [])
    return (
        <div>
            <div className="container-fluid mt-4">
                <nav>
                    <div>
                        <img className='logo-img' src={logo} alt="" />
                    </div>
                    <div>
                        <h3 className='trending-news'>Trending News <span className='badge bg-dark'> 24x7</span></h3>
                    </div>
                    <div className='search-box'>
                        <input type="text" onChange={handleinput} value={search} placeholder='Search...' />
                        <button onClick={() => getdata(search)}>Search</button>
                    </div>
                </nav>
                <hr />
            </div>

            <div className="container">
                <div className="btn-category text-center ">
                    <button className=' cat-button ' onClick={() => handleCategoryClick('sports')}>Sports</button>
                    <button className=' cat-button ' onClick={() => handleCategoryClick('business')}>Business</button>
                    <button className=' cat-button ' onClick={() => handleCategoryClick('education')}>Education</button>
                    <button className=' cat-button ' onClick={() => handleCategoryClick('entertainment')}>Entertainment</button>
                    <button className=' cat-button ' onClick={() => handleCategoryClick('politics')}>Politics</button>
                    <button className=' cat-button ' onClick={() => handleCategoryClick('technology')}>Technology</button>
                </div>
            </div>
            <hr />

            <div className="container">
                <Card data={newsData} />
            </div>
        </div>
    )
}

export default Newsapp
