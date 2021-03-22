import { Component, h, render } from "preact";
import { InputMessage } from "./demo-app/input-message";
import { InputMessageFunctionMirror } from "./demo-app/function-as-child/input-message-function-mirror";
import { NoState } from "./demo-app/no-state";
import { DemoAppProvider } from "./demo-app/provider";
import { Save } from "./demo-app/save";
import { InputMessagePropertyMirror } from "./demo-app/property/input-message-property-mirror";

// Data model representing the application state.
export class DemoAppState {
    message = '';
}

/**
 * Quote: The main value proposition of the unknown type: TypeScript won't let us perform arbitrary operations on
 * values of type unknown. Instead, we have to perform some sort of type checking first to narrow the type of the value
 * we're working with.
 * 
 * @link https://mariusschulz.com/blog/the-unknown-type-in-typescript 
 */
class DemoApp extends Component<unknown, unknown> {

    render() {
        return (
            <DemoAppProvider>
                <InputMessage />
                <InputMessageFunctionMirror />
                <InputMessagePropertyMirror />
                <NoState />
                <Save />
            </DemoAppProvider>
        );
    }
}

const parent = document.getElementById('demo-app');
const replace = parent.querySelector('div');

render(<DemoApp />, parent, replace);