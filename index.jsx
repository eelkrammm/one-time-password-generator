
const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
const [time, setTime] = useState(0); 

useEffect(() => {

  if (time > 0) {
    const timeInterval = setTimeout(() => {
      setTime(count => count - 1);
    }, 1000);

    return () => clearTimeout(timeInterval);
  }
}, [time]);

const [isVisible, setIsVisible] = useState(false);
const [isActive, setIsActive] = useState(false);
const [otp, setOtp] = useState('');


const generateOtp = () => {
    let arr = [];
  for(let i = 1; i <= 6; i++){
    let char = Math.round(Math.random() * 9); 
    arr.push(char);
  }
  return arr.join("");
  }

const generatorHandle = () => {
setTime(5)
setIsVisible(true)
setIsActive(true)
setOtp(generateOtp())
}


return (
  <div className="container">
  <h1 id="otp-title">OTP Generator</h1>
  <h2 id="otp-display">{!isVisible? `Click 'Generate OTP' to get a code` : otp}</h2>
  <button disabled={isActive && time > 0} onClick={generatorHandle} id="generate-otp-button">Generate OTP</button>
  <p id="otp-timer" aria-live="polite">{isVisible ? (time >= 1 ? `Expires in: ${time} seconds`  : `OTP expired. Click the button to generate a new OTP.`) 
        : "" }</p>
  
  </div>
)



};
