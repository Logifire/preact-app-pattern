import { Component, h } from "preact";

export class InputMessageMirrorChild extends Component<unknown, unknown> {

    private static countUpdate = 0;

    render() {
        console.log('Render InputMessageMirrorChild');
        return (
            <p>Children of consumers are also updated ({InputMessageMirrorChild.countUpdate++})</p>
        )
    }
}