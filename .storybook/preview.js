import {addDecorator} from "@storybook/react";
import {withContexts} from "@storybook/addon-contexts/dist/preview/frameworks/react";
import {contexts} from "./contexts";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(withContexts(contexts))