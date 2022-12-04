import React from "react";
import s from './Modal.module.scss'
const Modal = ({children, visible, setVisible}) => {
    const rootClasses = [s.modal]
    if (visible === true){
      rootClasses.push(s.active)
    }
    return (
<div className={rootClasses.join(' ')} onClick={() => {setVisible(false)}}>
    <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
      <p>{children}</p>
      </div>
</div>
    )
}

export default Modal