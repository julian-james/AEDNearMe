import { Typography } from '@mui/material'
import React from 'react'
import CprVid from '../../components/CprVid/CprVid'
import DefibVid from '../../components/DefibVid/DefibVid'

const CPR = () => {
  return (
    <div>
        <h1>How to perform hands only CPR</h1>
        <CprVid />
        <Typography />Step 1: If you suspect someone is having a cardiac arrest, check the person over, tilt the head back and check for breathing for 10 seconds. If the person is unresponsive, ask someone to call 999/112 and tell them to bring an AED
        <Typography />Step 2: Start hands only CPR, lock your hands together and place them by the person's chest.
        <Typography />Step 3: With straight arms, use your body to push 5-6cm in depth at a rate of 100-120 bpm. (For reference, use the beat of Staying Alive by the Bee Gees)
        <Typography />Step 4: Keep doing hands only CPR until a defibrillator is present and the ambulance arrives. If there are multiple people around you, switch to other helpers every 5 rounds of 30 pushes to avoid fatigue. 
        <Typography />Read more here about performing CPR at <a href="https://www.sja.org.uk/get-advice/first-aid-advice/unresponsive-casualty/how-to-do-cpr-on-an-adult/" target="_blank">St. John's Ambulance</a>

        <h1>How to use a defibrillator</h1>
        <DefibVid />
        <Typography />Step 1: Have someone continue to perform CPR and follow the instructions of the defibrillator. 
        <Typography />Step 2: Remove clothing from person's chest and find the pads. Peel off the plastic and place the pads indicated by the pictures onto the person. (One pad of the right side under collarbone, second pad on the left side below armpit)
        <Typography />Step 3: AED will analyse the person's heart rhythm. Stop chest compressions and wait for the AED's instructions
        <Typography />Step 4: If shock is advised, tell everyone to stand back and clear of the person. After shock is delivered start chest compressions when told to do so by AED. 
        <Typography />Step 5: Leave the AED on as it will reanalyse heart rhythm and follow the instructions until help arrives
    </div>
  )
}

export default CPR