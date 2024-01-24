import React from "react";

class Instructor extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {
    console.log("Mounted - Instructor");
  }
  componentDidUpdate() {
    console.log("Updated - Instructor");
  }
  componentWillUnmount() {
    console.log("UnMount - Instructor");
  }
  render() {
    return (
      <div>
        Name: {this.props.instructor.name} <br />
        Email: {this.props.instructor.email} <br />
        Phone: {this.props.instructor.phone} <br />
      </div>
    );
  }
}
export default Instructor;
