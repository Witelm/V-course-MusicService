import { Navigate } from 'react-router-dom'

export const ProptectedRoute = ({
  children,
  redirectPath = '/reg',
  isAllowed,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />
  }

  return children
}
