import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'



const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const tokenFromLocalStorage = localStorage.getItem("decryptedResponse");
  const parsedToken = tokenFromLocalStorage
    ? JSON.parse(tokenFromLocalStorage)
    : null;

  // Check if a valid token exists in local storage
  const isValidToken =
    parsedToken &&
    parsedToken.data &&
    parsedToken.data.payload &&
    parsedToken.data.payload.token;

  useEffect(() => {
    if (isValidToken) {
      navigate('/dashboard/transactions')
    }
  }, [navigate, isValidToken]);

  if (!isValidToken) {
    // If no valid token is present, navigate to the login page
    // return <Navigate to="/" state={{ from: location }} replace />;
    navigate('/')
  }

  return (
    <>
      {children}
    </>
  );
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
}