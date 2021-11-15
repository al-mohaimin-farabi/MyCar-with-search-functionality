import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Button } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import UserOrder from "./UserOrder/UserOrder";
import AddReview from "./AddReview/AddReview";
import AdminRoute from "../Login/AdminRoute/AdminRoute";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import AddProduct from "./AddProduct/AddProduct";
import ManageAllOrders from "./ManageAllOrders/ManageAllOrders";
import ManageAllProducts from "./ManageAllProducts/ManageAllProducts";
const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin, user, logout } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="text-center">
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
        }}
        to={`${url}`}
      >
        <Button
          sx={{ mb: 1, mt: 4, width: "95%" }}
          variant="outlined"
          color="success"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-box"
            viewBox="0 0 16 16"
          >
            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
          </svg>
          &nbsp; DashBoard
        </Button>
      </NavLink>
      <NavLink
        style={{
          textTransform: "none",
          textDecoration: "none",
          color: "black",
        }}
        to="/home"
      >
        <Button sx={{ my: 1, width: "95%" }} variant="outlined" color="success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-arrow-left-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
          </svg>
          &nbsp; Home
        </Button>
      </NavLink>

      {!admin && (
        <div className="text-center mt-2">
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={`${url}/pay`}
          >
            <Button
              sx={{ my: 1, width: "95%" }}
              variant="outlined"
              color="success"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-cash-coin"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
                />
                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
              </svg>
              &nbsp; Pay
            </Button>
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={`${url}/myorders`}
          >
            <Button
              sx={{ my: 1, width: "95%" }}
              variant="outlined"
              color="success"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-cart-check-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
              </svg>
              &nbsp; My Orders
            </Button>
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={`${url}/review`}
          >
            <Button
              sx={{ my: 1, width: "95%" }}
              variant="outlined"
              color="success"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-hand-thumbs-up-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
              </svg>
              &nbsp; Review
            </Button>
          </NavLink>
        </div>
      )}
      {admin && (
        <div className="text-center mt-2">
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={`${url}/makeAdmin`}
          >
            <Button
              sx={{ my: 1, mb: 2, width: "95%" }}
              variant="outlined"
              color="success"
            >
              Make Admin
            </Button>
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={`${url}/addproduct`}
          >
            <Button
              sx={{ my: 1, mb: 2, width: "95%" }}
              variant="outlined"
              color="success"
            >
              Add Product
            </Button>
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={`${url}/manageallorder`}
          >
            <Button
              sx={{ my: 1, mb: 2, width: "95%" }}
              variant="outlined"
              color="success"
            >
              Manage All Order
            </Button>
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={`${url}/manageallproduct`}
          >
            <Button
              sx={{ my: 1, mb: 2, width: "95%" }}
              variant="outlined"
              color="success"
            >
              Manage All Product
            </Button>
          </NavLink>
        </div>
      )}
      <button
        onClick={logout}
        style={{ width: "95%" }}
        className="btn btn-outline-danger opacity-75 "
      >
        Logout
      </button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        color="success"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <img
              width="120"
              src="https://i.ibb.co/CpdRrYj/logo.png"
              className="img-fluid"
              alt=""
            />
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            {!admin && (
              <>
                <h5>
                  Dashboard for <strong>{user.displayName}</strong>
                </h5>
                <p className="card-text mt-4">
                  My cars provide you amazing dashboard where you can manage
                  your order.
                  <br /> The process of using it is very easy. Select option
                  from side bar and get started.
                </p>
              </>
            )}
            {admin && (
              <>
                <h5>
                  Welcome <strong>{user.displayName}</strong>
                </h5>
                <p className="card-text mt-4">
                  Your <strong>Admin</strong> DashBoard is Ready
                </p>
              </>
            )}
          </Route>
          <Route exact path={`${path}/pay`}>
            <h3>Payment method comming soon...</h3>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "75%" }}
              ></div>
            </div>
          </Route>
          <Route exact path={`${path}/myorders`}>
            <UserOrder></UserOrder>
          </Route>
          <Route exact path={`${path}/review`}>
            <AddReview></AddReview>
          </Route>
          <AdminRoute exact path={`${path}/addproduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute exact path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute exact path={`${path}/manageallorder`}>
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
          <AdminRoute exact path={`${path}/manageallproduct`}>
            <ManageAllProducts></ManageAllProducts>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
