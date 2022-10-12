import React from 'react';
import {Routes,Route} from 'react-router-dom' 
import AllAnimals from './components/GetAnimals';
import Home from './components/Home'
import NewAnimal from './components/NewAnimal';
function App(){
    return (
        <>  
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/animals" element={<AllAnimals />} />
                    <Route path="/animal" element={<NewAnimal />} />
                </Routes>
            
        </>
    )
}

export default App;