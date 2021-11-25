import {Route, Switch, BrowserRouter} from "react-router-dom";
import Home from "./Backend/Admin/Component/Home/Home";

function AdminRoute() {
  return (
    <>
    <BrowserRouter>

      <Switch>
       
      <Route  path='/Admin' component={Home} />
        
      </Switch>

    </BrowserRouter>
    </>
  );
} 

export default AdminRoute;
