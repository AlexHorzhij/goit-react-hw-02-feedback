import React from 'react';
import css from './Fedback.module.css'

import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'
import { Section } from './Section/Section'
import { Statistics } from './Statistics/Statistics';
import {Notification} from './Notification/Notification'


export class Feedback extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    
    countFeedback = (e) => {
        const { name } = e.currentTarget
        this.setState(prevState => ({[name]: prevState[name] + 1}))
    }


    countTotalFeedback = ({good, neutral, bad}) => {
        return good + neutral + bad
    }

    countPositiveFeedbackPercentage = ({good, neutral, bad}) => {
        const total = good + neutral + bad
        const positive = good ? Math.round(good / total * 100) : 0
        return positive
    }

    render() {
        return <div className={css.feedback}><Section title="Please leave feedback">
               <FeedbackOptions options={ Object.keys(this.state) } onLeaveFeedback={this.countFeedback} />
           </Section>
             <Section title="Statistics">
                {this.countTotalFeedback(this.state) ?
                    (<Statistics
                   good={this.state.good}
                   neutral={this.state.neutral}
                   bad={this.state.bad}
                   total={this.countTotalFeedback(this.state)}
                    positivePercentage={this.countPositiveFeedbackPercentage(this.state)} />
                    ) :
                    (<Notification message="There is no feedback" />)}
            </Section>
            </div>
    }
}