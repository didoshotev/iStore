import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "./pages/home-page/home-page"
import LoginPage from "./pages/login-page/login-page"
import RegisterPage from "./pages/register-page/register-page"

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Navigation
