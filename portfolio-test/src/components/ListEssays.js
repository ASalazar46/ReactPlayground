import React from "react";

export class ListEssays extends React.Component {
  state = {
    fileCount: null,
  };

  componentDidMount() {
    this.getEssayCount()
      .then((res) => this.setState({ fileCount: res.count }))
      .catch((err) => console.log(err));
  }

  getEssayCount = async () => {
    const response = await fetch("/essays");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    console.log("There are "+this.state.fileCount+" to list.");
    if (this.state.fileCount > 1) {
      return <div>There are {this.state.fileCount} files to list.</div>  
    } else if (this.state.fileCount === 0) {
      return <div>There are no essays to list.</div>  
    } else {
      return <div>Something went wrong trying to list essays.</div>;  
    }
  }
}
