import React, { useState } from 'react';

import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export function App() {
  const [marks, setMarks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleOnClick = name => {
    setMarks(prev => ({ ...prev, [name]: prev[name] + 1 }));
  };

  const totalFeedback = Object.values(marks).reduce((a, i) => a + i, 0);
  const positiveFeedbackPercentage = (
    (marks.good * 100) /
    totalFeedback
  ).toFixed(0);

  return (
    <Section title='What do you think about our "EXpresso"?'>
      <FeedbackOptions
        options={Object.keys(marks)}
        onLeaveFeedback={handleOnClick}
      />
      {totalFeedback ? (
        <Statistics
          entries={Object.entries(marks)}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message="There is no feedback yet!" />
      )}
    </Section>
  );
}
