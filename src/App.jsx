import { useState } from 'react'; 
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import {feedbackOptions} from './data/constants';
import Section from './components/Section';
import Stat from './components/Feedback/Stat';


export default function Feedback () {
   const [good, setGoodFeedback ]= useState (0);
  const [neutral, setNeutralFeedback] = useState (0);
  const [bad, setBadFeedback] = useState (0);


const  handleFeedback = ({target}) => {
    const { feedback } = target.dataset

  //   const qwe = (feedback) => {
  //  const [state, setState] = useState() =>{}

    switch (feedback) {
      case 'good':
        setGoodFeedback(state => state + 1);
          break;
      case 'neutral':
        setNeutralFeedback(state => state + 1);
          break;
      case 'bad':
        setBadFeedback(state => state + 1);
          break;
      default:
          return;
  }

}

const countTotalFeedback = () => {    
  return good + neutral + bad;
} 
const countPositiveFeedbackPercentage = () => {

  const total = countTotalFeedback();
  return Math.round((good*100 / total));
};

  return (
    <div>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={feedbackOptions} onLeaveFeedback={handleFeedback}/>
      </Section>

      <Section title='Statistics'>
        <Stat
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positiveFeedback={countPositiveFeedbackPercentage()}
          
        />
      </Section>
      
    </div>
  )
}  
  // state = {
  //   good : 0,
  //   neutral : 0,
  //   bad : 0
  // }


  // handleFeedback = ({target}) => {
  //   const { feedback } = target.dataset
  //   this.setState((prevState) => ({ [feedback]: prevState[feedback] +1 }))
  // }

//   countTotalFeedback = () => {    
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   } 
//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return Math.round((good*100 / total));
//   };
    

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positiveFeedback = this.countPositiveFeedbackPercentage();
    
//   }  
// }
