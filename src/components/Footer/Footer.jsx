import React, { useState } from "react";
import Modal from "../UI/Modal";
import s from './Footer.module.scss'
const Footer = () => {
   const [visible, setVisible] = useState(false)
    return (
<footer className={s.footer}>
    <div className={s.footerContainer}>

    <div className={s.footerContainer_inner}>
    <div className={s.footerText}>
     <button className={s.authorButton} onClick={() => {setVisible(true)}}>About author</button>
    <Modal visible={visible} setVisible={setVisible}>✨App was created by Maxim Nikiforov.✨</Modal>
      </div>
      </div>
    </div>
  </footer>
    )
}

export default Footer