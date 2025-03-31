
import './App.css'
import Destination from './Components/Destination/Destination'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import TypeCategories from './Components/TypeCategories/TypeCategories'

function App() {

  return (
    <>
      <div className='relative top-0 z-40 '>
        <Header></Header>
        <div className='bg-white rounded-3xl shadow-2xl  w-[97%] absolute left-1/2 transform -translate-x-1/2 top-9/12 z-90 '>
          <TypeCategories></TypeCategories>
          <Destination></Destination>
        </div>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App
