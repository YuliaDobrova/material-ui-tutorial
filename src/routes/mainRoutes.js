import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';
import CreatePage from '../pages/CreatePage.js';
import NotesPage from '../pages/NotesPage';
// import BookShopPage from "../pages/BookShopPage.js";

const mainRoutes = [
  {
    name: 'My Notes',
    icon: <SubjectOutlined color="secondary" />,
    path: '/notes',
    exact: true,
    component: NotesPage,
  },
  {
    name: 'Create Note',
    icon: <AddCircleOutlined color="secondary" />,
    path: '/create',
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
