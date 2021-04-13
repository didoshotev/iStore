import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import HomePage from "./pages/home-page/home-page"
import LoginPage from "./pages/login-page/login-page"
import RegisterPage from "./pages/register-page/register-page"
import ProductsPage from "./pages/products-page/products-page"
import ProductNavWrapper from "./components/global/product-nav-wrapper/product-nav-wrapper"
import { Component } from "react"
import UserContext from "./Context"
import Logout from "./components/auth/logout"
import productInfoPage from "./pages/product-info-page/product-info-page"
import Create from "./components/admin/create/create"
import Edit from "./components/admin/edit/edit"
import CartPage from "./pages/cart-page/cart-page"
import GlobalErrorBoundary from "./GlobalErrorBoundary"
import NotFoundPage from "./pages/not-found-page/not-found-page"

class Navigation extends Component {

  constructor(props) {
    super(props)

  }
  static contextType = UserContext

  render() {
    const { loggedIn, role } = this.context
    return (
      <GlobalErrorBoundary>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path="/login" component={() => !loggedIn ? <LoginPage /> : <Redirect to='/' />} />
            <Route path="/register" component={() => !loggedIn ? <RegisterPage /> : <Redirect to='/' />} />
            <Route path="/logout" component={() => loggedIn ? <Logout /> : <Redirect to='/login' />} />
            <Route path="/create" component={() =>
              (loggedIn && role === "admin") ? <Create /> : <Redirect to='/'
              />} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/cart" component={() => loggedIn ? <CartPage /> : <Redirect to='/login' />} />
            <ProductNavWrapper>
              <Route path='/products' exact component={ProductsPage} />
              <Route path='/mac' component={ProductsPage} />
              <Route path='/iphone' component={ProductsPage} />
              <Route path='/ipad' component={ProductsPage} />
              <Route path='/products/:category/:id' component={productInfoPage} />
            </ProductNavWrapper>
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </GlobalErrorBoundary>
    )
  }
}

export default Navigation
