import React from "react"
import styles from "./styles.module.scss"
import email from '../../images/icon-email.png'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.links}>
             <img src={email} alt="email icon" />
          <p>
            <a href="mailto:carolinariveradesign@gmail.com">
              CarolinaRiveraDesign@gmail.com
            </a>
          </p>
        </div>
        <div className={styles.description}>
          <h3>"Miami Based Designer"</h3>
          <p>
            Background in architecture with professional experience in interiors
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
