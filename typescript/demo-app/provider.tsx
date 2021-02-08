import { Component, createContext, h } from "preact";
import { DemoAppState } from "../demo-app";

// Interface representing the context.
interface DemoAppContextContainer extends DemoAppState {
    updateState: (newState: Partial<DemoAppState>) => void;
}

/* @link https://preactjs.com/guide/v10/context#createcontext */
export const { Provider, Consumer } = createContext<DemoAppContextContainer>(null);


export class DemoAppProvider extends Component<unknown, DemoAppState> {

    constructor(props: unknown) {
        super(props);
        this.state = new DemoAppState();
    }

    private updateState = (newState: Partial<DemoAppState>): void => {
        this.setState(newState);
    }

    render() {
        /* The providers "value" consists of the application state and a reference to update it. */
        return (
            <Provider value={{ ...this.state, updateState: this.updateState }} >
                {/* 
                    Note:   If you do an inline rendering of the components, 
                            they will be within the hierarchy of the provider component - 
                            and will re-render on state changes of the provider.
                            By using this pattern only consumers subscribing to context 
                            changes will re-render.
                            @link https://stackoverflow.com/a/50817822/10604655
                */}
                {this.props.children}
            </Provider>
        );
    }
}