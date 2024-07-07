import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const {signIN,signInPop}=useContext(AuthContext)


    const handleLogin = e=>{
        e.preventDefault()
        const from =new FormData(e.currentTarget)
        const email =from.get('email')
        const password =from.get('password')

        signIN(email,password)
        .then(result=>{
            toast.success('success')
            console.log(result);
            
        })
        .catch(error=>{
            console.error(error);
            toast.error('error')
        })
    }
    return (
        <div className="hero bg-base-200 min-h-[800px] mb-10 rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center mr-12 lg:text-left w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#FF3811]" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center pb-2 text-xl font-extralight'>New to Car Doctors ? <Link className='text-[#FF3811]' to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;