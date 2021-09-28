import React from 'react';

export class ContactsMe extends React.Component {
  render() {
    return (
        <div className="container w-11/12 h-auto mx-auto mt-16 mb-16 bg-gray-500 
        rounded-xl grid grid-cols-4 md:text-md lg:text-2xl place-items-center
        font-mono break-all space-x-2">
            <p className="col-start-1">Contact Me: </p>
            <p className="col-start-2">+# (###) ### - ###</p>
            <p className="col-start-3">sample.email@srvcr.ext</p>
            <p className="col-start-4">linkedin.com/my-prof</p>
        </div>
    );
  }
}