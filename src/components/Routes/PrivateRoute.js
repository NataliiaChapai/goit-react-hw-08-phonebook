
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import authSelectors from '../../redux/auth/auth-selectors';

export default function PrivateRoute({
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    isLoggedIn ? <Outlet /> : <Navigate replace to={redirectTo} />
  );
}

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
};