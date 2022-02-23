import React, { useRef, useEffect } from "react"
import styles from "./styles.module.scss"
import { gsap } from "gsap/all"

const Symbol = () => {
  const nameRef = useRef()
  const tween = useRef()
  const tween2 = useRef()
  const tween3 = useRef()
  const ellipse2Ref = useRef()
  const ellipse3Ref = useRef()
  const ellipse4Ref = useRef()

  useEffect(() => {
  
    tween.current = gsap.to([ellipse2Ref.current, ellipse3Ref.current], {
      x: 180,
    })
    tween2.current = gsap.to(ellipse4Ref.current, {
      x: -180,
    })
    tween3.current = gsap.to(nameRef.current, {
      delay: .5,
      autoAlpha: 1
    })
  }, [])

  const onMouseEnterHandler = () => {
    tween.current.play()
    tween2.current.play()
    tween3.current.play()
  }
  const onMouseLeaveHandler = () => {
    tween.current.reverse()
    tween2.current.reverse()
    tween3.current.reverse()
  }

  return (
    <>
        <div className={styles.svgContainer}>
          <div>

            <p onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}  ref={nameRef} className={styles.name}>Carolina Rivera</p>

            <svg onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}  width="700" height="400" viewBox="0 0 400 380" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={ellipse2Ref} d="M212 212C231.891 212 250.968 204.098 265.033 190.033C279.098 175.968 287 156.891 287 137C287 117.109 279.098 98.0322 265.033 83.967C250.968 69.9018 231.891 62 212 62L212 137L212 212Z" fill="#D5C0C0"/>
            <path ref={ellipse3Ref} d="M318.198 318.198C304.269 332.127 287.733 343.176 269.535 350.714C251.336 358.252 231.83 362.132 212.132 362.132L212.132 212.132L318.198 318.198Z" fill="#CAABAB"/>
            <path ref={ellipse4Ref} d="M212 362C192.302 362 172.796 358.12 154.597 350.582C136.399 343.044 119.863 331.995 105.934 318.066C92.0052 304.137 80.9563 287.601 73.4181 269.403C65.8799 251.204 62 231.698 62 212C62 192.302 65.8799 172.796 73.4181 154.597C80.9563 136.399 92.0052 119.863 105.934 105.934C119.863 92.0052 136.399 80.9563 154.597 73.4181C172.796 65.8799 192.302 62 212 62L212 212L212 362Z" fill="#948383"/>
            </svg>
          </div>
        </div>
    </>
  )
}

export default Symbol
