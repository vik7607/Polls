import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './AuthContext'
import Landing from './Landing'
import Dashboard from './Dashboard'
import Header from './Header'
import ProtectedRoute from './ProtectedRoute'
import Poll from './Poll'
const AuthContext = React.createContext()

const App = () => (
  <div>
    <Router>
     
        {/* <Header /> */}
        <Switch>
          {/* <ProtectedRoute path="/dashboard" component={Dashboard} /> */}
          <AuthProvider>
          <Route path="/" component={Landing} />
          <Route path="/poll" component={Poll} />
          </AuthProvider>
        </Switch>
   
    </Router>
  </div>
)


export default App;