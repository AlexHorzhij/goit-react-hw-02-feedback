import PropTypes from 'prop-types';

export const Statistics = function ({ good, neutral, bad, total, positivePercentage }) {
    return <>
        <ul>
            <li>
                Good: <span>{good}</span>
            </li>
            <li>
                Neutral: <span>{neutral}</span>
            </li>
            <li>
                Bad: <span>{bad}</span>
            </li>
        </ul>
        <p>Total: <span>{total}</span></p>
        <p>Positive feefback: <span>{positivePercentage}%</span></p>
    </>
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}
