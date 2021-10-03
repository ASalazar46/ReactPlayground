import React from "react";
import { EssayCard } from "./EssayCard";

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
    let x = 4; //replace x with this.state.fileCount once done with card
    // add back proxy into package.json too   "proxy": "http://localhost:3001"
    if (x > 1) {
      return (
        <div className="grid place-items-center">
          <EssayCard />
        </div>
      )  
    } else if (this.state.fileCount === 0) {
      return <div>There are no essays to list.</div>  
    } else {
      return <div>Something went wrong trying to list essays.</div>;  
    }
  }
}
