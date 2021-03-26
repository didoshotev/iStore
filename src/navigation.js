import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "./pages/home-page/home-page"
import LoginPage from "./pages/login-page/login-page"
import RegisterPage from "./pages/register-page/register-page"
import ProductPage from "./pages/product-page/product-page"
import ProductNavWrapper from "./components/product-nav-wrapper/product-nav-wrapper"
import { Component } from "react"
import UserContext from "./Context"

class Navigation extends Component {

  static contextType = UserContext

  render() {
    const { loggedIn } = this.context

    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <ProductNavWrapper>
            <Route path='/products' component={ProductPage} />
            <Route path='/mac' component={ProductPage} />
            <Route path='/iphone' component={ProductPage} />
            <Route path='/ipad' component={ProductPage} />
          </ProductNavWrapper>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Navigation
