import { Component, Fragment, h } from "preact";
import { InputMessageMirrorChild } from "./input-message-mirror-child";
import { Consumer } from "./provider";

export class InputMessageMirror extends Component<unknown, unknown> {
    render() {
        console.log('Render InputMessageMirror');
        return (
            <Consumer>
                {
                    ({ message }) => {
                        console.log('Re-render InputMessageMirror');
                        return (
                            <Fragment>
                                <p>
                                    Entered message: <em>{message ? message : 'Empty'}</em>
                                </p>
                                <InputMessageMirrorChild />
                            </Fragment>
                        )
                    }
                }
            </Consumer >
        )
    }
}