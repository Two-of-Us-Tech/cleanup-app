import { View } from "react-native";

const Gap = ({ size, direction = "horizontal" }) => {
  return (
    <View style={{ [direction === "horizontal" ? "width" : "height"]: size }} />
  );
};

export default Gap;
