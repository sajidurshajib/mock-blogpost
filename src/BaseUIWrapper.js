import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';

const engine = new Styletron();

const BaseUIWrapper = (props)=> {
  return (
        <div>
            <StyletronProvider value={engine}>
                <BaseProvider theme={LightTheme}>
                        {props.children}
                </BaseProvider>
            </StyletronProvider>
        </div>
  );
}

export default BaseUIWrapper