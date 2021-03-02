import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
   const { minutes,seconds,hasFinished,isActive,resetCountdown,startCountdown } = useContext(CountdownContext);

   const [minuteL, minuteR] = String(minutes).padStart(2, '0').split('');
   const [secondL, secondR] = String(seconds).padStart(2, '0').split('');

   return (
      <div>
         <div className={styles.countdownContainer}>
            <div>
               <span>{minuteL}</span>
               <span>{minuteR}</span>
            </div>
            <span>:</span>
            <div>
               <span>{secondL}</span>
               <span>{secondR}</span>
            </div>
         </div>

         { hasFinished ? (
            <button
               disabled
               className={styles.countdownButton}
            >
               Ciclo encerrado
            </button>
         ) : (
            <>
               { isActive ? (
                  <button
                     className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                     type="button"
                     onClick={resetCountdown}
                  >
                     Abandonar ciclo
                  </button>
               ) : (
                  <button
                     className={styles.countdownButton}
                     type="button"
                     onClick={startCountdown}
                  >
                     Iniciar um ciclo
                  </button>
               )}
            </>
         )}
      </div>
   );
}