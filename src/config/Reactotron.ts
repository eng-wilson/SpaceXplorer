import Reactotron from "reactotron-react-native";

declare global {
  interface Console {
    tron: any;
  }
}

const tron = Reactotron.configure().useReactNative().connect();

tron.clear!();

console.tron = tron;

export default tron;
