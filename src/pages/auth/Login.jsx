import { useEffect, useState } from "react";
// import NavMenu from "../../components/landingpage/NavMenu"
import { useAdminLoginMutation } from "../../redux/services/admin.api";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/Auth.slice";
import { MdDataUsage } from "react-icons/md";
import { Logo } from "../../assets/images/images";
import Button from "../../components/button/Button";
import CustomTextField from "../../components/inputs/CustomTextField";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [loginUser, { data: loginData, isLoading, isSuccess: isLoginSuccess, error: loginError }] = useAdminLoginMutation()



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



    <div className="app-login-container flex justify-center items-center animated slideInUpTiny animation-duration-3 h-screen">
      <div className="app-login-main-content flex w-full flex-col-reverse md:flex-row">
        <div className="app-logo-content flex items-center justify-center">
          <Link className="logo-lg" to="/" title="Giddaa">
            <img
              src={Logo}
              alt="Giddaa Logo"
              title="Giddaa Logo"
            />
          </Link>
        </div>

        <div className="app-login-content">
          <div className="app-login-header mb-4">
            <h1 className="giddaa-heading-two-b-millik pt-2 giddaa-primary ">Admin Login</h1>
          </div>

          <div className="app-login-form">
            <form
              // onSubmit={(e) => {
              //   e.preventDefault();
              //   handleSubmit()
              // }}
            >
              <fieldset>

                <CustomTextField
                  label={'Email Address'}
                  variant={'outlined'}
                  value={input.email}
                  onChange={(e) => {
                    const emailValue = e.target.value;
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    setIsEmailValid(emailRegex.test(emailValue));
                    setInput({ ...input, email: e.target.value })
                  }}
                  type='text'
                />
                <CustomTextField
                  label={'Password'}
                  variant={'outlined'}
                  value={input.password}
                  onChange={(e) => setInput({ ...input, password: e.target.value })}
                  type='password'
                />
              </fieldset>
              <div className="mb-3 flex items-center justify-between">
                <Button
                  title={!isLoading ? <span className="text-center w-full">Sign In</span> : <MdDataUsage className="animate-spin" />}
                  className={`cursor-pointer giddaa-subtitle-three flex justify-center items-center w-full  font-bold border border-primary bg-primary text-white hover:bg-[#1f3d1e] rounded-md text-center p-2 disabled:bg-[rgba(206,217,224,0.5)] disabled:text-[#ccc]disabled:border-none disabled:text-primary`}
                  onClick={()=>handleSubmit()}
                  type="button"
                  disabled={!input.email || !input.password}
                  />

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login