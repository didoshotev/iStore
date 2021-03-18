import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "./pages/home-page/home-page"
import LoginPage from "./pages/login-page/login-page"
import RegisterPage from "./pages/register-page/register-page"
import ProductPage from "./pages/product-page/product-page"

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/products' component={ProductPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Navigation
