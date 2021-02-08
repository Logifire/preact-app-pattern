import { Component, h } from "preact";
import { Consumer } from "./provider";

export class InputOptions extends Component {
    render() {
        console.log('Render InputOptions');
        return (
            /* Note: Every component which consumes the context will be rerendered on application state changes. */
            <Consumer>
                {
                    /* @link https://reactjs.org/docs/context.html#updating-context-from-a-nested-component */
                    ({ updateState }) => {
                        console.log('Re-render InputOptions');
                        return (
                            <div>
                                <label>Message:
                                <input type="text" placeholder="Enter message here"
                                        onKeyUp={(e) => { updateState({ message: e.currentTarget.value }) }} />
                                </label>
                            </div>
                        )
                    }
                }
            </Consumer>
        );
    }
}