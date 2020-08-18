import React from "react";
import { connect } from "react-redux";
import * as courseAction from "../../redux/actions/courseAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: "",
      },
    };
  }

  handleChange = (e) => {
    const course = { ...this.state.course, title: e.target.value };
    this.setState({ course });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input type="text" value={this.state.course.title} onChange={this.handleChange} />
        <input type="submit" value="Save" />

        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
