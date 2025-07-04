import React, { useState,useEffect,useRef } from 'react';
import styles from './Register.module.css';
import { toast } from 'react-toastify';

const Register = () => {
 const shown = useRef(false);
   useEffect(()=>{
    if (!shown.current){
      toast.info("Welcome To Registeration  Page",{
          position:"top-center",
          autoClose: 2000,
      
      });
      shown.current=true;
    }
      },[])
  const [formData, setFormData] = useState({
    name: '',
    fname: '',
    email: '',
    phone: '',
    password: '',
    cpassword: '',
    gender: 'male',
    ageGroup: 'teen',
    program: 'cardio',
    pref: 'Trainer',
    profilePic: null,
  });
const [submittedData, setSubmittedData] = useState(null);
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'file' ? files[0] : e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    toast.success("Form Submitted Successfully!!")
    console.log('Form Data Submitted:', formData);

    setFormData({
        name: '',
    fname: '',
    email: '',
    phone: '',
    password: '',
    cpassword: '',
    gender: 'male',
    ageGroup: 'teen',
    program: 'cardio',
    pref: 'Trainer',
    profilePic: null,
    })
  };

  const onReset = () => {
    toast.success("Data Erased Successfully!!")
    setFormData({
      name: '',
      fname: '',
      email: '',
      phone: '',
      password: '',
      cpassword: '',
      gender: 'male',
      ageGroup: 'teen',
      program: 'cardio',
      pref: 'Trainer',
      profilePic: null,
    });
  };

  return (
    <div className={styles.forms1}>
      <form onSubmit={onSubmit} onReset={onReset}>
        <fieldset>
          <legend>
            <h4>Registration form of Muscle Hub</h4>
          </legend>

          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={onChange} placeholder="Enter your Name" required />

          <br /><br />

          <label htmlFor="fname">F-Name:</label>
          <input type="text" name="fname" value={formData.fname} onChange={onChange} placeholder="Enter Your F-name" />

          <br /><br />

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={onChange} placeholder="Enter your Email" required />

          <br /><br />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={onChange} placeholder="Enter your Phone Number" />

          <br /><br />

          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={formData.password} onChange={onChange} placeholder="Enter Your Password" required />

          <br /><br />

          <label htmlFor="cpassword">Confirm Password:</label>
          <input type="password" name="cpassword" value={formData.cpassword} onChange={onChange} placeholder="Confirm Password" required />

          <br /><br />

          <label>Gender:</label>
          <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={onChange} /> Male
          <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={onChange} /> Female

          <br /><br />

          <label htmlFor="ageGroup">Age Group:</label>
          <select name="ageGroup" value={formData.ageGroup} onChange={onChange}>
            <option value="teen">Teens</option>
            <option value="adults">Adults</option>
            <option value="aged">Aged</option>
          </select>

          <br /><br />

          <label htmlFor="program">Select Program:</label>
          <select name="program" value={formData.program} onChange={onChange}>
            <option value="cardio">Cardio</option>
            <option value="yoga">Yoga</option>
            <option value="weightlifting">Weightlifting</option>
            <option value="powerlifting">Power-Lifting</option>
          </select>

          <br /><br />

          <label>Workout Preferences:</label>
          <input type="radio" name="pref" value="Trainer" checked={formData.pref === 'Trainer'} onChange={onChange} /> Trainer
          <input type="radio" name="pref" value="Without-Trainer" checked={formData.pref === 'Without-Trainer'} onChange={onChange} /> Without Trainer

          <br /><br />

          <label htmlFor="profilePic">Upload Profile Picture:</label>
          <input type="file" name="profilePic" accept="image/*" onChange={onChange} />

          <br /><br />
<div className={styles.button1}>
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
