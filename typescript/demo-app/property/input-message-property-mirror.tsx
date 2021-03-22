import { Component, Fragment, h } from "preact";
import { Consumer, DemoAppContext } from "../provider";

export class InputMessagePropertyMirror extends Component<unknown, unknown> {

    /**
     * This enables the consume behaviour.
     */
    static contextType = DemoAppContext;

    render() {
        console.log('Render InputMessagePropertyMirror');
        return (
            <Fragment>
                <p>
                    (Property) Entered message: <em>{this.context.message ? this.context.message : 'Empty'}</em>
                </p>
            </Fragment>
        )
    }
}