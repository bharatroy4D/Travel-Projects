
import './App.css'
import Destination from './Components/Destination/Destination'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Imagination from './Components/Imagination/Imagination'
import TypeCategories from './Components/TypeCategories/TypeCategories'
function App() {

  return (
    <>
      <div className=' '>
        <Header></Header>
        <div className='bg-white rounded-3xl shadow-2xl mx-auto  w-[97%]  '>
          <TypeCategories></TypeCategories>
          <Destination></Destination>
        </div>
        <Imagination></Imagination>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App
