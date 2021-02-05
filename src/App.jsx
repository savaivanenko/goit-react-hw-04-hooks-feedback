import React from 'react'; 
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import {feedbackOptions} from './data/constants';
import Section from './components/Section';
import Stat from './components/Feedback/Stat';
export default class App extends React.Component {
  state = {
    good : 0,
    neutral : 0,
    bad : 0
  }


  handleFeedback = ({target}) => {
    const { feedback } = target.dataset
    this.setState((prevState) => ({ [feedback]: prevState[feedback] +1 }))
  }

  countTotalFeedback = () => {    
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  } 
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good*100 / total));
  };
  

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={feedbackOptions} onLeaveFeedback={this.handleFeedback}/>
        </Section>

        <Section title='Statistics'>
          <Stat
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback}
            
          />
        </Section>
        
      </div>
    )
  }  
}
