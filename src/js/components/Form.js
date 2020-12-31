import React from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;
    this.props.addArticle({ title });
    this.setState({ title: "" });
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch, "Is dispatch here!");
  return {
    addArticle: (article) => dispatch(addArticle(article)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
