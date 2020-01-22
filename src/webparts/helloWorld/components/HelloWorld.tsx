import * as React from 'react';
import { IHelloWorldProps } from './IHelloWorldProps';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div>
        <div className="my-app">
          <a className="waves-effect waves-light btn">Materialize button</a>
        </div>
        <div>
          <a className="waves-effect waves-light btn">Just a regular text, no materialize effect!</a>
        </div>
      </div>
    );
  }
}
