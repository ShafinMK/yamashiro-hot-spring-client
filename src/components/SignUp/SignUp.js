import React, { useState } from 'react';

import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const SignUp = () => {
    const [ verification , setVerification] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { signInwithGoogle, signUpwithEmailandPass } = useFirebase();
    const password = watch('password');
    const onSubmit = data => {
        console.log(data);
        if(data.password === data.retypePassword){
            signUpwithEmailandPass(data.email, data.password);
            setVerification(true);
        }
        else{
            data.retypePassword = 'Did not match'
        }
        

    };
    return (
        <div>
            <div>
                {/* banner */}
                <section className='login-bg'>
                    <div className='py-5'>
                        <div className="py-5"></div>
                        <h1 className='text-center text-light'>Sign Up</h1>

                        <div className="py-5"></div>
                    </div>
                </section>
                <div className="container my-5">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 col-lg-6">
                            <div className='text-center'>
                                
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-3">
                                        <input type='email' className='form-control' placeholder='Email' {...register("email", { required: "Email address required" })} />
                                        {/* errors will return when field validation fails  */}
                                        {errors.email && <span>{errors.email.message}</span>}
                                    </div>
                                    <div className="mb-3">
                                        <input type='password' className='form-control' placeholder='Password' {...register("password", { required: "Password is required", minLength:{value:6, message:'Minimum 6 character required'} })} />
                                        {/* errors will return when field validation fails  */}
                                        {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                                    </div>
                                    <div className="mb-3">
                                        <input type='password' className='form-control' placeholder='Re-type Password' {...register("retypePassword", { required: "Re-type your password",  minLength:{value:6, message:'Minimum 6 character required'}, 
                                        validate:(value)=> value === password || 'Password did not match'
                                        })} />
                                        {/* errors will return when field validation fails  */}
                                        {errors.retypePassword && <span className='text-danger'>{errors.retypePassword.message}</span>}
                                    </div>
                                    <div className="mb-3">
                                        <button className='btn btn-primary px-4 py-2'>Sign Up</button>
                                    </div>
                                </form>
                                {/* setting verificatio sent text  */}
                                {
                                    verification?<p>Verification Email Sent. <a href="https://mail.google.com/"  target="_blank">Click here</a>
                                    <br />
                                    <span className='text-danger'>(Check your spam folder if not found)</span></p>:""
                                }
                                <button onClick={signInwithGoogle} className='btn btn-light border my-5'>Sign in with Google</button>
                                <br />
                                <Link to='/login'>Already have an account? Log in now!</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;