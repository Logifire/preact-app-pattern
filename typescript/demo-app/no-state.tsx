import { Component, h } from "preact";

/**
 * Note: This component does not subscribe to the context, and will not re-render on state change.
 */
export class NoState extends Component {
    render() {
        console.log('Render NoState');
        return (
            <p>
                No updates to components without consumer interaction (NoState)
            </p>
        )
    }
}