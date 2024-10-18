import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import uswdsLogo from '/uswds.jpg'
import emilyLogo from '/emily.jfif'
import './App.css'
import Accordion from './components/Accordion'

function App() {
  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
        <img src={uswdsLogo} className="logo" alt="USWDS logo" />
        <img src={emilyLogo} className="logo" alt="Emily logo" />
      </div>
      <h1>Vite + React + USWDS + Emily</h1>
      <Accordion title='header 1' id='a1'>
        <p>child 1</p>
      </Accordion>
      <Accordion title='header 2' id='a2'>
        <p>child 2</p>
      </Accordion>
    </>
  )
}

export default App
