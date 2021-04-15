import { Component, Fragment, h } from "preact";
import { InputMessageMirrorChild } from "./input-message-mirror-child";
import { Consumer } from "../provider";

export class InputMessageFunctionMirror extends Component<unknown, unknown> {
    render() {
        console.log('Render InputMessageFunctionMirror');
        return (
            <Consumer>
                {
                    /**
                     * Function as child pattern.
                     * 
                     * @link https://reactjs.org/docs/render-props.html#using-props-other-than-render
                     */
                    ({ message }) => {
                        console.log('Re-render InputMessageFunctionMirror');
                        return (
                            <Fragment>
                                <p>
                                    (Function as child) Entered message: <em>{message ? message : 'Empty'}</em>
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