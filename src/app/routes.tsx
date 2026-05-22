import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/landing-page";
import { ShopperLogin } from "./pages/shopper-login";
import { CatalogPage } from "./pages/catalog-page";
import { ProductDetailPage } from "./pages/product-detail-page";
import { ARViewerPage } from "./pages/ar-viewer-page";
import { RoomScannerPage } from "./pages/room-scanner-page";
import { SavedPage } from "./pages/saved-page";
import { AccountPage } from "./pages/account-page";
import { StoreOwnerLogin } from "./pages/store-owner-login";
import { StoreOwnerDashboard } from "./pages/store-owner-dashboard";
import { AddProductPage } from "./pages/add-product-page";
import { MyProductsPage } from "./pages/my-products-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: ShopperLogin,
  },
  {
    path: "/catalog",
    Component: CatalogPage,
  },
  {
    path: "/product/:id",
    Component: ProductDetailPage,
  },
  {
    path: "/ar-viewer/:productId",
    Component: ARViewerPage,
  },
  {
    path: "/room-scanner",
    Component: RoomScannerPage,
  },
  {
    path: "/saved",
    Component: SavedPage,
  },
  {
    path: "/account",
    Component: AccountPage,
  },
  {
    path: "/store-owner/login",
    Component: StoreOwnerLogin,
  },
  {
    path: "/store-owner/dashboard",
    Component: StoreOwnerDashboard,
  },
  {
    path: "/store-owner/add-product",
    Component: AddProductPage,
  },
  {
    path: "/store-owner/products",
    Component: MyProductsPage,
  },
]);
