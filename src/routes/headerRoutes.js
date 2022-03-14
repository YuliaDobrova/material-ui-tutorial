import CreatePage from '../pages/CreatePage';
import NotesPage from '../pages/NotesPage';

const headerRoutes = [
  { name: 'Notes', path: '/notes', exact: true, component: <NotesPage /> },
  { name: 'Create', path: '/create', exact: true, component: <CreatePage /> },
];
export default headerRoutes;
