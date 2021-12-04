import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import SideMenu from "./NavBar/SideMenu";
// import { menuItems } from "./NavBar/SideMenu";
import '../AdminComponent/NavBar/NavAdmin.css'
import AdminDashboard from "./Home/AdminDashboard";
import LiveChatContent from "./Home/LiveChat/LiveChatContent";

function AdminRoute() {
const [inactive, setInactive] = useState(false);

return (
<div className="AdminRoute">
    <Router>
        <SideMenu onCollapse={(inactive)=> {
            console.log(inactive);
            setInactive(inactive);
            }}
            />

            <div className={`Admincontainer ${inactive ? "inactive" : "" }`}>

                {/* {menuItems.map((menu, index) => (
                <>
                    <Route key={menu.name} exact={menu.exact} path={menu.to}>
                        <h1>{menu.name}</h1>
                    </Route>
                    {menu.subMenus && menu.subMenus.length > 0
                    ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                        <h1>{subMenu.name}</h1>
                    </Route>
                    ))
                    : null}
                </>
                ))} */}
                <Switch>

                    <Route exact path='/admin' component={AdminDashboard} />
                    <Route exact path='/admin/live-chat' component={LiveChatContent} />

                </Switch>

            </div>
    </Router>
</div>
);
}

export default AdminRoute;