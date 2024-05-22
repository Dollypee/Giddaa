import { useSelector } from "react-redux";

export const useUser = () => {
  const { token,userInfo: user } = useSelector((state) => state.auth);

  return {token, userInfo: user}
};