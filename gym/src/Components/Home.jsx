import React from 'react';
import styles from './home.module.css';
import anush from '../assets/pexels-anush-1229356.jpg';
import sl from '../assets/pexels-823sl-2294361.jpg';
import victor from '../assets/pexels-victorfreitas-841130.jpg';
import zakaria from '../assets/pexels-zakaria-2827392.jpg';
import audio from '../assets/gym-130845.mp3'
import { useEffect,useRef } from 'react';
import { toast } from 'react-toastify';

const Home = () => {
 const shown = useRef(false);
   useEffect(()=>{
    if (!shown.current){
      toast.info("Welcome To Home  Page",{
          position:"top-center",
          autoClose: 2000,
      
      });
      shown.current=true;
    }
      },[])
    return (
        <div>
            <div className={styles.section}>
                <h2>Welcome to Muscle Hub</h2>
                <p>
                    At <b>Muscle Hub</b>, we are committed to helping you reach your fitness goals. Whether you're a
                    beginner or a seasoned athlete, we provide tailored training programs for every fitness level.
                    From strength training to cardio workouts, our expert trainers guide you every step of the way.
                    Join us to become stronger, healthier, and more confident, one workout at a time.
                </p>
            </div>

            <div className={styles.section}>
                <h2>What is Fitness?</h2>
                <p>
                    <b>Fitness</b> is a holistic approach to health that encompasses strength, endurance, flexibility, and body composition. At
                    <b> Muscle Hub</b>, we understand that fitness requires a balanced combination of exercise and nutrition.
                    Our specialized programs are designed to help you achieve a state of well-being, whether you're looking to build muscle, lose
                    weight, or simply feel more energized and confident.
                </p>
                <img className={styles.image} src={anush} alt="Fitness" />
            </div>

            <div className={styles.section}>
                <h2>Benefits of Training at Muscle Hub</h2>
                <p>Regular exercise at <b>Muscle Hub</b> offers numerous health benefits:</p>
                <ul className={styles.benefitsList}>
                    <li><b>Improved cardiovascular health</b> - Our cardio-focused programs strengthen your heart and reduce the risk of heart disease.</li>
                    <li><b>Increased strength and endurance</b> - Build muscle and stamina with our strength training sessions.</li>
                    <li><b>Enhanced mental health</b> - Physical activity at Muscle Hub boosts mood, reduces stress, and improves overall well-being.</li>
                    <li><b>Weight management</b> - Our personalized training regimens help you burn fat and maintain a healthy weight.</li>
                    <li><b>Better flexibility and mobility</b> - Our stretching and mobility programs improve your range of motion and reduce the risk of injury.</li>
                </ul>
            </div>

            <div className={styles.section}>
                <h3>Images of Fitness at Muscle Hub</h3>
                <img className={styles.image} src={sl} alt="Fitness Image 1" />
                <img className={styles.image} src={victor} alt="Fitness Image 2" />
                <img className={styles.image} src={zakaria} alt="Fitness Image 3" />
            </div>

            <div className={styles.ytvideo}>
                <h3>Workout Tutorial at Muscle Hub</h3>
                <hr />
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/iMqj2R62CO8?si=gw3GOSfc6UQkpBe-"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>

            <div className={styles.music}>
                <h3>Music for Your Workout</h3>
                <audio controls>
                    <source src={audio} type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>
                <hr />
            </div>
        </div>
    );
};

export default Home;
