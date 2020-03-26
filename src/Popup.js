import React from "react";
import { useContext } from "react";
import {Context} from "./Context/GamesContext";
import { Modal } from "react-bootstrap";

  const Popup = (props) => {

    const {resetGames} = useContext(Context);
    const  {show,setShow} = useContext(Context)
    const handleClose = () => setShow(false);
   // const handleShow = () => setShow(true);

    return( 
        <div className="">

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body style={{margin: "20px auto 0 auto",
    fontWeight: "bold",
    textTransform: "capitalize"}}>there is no such a game</Modal.Body>
       
          <button className="assessment-btn" onClick={resetGames} style={{margin:"50px auto 25px auto", border: "none"}}>start over</button>
        
      </Modal>
        </div>
    )
  }
export default Popup ;