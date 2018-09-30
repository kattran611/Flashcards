import React from 'react';
import { form } from 'semantic-ui-react';

class CardForm extends React.Component {
  state = { question: '' }

  handleQuestionChange = (e) => {
    this.setState({question: e.target.value});
  }
  handleAnswerChange = (e) => {
    this.setState({answer: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { question, answer } = this.state
    this.props.flipCard({ question, answer })
    this.setState({question: '', answer: ''})
  }

  render () {
    const {question, answer} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        name='question'
        value={question}
        onChange={this.handleQuestionChange}
        required
        placeholder="write your answer"
      />

      <button>Flip</button>
    </form>
    )
  }
}

export default CardForm;
