import React from 'react';
import { Modal } from "react-bootstrap";
import "./Login.css";
const Login = ({modalShow, setModalShow}) => {

  
    return (
      <>
        <Modal show={modalShow} onHide={() => setModalShow(false)}>
        
          <Modal.Body>
              <div className ="user-password">
                  <label htmlFor="">User Name</label>
                  <input id="userName" type="text" required/>
              </div>
              <div className ="user-password">
                  <label htmlFor="pass">password</label>
                  <input type="password" required/>
              </div>
          </Modal.Body>
    
            <button className="modal-btn" onClick={() => setModalShow(false)}>
              Loggin
            </button>
         
        </Modal>
      </>
    );
}
export default Login;