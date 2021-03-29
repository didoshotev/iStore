import { BrowserRouter, Switch, Route, withRouter, Link, Redirect } from "react-router-dom"
import HomePage from "./pages/home-page/home-page"
import LoginPage from "./pages/login-page/login-page"
import RegisterPage from "./pages/register-page/register-page"
import ProductsPage from "./pages/products-page/products-page"
import ProductNavWrapper from "./components/product-nav-wrapper/product-nav-wrapper"
import { Component } from "react"
import UserContext from "./Context"
import Logout from "./components/auth/logout"
import productInfoPage from "./pages/product-info-page/product-info-page"
import Create from "./components/admin/create/create"

class Navigation extends Component {

  constructor(props) {
    super(props)

  }
  static contextType = UserContext

  render() {
    const { loggedIn, role } = this.context
    console.log(this.context);
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path="/login" component={()=>!loggedIn ? <LoginPage/> : <Redirect to='/' />} />
          <Route path="/register" component={()=>!loggedIn ? <RegisterPage/> : <Redirect to='/' />} />
          <Route path="/logout" component={()=> loggedIn ? <Logout/> : <Redirect to='/login' />} />
          <Route path="/create" component={ Create } />
          
          <ProductNavWrapper>
            <Route path='/products' exact component={ProductsPage} />
            <Route path='/mac' component={ProductsPage} />
            <Route path='/iphone' component={ProductsPage} />
            <Route path='/ipad' component={ProductsPage} />
            <Route path='/products/:category/:id' component={productInfoPage} />
          </ProductNavWrapper>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Navigation
