import './App.css'
import './components/FoodBox.css'

import FoodBox from './components/FoodBox'
import Foods from './foods'

function App() {
  return (
    <div className="App">
      <div className="heading">Pro-Nutritions</div>
      <h3>Search</h3>

      <FoodBox food={Foods} />

      {/* <FoodBox name="Orange" calories="200"></FoodBox>
        <FoodBox name="Grapes" calories="300"></FoodBox> */}
      <div className="rightdisplay"></div>
    </div>
  )
}

export default App
