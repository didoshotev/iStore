import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "./pages/home-page/home-page"

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Navigation
