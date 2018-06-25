import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';


export default function GuessSection(props) {
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback/>
      <GuessForm/>
    </section>
  );
}

// const mapStateToProps = state =>({
//   feedback: state.feedback,
//   guessCount: state.guesses.length
// });

// export default connect (mapStateToProps)(GuessSection);
