
import { useState } from 'react'
import './App.css'
import Categories from './Components/Categories/Categories'
import Destination from './Components/Destination/Destination'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Imagination from './Components/Imagination/Imagination'
import NewsLatter from './Components/NewsLatter/NewsLatter'
import Places from './Components/Places/Places'
import PopularTours from './Components/PopularTours/PopularTours'
import TypeCategories from './Components/TypeCategories/TypeCategories'
function App() {
  const [data , setData] = useState([]);

  const handleFilterData = (newData) =>{
    setData(newData);
  }

  return (
    <>
      <div className='bg-base-200 '>
        <Header></Header>
        <div className='bg-base-300 rounded-3xl shadow mx-auto  w-[97%]  '>
          <TypeCategories></TypeCategories>
          <Destination></Destination>
        </div>
        <Imagination></Imagination>
        <PopularTours></PopularTours>
        <div>
          <Categories handleFilterData={handleFilterData}></Categories>
          <Places data={data}></Places>
        </div>
        <NewsLatter></NewsLatter>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App
