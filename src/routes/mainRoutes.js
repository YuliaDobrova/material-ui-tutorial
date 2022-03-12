import NotesPage from "../pages/NotesPage";
import CreatePage from "../pages/CreatePage.js";
// import BookShopPage from "../pages/BookShopPage.js";

const mainRoutes = [
  {
    name: "Notes",
    path: "/notes",
    exact: true,
    component: NotesPage,
  },
  {
    name: "Create",
    path: "/create",
    exact: true,
    component: CreatePage,
  },
  // {
  //   name: "BookShop",
  //   path: "/bookshop",
  //   exact: true,
  //   component: BookShopPage,
  // },
];

export default mainRoutes;
