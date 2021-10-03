import React from "react";
import { WorksCard } from "./WorksCard";

export class ListWorks extends React.Component {
  state = {
    fileMetaArr: [],
  };

  componentDidMount() {
    this.getWorksMeta()
      .then((res) => this.setState({ fileMetaArr: res }))
      .catch((err) => console.log(err));
  }

  getWorksMeta = async () => {
    const response = await fetch("/works");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    const metaArr = this.state.fileMetaArr;
    if (metaArr.length > 0) {
      return (
        <div className="grid place-items-center space-y-2 mt-2">
          {metaArr.map((x, index) => (
            <WorksCard key={index} meta={x} />
          ))}
        </div>
      );
    } else if (metaArr.length === 0) {
      return <div>There are no essays to list.</div>;
    } else {
      return <div>Something went wrong trying to list essays.</div>;
    }
  }
}
