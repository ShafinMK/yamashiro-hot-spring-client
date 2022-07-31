import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PopUp = (props) => {

    const { firstName, lastName, bookingDate, serviceName } = props.formdata;
    const navigate = useNavigate();
    return (
        <div>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onExit={()=>navigate('/services')}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className='w-100'>
                        <h3 className='text-center steel-teal'>Booking Confirmed</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6">
                            <img src='https://i.ibb.co/gyJ9j4D/booking-Confirm.jpg' className='img-fluid' alt="" />
                            <div className='text-center'>
                                <h6><span className='steel-teal'>Service: </span><span className='light-black'>{serviceName}</span></h6>
                                <div>
                                    <p>
                                        <span className='steel-teal'>Guest Name:</span> <span className='light-black'>{firstName}</span> <span className='light-black'>{lastName}</span>
                                        <br></br>
                                        <span className='steel-teal'>Date:</span> <span className='light-black'>{bookingDate}</span>
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer> */}
            </Modal>
        </div>
    );
};

export default PopUp;