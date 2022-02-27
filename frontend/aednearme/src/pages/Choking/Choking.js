import { Typography, Button } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router';
import ChokingVid from '../../components/ChokingVid/ChokingVid'

const Choking = () => {

  const navigate = useNavigate();

  const goToCPR = () => {
    navigate('/cpr')
  }

  return (
    <div>
        <h1>Choking</h1>
        <ChokingVid />
        <Typography />Step 1: Ask the person if they are choking. If they can cough, encourage them to cough it out. If they are unable to speak or cough, proceed to the next step
        <Typography />Step 2: Lean the person slightly forward with the support of one hand, and give 5 sharp back blows between the shoulder blades
        <Typography />Step 3: Check their mouth to see if there is any blockage. If they are still choking proceed to the next step.
        <Typography />Step 4: Abdominal thrusts: Stand behind the person, link your arms around them and put your fist between the belly button and chest. 
        <Typography />Step 5: Grasp your fist with your other hand and pull sharply inwards and upwards up to 5 times.
        <Typography />Step 6: Check their mouth for blockage. If they are still choking, call 999, and repeat the 5 back blows and abdominal thrusts until blockage is clear and/or help arrives. 
        <Typography />Step 7: If they become unresponsive, tilt their head back and check for breathing for 10 seconds. If there is no response, start CPR. Press the button for more infomation on how to perform 
        <Button variant="contained" onClick={goToCPR}>CPR</Button>
        <p>Read more here at <a href="https://www.sja.org.uk/get-advice/first-aid-advice/choking/" target="_blank">St. John's Ambulance</a></p>
    </div>
  )
}

export default Choking