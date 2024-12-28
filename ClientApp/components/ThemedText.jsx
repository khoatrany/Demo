import { Text, StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export function ThemedText({ className, ...rest }) {
  return <Text className={className} {...rest} />;
}
