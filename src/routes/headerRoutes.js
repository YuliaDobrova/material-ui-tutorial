import NotesPage from "../pages/NotesPage";
import CreatePage from "../pages/CreatePage";
// import BookShopPage from "../pages/BookShopPage";

const headerRoutes = [
  { name: "Notes", path: "/notes", exact: true, component: <NotesPage /> },
  { name: "Create", path: "/create", exact: true, component: <CreatePage /> },
  // {
  //   name: "BookShop",
  //   path: "/bookshop",
  //   exact: true,
  //   component: <BookShopPage />,
  // },
];
export default headerRoutes;
