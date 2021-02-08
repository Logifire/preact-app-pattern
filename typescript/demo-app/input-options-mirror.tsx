import { Component, h } from "preact";
import { Consumer } from "./provider";

export class InputOptionsMirror extends Component {
    render() {
        console.log('Render InputOptionsMirror');
        return (
            <Consumer>
                {
                    ({ message }) => {
                        console.log('Re-render InputOptionsMirror');
                        return (
                            <div>
                                Entered options: <em>{message ? message : 'Empty'}</em>
                            </div>
                        )
                    }
                }
            </Consumer>
        )
    }
}