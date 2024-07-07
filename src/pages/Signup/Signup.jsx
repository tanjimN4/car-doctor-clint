import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {

    const {createUser}=useContext(AuthContext)

    const handleSignup =e=>{
        e.preventDefault()
        const form =e.target
        const email =form.email.value
        const name =form.name.value
        const password =form.password.value

        createUser(email,password)
        .then(result=>{
            console.log(result);
            updateProfile(result.user,{
                displayName:name,
            })
            toast.success('success')
        })
        .catch(error=>{
            console.error(error);
            toast.error('error')
        })
        
    }
    return (
        <div className="hero bg-base-200 min-h-[800px] mb-10 rounded-xl">
            <ToastContainer></ToastContainer>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center mr-12 lg:text-left w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignup} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#FF3811]" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center pb-2 text-xl font-extralight'>All Ready Have an Account ? <Link className='text-[#FF3811]' to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;