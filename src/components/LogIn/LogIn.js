import React from 'react';
import './LogIn.css';
import { useForm } from "react-hook-form";
import useFirebase from '../../hooks/useFirebase';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInwithGoogle, signInWithEmailandPass} = useFirebase();
    const onSubmit = data => {
        console.log(data);
        signInWithEmailandPass(data.email, data.password);
    };
    return (
        <div>
            {/* banner */}
            <section className='login-bg'>
                <div className='py-5'>
                    <div className="py-5"></div>
                    <h1 className='text-center text-light'>Log In</h1>
                    
                    <div className="py-5"></div>
                </div>
            </section>
            <div className="container my-5">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-lg-6">
                        <div className='text-center'>
                            
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <input type='email' className='form-control' placeholder='Email' {...register("email", { required: true })} />
                                    {/* errors will return when field validation fails  */}
                                    {errors.email && <span>This field is required</span>}
                                </div>
                                <div className="mb-3">
                                <input type='password' className='form-control' placeholder='Password' {...register("password", { required: true })} />
                                    {/* errors will return when field validation fails  */}
                                    {errors.password && <span>This field is required</span>}
                                </div>
                                <div className="mb-3">
                                    <button className='btn btn-primary px-4 py-2'>Log In</button>
                                </div>
                            </form>
                            <button onClick={signInwithGoogle} className='btn btn-light border my-5'>Sign in with Google</button>
                            <br />
                            <Link to='/signup'>Don't have an account? Sign Up now</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default LogIn;