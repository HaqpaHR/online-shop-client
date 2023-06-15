import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/consts";
import Admin from "./pages/Admin";
import Shop from "./pages/Shop";
import Authorization from "./pages/Authorization";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <Admin/>,
  },
  {
    path: BASKET_ROUTE,
    Component: <Basket/>,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: <Shop/>,
  },
  {
    path: LOGIN_ROUTE,
    Component: <Authorization/>,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Authorization/>,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    Component: <DevicePage/>,
  },
];
