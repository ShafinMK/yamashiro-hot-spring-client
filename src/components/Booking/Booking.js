import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Booking.css';
import { useParams } from 'react-router-dom';
import PopUp from './PopUp';
import { Button } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
const axios = require('axios').default;

const Booking = () => {
    const { user } = useFirebase();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onChange' });
    const [countries, setCountries] = useState([]);
    const [service, setService] = useState({});
    const [popUp, setPopUp] = useState(false);
    const [formdata, setFormData] = useState({});
    const { serviceid } = useParams();
    const [date, setDate] = useState(new Date());
    const bookingDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;


    // country api calling 
    useEffect(() => {
        fetch('https://shafinmk.github.io/resources-api/countries.json')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    // getting service info 
    useEffect(() => {
        fetch(`https://murmuring-ravine-46664.herokuapp.com/services/${serviceid}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    const onChange = (date) => {
        setDate(date);
    }
    const onSubmit = data => {
        // console.log(data);
        // Object.assign(data, service);
        data.serviceid = service._id;
        data.serviceName= service.serviceName
        data.price = service.price;
        data.time = service.time;
        data.serviceThumb= service.serviceThumb;
        setFormData(data);
        // console.log(data);
        sendToServer(data);
    };

    const sendToServer = (data)=>{
        axios.post('https://murmuring-ravine-46664.herokuapp.com/booking', data)
            .then(function (response) {
                // console.log(response);
                if (response.data.insertedId) {
                    reset();
                    setPopUp(true);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='form-bg pb-5'>
            {/* banner */}
            <section className='booking-bg'>
                <div className='py-5'>
                    <div className="py-5"></div>
                    <h1 className='text-center text-light'>Booking</h1>

                    <div className="py-5"></div>
                </div>
            </section>
            <div className='container text-center shadow mt-5'>
                <div className="py-5">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <img src={service.serviceThumb} className='img-fluid' alt="" />

                            <h4 className='my-3'>{service.serviceName}</h4>
                            <h6 className='my-3'>${service.price}</h6>
                            <p className='light-black'>{service.intro}</p>
                            <h6><i className="fa-solid fa-stopwatch"></i> Service Time : {service.time}</h6>
                        </div>
                        <div className="col-12 col-md-7" >
                            <h1 className='mb-5'>Guest Details</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className='text-start'>
                                {/* first name and last name  */}
                                <div className="row">
                                    <h3>Guest Information</h3>
                                    <div className="col-12 col-lg-6 ">
                                        <div className='form-floating mb-3 '>
                                            <input type="text" className='form-control' placeholder='First Name' {...register("firstName", {
                                                required: 'First Name required',
                                                pattern: { value: /^[a-zA-Z ]{2,30}$/, message: 'Invalid Name' }
                                            })} />
                                            {errors.firstName && <span className='text-danger'>{errors.firstName.message}</span>}
                                            <label htmlFor="floatingInput">First Name</label>
                                        </div>

                                    </div>
                                    <div className="col-12 col-lg-6 ">
                                        <div className='form-floating mb-3 '>
                                            <input type="text" className='form-control' placeholder='Last Name' {...register("lastName", {
                                                required: 'Last Name required',
                                                pattern: { value: /^[a-zA-Z ]{2,30}$/, message: 'Invalid Name' }
                                            })} />
                                            {errors.lastName && <span className='text-danger'>{errors.lastName.message}</span>}
                                            <label htmlFor="floatingInput">Last Name</label>
                                        </div>

                                    </div>
                                </div>
                                {/* email and phone */}
                                <div className="row">
                                    <div className="col-12 col-lg-6 ">
                                        <div className='form-floating mb-3 '>
                                            <input type="email" className='form-control' placeholder='Email' value={user.email} readOnly {...register("email", {
                                                required: 'Email required',
                                                pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "Invalid Email" }
                                            })} />
                                            {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                                            <label htmlFor="floatingInput">Email</label>
                                        </div>

                                    </div>
                                    <div className="col-12 col-lg-6 ">
                                        <div className='form-floating mb-3 '>
                                            <input type="text" className='form-control' placeholder='Phone' {...register("phone", {
                                                required: 'Phone required', pattern: { value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, message: 'Invalid Number' },
                                                min:{value: 10, message:'10 digit number required'},
                                                // max:{value:11, message:'Not more than 11 digits'}
                                            })} />
                                            {errors.phone && <span className='text-danger'>{errors.phone.message}</span>}
                                            <label htmlFor="floatingInput">Phone</label>
                                        </div>

                                    </div>
                                </div>
                                {/* appointment date and guest number  */}
                                <div className="row">
                                    <div className="col-12 col-lg-6 ">
                                        <div className='form-floating '>
                                            <input type="text" className='form-control' readOnly value={bookingDate} {...register("bookingDate", { required: 'Booking Date Required' })} />
                                            <label htmlFor="floatingInput">Select your date below</label>
                                        </div>

                                        <Calendar onChange={onChange} minDate={new Date()} className='w-100 p-3 border rounded mb-3' value={date} />

                                    </div>
                                    <div className="col-12 col-lg-6 ">
                                        <div className='form-floating mb-3 '>
                                            <select className="form-select" id="floatingSelect" defaultValue={'1'} {...register("guestNumber", { required: 'Number of Guest required' })}>

                                                <option value="1" >One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                                <option value="4">Four</option>
                                                <option value="5">Five</option>
                                            </select>
                                            <label htmlFor="floatingSelect">Number of Guests</label>
                                        </div>

                                    </div>
                                </div>

                                {/* address  country*/}
                                <div className="row">
                                    <h3 className='my-2'>Address</h3>
                                    <div className="col-12 col-lg-6 ">
                                        <div className='form-floating mb-3 '>
                                            <select className="form-select" id="floatingSelect" defaultValue={'Bangladesh'} {...register("country", { required: 'Country required' })}>
                                                {/* <option selected>Bangladesh</option> */}
                                                {
                                                    countries.map(country => <option key={country.country_id} value={country.country_name}>{country.country_name}</option>)
                                                }
                                            </select>
                                            <label htmlFor="floatingSelect">Country</label>
                                        </div>

                                    </div>

                                </div>
                                {/* address 1 address 2  */}
                                <div className="row">
                                    <div className="col-12 col-lg-6 ">
                                        <div className='form-floating mb-3 '>
                                            <input type="text" className='form-control' placeholder='Address 1' {...register("address1", { required: 'Address 1 required' })} />
                                            {errors.address1 && <span className='text-danger'>{errors.address1.message}</span>}
                                            <label htmlFor="floatingInput">Address 1</label>
                                        </div>

                                    </div>
                                    <div className="col-12 col-lg-6 ">
                                        <div className='form-floating mb-3 '>
                                            <input type="text" className='form-control' placeholder='Address 2' {...register("address2", { required: 'Address 2 required' })} />
                                            {errors.address2 && <span className='text-danger'>{errors.address2.message}</span>}
                                            <label htmlFor="floatingInput">Address 2</label>
                                        </div>

                                    </div>
                                </div>
                                {/* service information  */}
                                {/* <div className="row">
                                    <h3>Service Information</h3>
                                    <div className="col-12 col-lg-6">
                                        <div className='form-floating mb-3'>
                                            <input type="text" className='form-control' placeholder='Service' value={service.serviceName || ''} {...register('service', { required: true })} readOnly />
                                            <label htmlFor="floatingInput">Service</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className='form-floating mb-3'>
                                            <input type="text" className='form-control' placeholder='Price' value={service.price || ''} {...register('price', { required: true })} readOnly />
                                            <label htmlFor="floatingInput">Price</label>
                                        </div>
                                    </div>
                                </div> */}
                                {/* payment information  */}
                                <div className="row">
                                    <h3 className='my-3'>Payment Information</h3>
                                    <div className="col-12 payment mb-3">
                                        <img src={require('../../images/icons/visa.png')} width='50' className='me-2' alt="" />
                                        <img src={require('../../images/icons/americanexpress.png')} width='50' className='me-2' alt="" />
                                        <img src={require('../../images/icons/ChinaUnionPay.png')} width='50' className='me-2' alt="" />
                                        <img src={require('../../images/icons/DinersClub.png')} width='50' className='me-2' alt="" />
                                        <img src={require('../../images/icons/Discover.png')} width='50' className='me-2' alt="" />
                                        <img src={require('../../images/icons/JCB.png')} width='50' className='me-2' alt="" />
                                        <img src={require('../../images/icons/MasterCard.png')} width='50' className='me-2' alt="" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-lg-6 ">
                                        {/* <div className='form-floating mb-3 '>
                                            <input type="text" className='form-control' placeholder='Card Name' {...register("cardname", { required: 'Card Name required' })} />
                                            {errors.cardname && <span className='text-danger'>{errors.cardname.message}</span>}
                                            <label htmlFor="floatingInput">Card Name</label>
                                        </div> */}
                                        <div className='form-floating mb-3 '>
                                            <select className="form-select" id="floatingSelect" defaultValue={'VISA'} {...register("cardname", { required: 'Card Name required' })}>

                                                <option value="VISA" >VISA</option>
                                                <option value="Mastercard">Mastercard</option>
                                                <option value="American Express">American Express</option>
                                                <option value="Discover">Discover</option>
                                                <option value="Union Pay">Union Pay</option>
                                                <option value="Diners Club">Diners Club</option>
                                                <option value="JCB">JCB</option>
                                            </select>
                                            <label htmlFor="floatingSelect">Card Name</label>
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-lg-4 ">
                                        <div className='form-floating mb-3 '>
                                            <input type="month" className='form-control' placeholder='Expiration Date'  {...register("cardExp", { required: 'Expiration Date required' })} />
                                            {errors.cardExp && <span className='text-danger'>{errors.cardExp.message}</span>}
                                            <label htmlFor="floatingInput">Expiration Date</label>
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-lg-6 ">
                                        <div className='form-floating mb-3 '>
                                            <input type="text" className='form-control' placeholder='Card Number' {...register("cardNo", {
                                                required: 'Card Number required',
                                                pattern: { value: /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/, message: 'Invalid Number' }
                                            })} />
                                            {errors.cardNo && <span className='text-danger'>{errors.cardNo.message}</span>}
                                            <label htmlFor="floatingInput">Card Number</label>
                                        </div>

                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button className='btn btn-warning px-5 py-3'>Confirm Booking</button>
                                </div>


                            </form>
                        </div>
                    </div>

                    {/* <Button variant="primary" onClick={() => setPopUp(true)} >
                        Launch vertically centered modal
                    </Button> */}
                    <PopUp show={popUp} onHide={() => setPopUp(false)} formdata={formdata}></PopUp>
                </div>
            </div>
        </div>
    );
};

export default Booking;