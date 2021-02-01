import { Component, h, render } from "preact";
import { InputOptions } from "./demo-app/input-options";


class DemoApp extends Component {
    render() {
        return (
            <div>
                <InputOptions/>
            </div>
        );
    }
}

const parent = document.getElementById('demo-app');
const replace = parent.querySelector('div');

render(<DemoApp />, parent, replace);