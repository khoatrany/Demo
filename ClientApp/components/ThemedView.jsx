import { View } from "react-native";
export function ThemedView({ className, ...otherProps }) {
  return <View className={className} {...otherProps} />;
}
