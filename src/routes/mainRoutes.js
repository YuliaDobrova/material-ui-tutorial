import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';
import CreatePage from '../pages/CreatePage.js';
import NotesPage from '../pages/NotesPage';

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
];

export default mainRoutes;
