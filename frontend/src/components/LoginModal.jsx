// import React from 'react';
// import { Modal, Button } from 'react-bootstrap';

// const LoginModal = ({ show, onHide }) => {
//     return (
//         <Modal
//             show={show}
//             onHide={onHide}
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//         >
//             <Modal.Header closeButton style={{ backgroundColor: '#efefc5', color: 'black' }}>
//             </Modal.Header>
//             <Modal.Body style={{ backgroundColor: '#efefc5', color: 'black' }}>
//                 <style>
//                     {`
//             .custom-button {
//               background-color: black;
//               border-color: black;
//               color: #FAFAED;
//             }
//             .custom-button:hover {
//               background-color: #FAFAED;
//               color: black;
//             }
//           `}
//                 </style>
//                 <div className="p-4">
//                     <div className="d-flex flex-column align-items-center">
//                         <h4 className="mb-4" style={{ color: 'black' }}>You need to be logged in</h4>
//                         <Button className="custom-button mb-3">
//                             Log In
//                         </Button>
//                         <p style={{ color: 'black' }}>Don’t have an account? Register here!</p>
//                         <Button className="custom-button mb-3">
//                             Register
//                         </Button>
//                     </div>
//                 </div>
//             </Modal.Body>
//         </Modal>
//     );
// };

// export default LoginModal;


import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ show, onHide }) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login'); // Redirect to the login page
    };

    const handleRegister = () => {
        navigate('/register'); // Redirect to the register page
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton style={{ backgroundColor: '#efefc5', color: 'black' }}>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: '#efefc5', color: 'black' }}>
                <style>
                    {`
            .custom-button {
              background-color: black;
              border-color: black;
              color: #FAFAED;
            }
            .custom-button:hover {
              background-color: #FAFAED;
              color: black;
            }
          `}
                </style>
                <div className="p-4">
                    <div className="d-flex flex-column align-items-center">
                        <h4 className="mb-4" style={{ color: 'black' }}>You need to be logged in</h4>
                        <Button
                            className="custom-button mb-3"
                            onClick={handleLogin}
                        >
                            Log In
                        </Button>
                        <p style={{ color: 'black' }}>Don’t have an account? Register here!</p>
                        <Button
                            className="custom-button mb-3"
                            onClick={handleRegister}
                        >
                            Register
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default LoginModal;

