import Navbar from './Navbar'
import Hero from './Hero'
import Card from './card'
import data from './data'

import './App.css'

function App() {

  const Data1 = data.map(element=>{
   
   
    return (
    <Card key={element.id} element ={element}  />
  )
  })

 

  return (
    <>
    <div className='wrapper'>
     <Navbar />
     <Hero />
     <section className='cards-list'> {Data1}</section>
    
    </div>
    </>
  )
}

export default App
