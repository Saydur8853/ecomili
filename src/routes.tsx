import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Loading from './components/spinners/loading';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import ViewNews from './pages/news/ViewNews';

const NotFound = lazy(() => import('./pages/errors/NotFound'));
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const ManageCategory = lazy(() => import('./pages/categories/ManageCategory'));
const AddNews = lazy(() => import('./pages/news/AddNews'));
const ManageInfobite = lazy(() => import('./pages/infobites/ManageInfobite'));
const ManageUser = lazy(() => import('./pages/users/ManageUser'));
const ManageArchievedNews = lazy(() => import('./pages/news/ManageArchievedNews'));
const ProfilePage = lazy(() => import('./pages/profile/ProfilePage'));
const ProfileSettings = lazy(() => import('./pages/profile/ProfileSettings'));
const ManageRoles = lazy(() => import('./pages/settings/ManageRoles'));
const ManageNews = lazy(() => import('./pages/news/ManageNews'));
const EditNews = lazy(() => import('./pages/news/EditNews'));
const CronSettings = lazy(() => import('./pages/settings/CronSettings'));
const ManageNewsComments = lazy(() => import('./pages/news/ManageNewsComments'));


const Router = () => {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Suspense fallback={<Loading size={50} minHeight="70vh" />}><Dashboard /></Suspense> },
        { path: '*', element: <NotFound /> },
      ],
    },
    {
      path: '/categories',
      element: <DashboardLayout />,
      children: [
        { path: 'manage', element: <Suspense fallback={<Loading size={50} minHeight="70vh" />}><ManageCategory /></Suspense> },
        { path: '*', element: <NotFound /> },
      ],
    },
    {
      path: '/news',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Navigate to="/news/manage" /> },
        { path: 'manage', element: <Suspense fallback={<Loading size={50} minHeight="70vh" />}><ManageNews /></Suspense> },
        { path: 'add-news', element: <Suspense fallback={<Loading size={50} minHeight="70vh" />}><AddNews /></Suspense> },
        { path: 'comments', element: <Suspense fallback={<Loading size={50} minHeight="70vh" />}><ManageNewsComments /></Suspense> },
        { path: 'edit-news/:id', element: <Suspense fallback={<Loading size={50} minHeight="70vh" />}><EditNews /></Suspense> },
        { path: 'view-news/:id', element: <Suspense fallback={<Loading size={50} minHeight="70vh" />}><ViewNews /></Suspense> },
        { path: 'archieved-news', element: <Suspense fallback={<Loading size={50} minHeight="70vh" />}><ManageArchievedNews /></Suspense> },
        { path: '*', element: <NotFound /> },
      ],
    },
    {
      path: '/infobites',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Navigate to="/infobites/manage" /> },
        { path: 'manage', element: <Suspense fallback={<Loading size={50} minHeight="70vh" />}><ManageInfobite /></Suspense> },
        { path: '*', element: <NotFound /> },
      ],
    },
    {
      path: '/users',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Navigate to="/users/manage" /> },
        { path: 'manage', element: <Suspense fallback={<Loading size={50} minHeight="70vh" />}><ManageUser /></Suspense> },
        { path: '*', element: <NotFound /> },
      ],
    },
    {
      path: '/settings',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Navigate to="/settings/cron-settings" /> },
        { path: 'cron-settings', element: <Suspense fallback={<Loading size={50} minHeight="70vh" />}><CronSettings /></Suspense> },
        { path: 'roles/manage', element: <Suspense fallback={<Loading size={50} minHeight="70vh" />}><ManageRoles /></Suspense> },
      ],
    },
    {
      path: '/profile',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Suspense fallback={<Loading size={50} minHeight="70vh" />}><ProfilePage /></Suspense> },
        { path: 'settings', element: <Suspense fallback={<Loading size={50} minHeight="70vh" />}><ProfileSettings /></Suspense> },
        { path: '*', element: <NotFound /> },
      ],
    },
    {
      path: "/", element: <Navigate to="/auth/login" />
    },
    {
      path: "/auth/login",
      element: <Login />
    },
    {
      path: "/auth/forgot-password",
      element: <ForgotPassword />
    },
    {
      path: "*",
      element: <Suspense fallback={<Loading size={50} minHeight="70vh" />}><NotFound minHeight='100vh' /></Suspense>
    }
  ]);


  return routes;
}


export default Router;