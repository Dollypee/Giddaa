import { useEffect, useState } from "react";
import NavMenu from "../../components/landingpage/NavMenu"
import {  useAdminLoginMutation } from "../../redux/services/admin.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/Auth.slice";
import { MdDataUsage } from "react-icons/md";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [loginUser, {data: loginData, isLoading, isSuccess: isLoginSuccess, error: loginError }] = useAdminLoginMutation()



  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (input.email && input.password) {
      if (isEmailValid) {
        await loginUser(input)
      } else {
        toast.error('Enter a valid email address')
      }
    } else {
      toast.error('Kindly fill in all fields')
    }
  }
    

  useEffect(() => {
    if (isLoginSuccess) {
      toast.success('Signed in successfully');
      dispatch(setUser({ token: loginData?.value?.value?.token, user: loginData?.value?.value?.user }));
      navigate('/admin/transactions');
    } else {
      toast.error(loginError?.data?.value?.message)
    }
  }, [navigate, isLoginSuccess, loginData, dispatch, loginError])

  return (
    <div>
      <NavMenu />

      <div className="flex justify-center items-center giddaa-bg-light-accent-green h-[91vh]">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h2 className="text-center text-2xl font-bold mb-8">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={input.email}
                onChange={(e) => {
                  const emailValue = e.target.value;
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  setIsEmailValid(emailRegex.test(emailValue));
                  setInput({ ...input, email: emailValue });
                }}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={input.password}
                onChange={(e)=>setInput({...input, password: e.target.value})}
              />
            </div>
            <div className="flex items-center justify-center">
              
              <button
                className={`giddaa-bg-primary hover:bg-[#1f3d1e] text-white font-bold py-2 px-7 rounded focus:outline-none focus:shadow-outline ${isLoading && 'bg-black'}`}
                type="button"
                // disabled={!isEmailValid || isLoading}
                onClick={handleSubmit}
              >
                {!isLoading ? 'Login' : <MdDataUsage className='animate-spin p-4' style={{color: '#ffffff'}} color="#ffffff" />}
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Login