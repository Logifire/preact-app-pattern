import { Component, Fragment, h } from "preact";
import { DemoAppContext } from "../provider";

export class InputMessagePropertyMirror extends Component<unknown, unknown> {

    /**
     * Using this property lets you consume the nearest current value of that Context type using this.context.
     * Note: You can only subscribe to a single context using this API. If you need to read more than one, 
     * use function as child.
     * 
     * @link https://reactjs.org/docs/context.html#classcontexttype
     */
    static contextType = DemoAppContext;

    render() {
        console.log('Render InputMessagePropertyMirror');
        return (
            <Fragment>
                <p>
                    (Property: contextType) Entered message: <em>{this.context.message ? this.context.message : 'Empty'}</em>
                </p>
            </Fragment>
        )
    }
}