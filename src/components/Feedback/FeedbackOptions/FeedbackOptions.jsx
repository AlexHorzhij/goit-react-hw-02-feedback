import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export const FeedbackOptions = function ({ options, onLeaveFeedback }) {
    return <ul className={css.feedbackList}>
        {options.map(button => <li key={button}><button className={css.feedbackButton} type='button' name={button} onClick={onLeaveFeedback}>{button}</button></li>)}
    </ul>
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired
}


// export const FeedbackOptions = function ({ options, onLeaveFeedback }) {
//     console.log(Object.entries(options))
// return   <ul className={css.feedbackList}>
//         <li><button className={css.feedbackButton} type='button' name='good' onClick={onLeaveFeedback}>good</button></li>
//         <li><button className={css.feedbackButton} type='button' name='neutral' onClick={onLeaveFeedback}>neutral</button></li>
//         <li><button className={css.feedbackButton} type='button' name='bad' onClick={onLeaveFeedback}>bad</button></li>
//     </ul>
// }