import React from 'react'
import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'
import './Scramble.scss';


const scrambleTexts: ScrambleTexts = [
  'Aura Connect',
  'Video Call',
  'Chat Rooms',
  'Delete Messages',
  'To Do List',
  'Feedback Forms',
  'Reset Password',
  'Delete Account',
  'COVID-19 Info'
]

const Scramble: React.FC = () => {

  return (
    <>
      <div className='Example'>
        <span className='Example__blinker'>_</span>
        <TextScramble
          texts={scrambleTexts}
          letterSpeed={3}
          nextLetterSpeed={200}
          pauseTime={1200}
        />
      </div>
    </>
  )
}

export default Scramble;