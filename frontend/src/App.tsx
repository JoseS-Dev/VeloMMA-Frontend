import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { routeConfig } from './routes/Routes'

function App() {
  return (
    <Router>
      <Routes>
          {routeConfig.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
          ))}
      </Routes>
    </Router>
  )
}

export default App
