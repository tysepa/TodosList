import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const[modalIsOpen, setModalIsOpen] = useState(false);
    function deleteHandler(){
        setModalIsOpen(true)
    }
    function closeModalHandler(){
      setModalIsOpen(false)
    }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <span className='spt'>Hello one</span>
      <div>
        <button className="btn " onClick ={deleteHandler}>Delete</button>
       <button className="btn btn--alr" >Complete</button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> }
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />} 
    </div>
  );
}

export default Todo;
