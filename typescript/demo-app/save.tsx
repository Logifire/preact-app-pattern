import { Component, h } from "preact";
import { DemoAppState } from "../demo-app";
import { Consumer } from "./provider";

export class Save extends Component {

    private saveDemoApp(state: DemoAppState) {
        // Send state to the server.
        console.log('Saving DemoAppSate: ', JSON.stringify(state));
    }

    render() {
        return (
            <Consumer>
                {
                    (demoAppState) => (
                        <button type="button" onClick={e => this.saveDemoApp(demoAppState)}>
                            Save
                        </button>
                    )
                }
            </Consumer>
        )
    }
}