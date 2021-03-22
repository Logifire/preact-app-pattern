import { Component, h } from "preact";

export class InputMessageMirrorChild extends Component<unknown, unknown> {

    /**
     * This is only to visualize preacts rendering mechanism and avoid dispatching a render event. Do not do this.
     */
    private static countUpdate = 0;

    render() {
        console.log('Render InputMessageMirrorChild');
        return (
            <p>Children of consumers are also updated (Rendered {InputMessageMirrorChild.countUpdate++} times)</p>
        )
    }
}