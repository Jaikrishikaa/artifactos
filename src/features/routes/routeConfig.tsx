import App from '../../App'
import { Navigate } from 'react-router-dom'
import { LoginPage } from '../auth/LoginPage'

export const routeConfig = [
  { path: '/workspace', element: <App /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/', element: <Navigate to="/workspace?page=overview" replace /> },
  { path: '/dashboard', element: <Navigate to="/workspace?page=overview" replace /> },
  { path: '/projects', element: <Navigate to="/workspace?page=project" replace /> },
  { path: '/chat', element: <Navigate to="/workspace?page=chat" replace /> },
  { path: '/artifacts', element: <Navigate to="/workspace?page=artifact" replace /> },
  { path: '/notifications', element: <Navigate to="/workspace?page=inbox" replace /> },
  { path: '/settings', element: <Navigate to="/workspace?page=settings" replace /> },
  { path: '/profile', element: <Navigate to="/workspace?page=settings" replace /> },
  { path: '/assistant', element: <Navigate to="/workspace?page=chat" replace /> },
  { path: '/analytics', element: <Navigate to="/workspace?page=overview" replace /> },
  { path: '/knowledge-graph', element: <Navigate to="/workspace?page=project" replace /> },
  { path: '/search', element: <Navigate to="/workspace?page=overview" replace /> },
  { path: '*', element: <Navigate to="/workspace?page=overview" replace /> },
]
