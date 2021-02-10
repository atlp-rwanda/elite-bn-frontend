import React ,{useState}from 'react';
import { useDispatch } from 'react-redux';
import Image from '../assets/image.png';
import { TextField } from './TextField';
import Navbar  from './Header/NavBar';
import 'toastify-js/src/toastify.css';
import Footer from './Footer/Footer';
import handle from '../store/actioncreators/handle';
import Social from './UI/socialSignin/socialSignin';
import DropMenu from './LandingPage/DropMenu';

export default function login({ history }) {
const dispatch = useDispatch();
 
  const [state,setState]=useState({email:'',password:''})
  const handleInput =(e) => {
        const value = e.target.value
        setState({
          ...state,
          [e.target.name]: value
        })
  }
  const handleSubmit = async (e) => {
  
    e.preventDefault();

    await handle(state,history,dispatch);  
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar toggle={toggle}/>
      <DropMenu isOpen={isOpen} toggle={toggle} />  
          <div className="px-12 py-4">
          <div className="flex justify-between  bg-white rounded-2xl shadow-xl">
            <div className="px-4 border border-black-100">
              <section>
                <h1 className="py-6 px-8 text-2xl text-gray-700">Welcome Back !</h1>
                <p className="text-sm px-8 py-6 pt-2">You  have  been registered  on Barefoot-nomad .Please login with your email and password</p>
              </section>
              <div>
              <section className="mt-10 ">
                <form onSubmit={handleSubmit}>
                  <div className="py-6">
                    <div className="shadow-md" >
                    <TextField  label="Email" name="email" id="Email" type="text" placeholder="Enter your email"  changeValue={handleInput}/>
                    </div>
                    <div className="shadow-md">
                    <TextField label="Password" id="Password" name="password" type="password" placeholder="Enter your password" changeValue={handleInput}/>
                    </div>
                  </div>
                  <div className="py-6 px-8">
                    <button id="submit-button" className="bg-indigo-600 text-white justify-center w-full h-8 rounded" type="submit">Login</button>
                  </div>
                  <div className="flex px-8 justify-end text-purple-600 py-6 text-sm hover:text-purple-700 hover:underline hover:cursor-pointer mb-6">
                    Forgot password ?
                  </div>
                  <div className="space-y-6">
                    <Social />
                  </div>
                </form>
              </section>
              </div>
            </div>
            <div className="shadow-2xl h-auto hidden md:block">
          <img src={Image} className=" h-screen block md:block justify-self-start sm:hidden " alt="" />
            </div>
          </div>
          </div>
      <Footer />
    </div>
  );
}
