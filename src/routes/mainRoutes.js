import CreatePage from "../pages/CreatePage.js";
import NotesPage from "../pages/NotesPage";
// import BookShopPage from "../pages/BookShopPage.js";

const mainRoutes = [
  {
    name: "Create",
    path: "/create",
    exact: true,
    component: CreatePage,
  },
  {
    name: "Notes",
    path: "/notes",
    exact: true,
    component: NotesPage,
  },
  // {
  //   name: "BookShop",
  //   path: "/bookshop",
  //   exact: true,
  //   component: BookShopPage,
  // },
];

export default mainRoutes;
