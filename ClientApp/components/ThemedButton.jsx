import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export function ThemedButton({
  style,
  lightColor,
  darkColor,
  type = "default",
  title,
  className,
  onPress,
  ...rest
}) {
  return (
    <TouchableOpacity
      {...rest}
      onPress={onPress}
      className={className}
      style={[
        styles.button,
        type === "primary" ? styles.primary : undefined,
        type === "secondary" ? styles.secondary : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
    >
      <Text
        style={[
          type === "default" ? styles.defaultText : undefined,
          type === "primary" ? styles.primaryText : undefined,
          type === "secondary" ? styles.secondaryText : undefined,
          type === "link" ? styles.linkText : undefined,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  default: {
    backgroundColor: "#f0f0f0",
  },
  primary: {
    backgroundColor: "#007bff",
  },
  secondary: {
    backgroundColor: "#6c757d",
  },
  link: {
    backgroundColor: "transparent",
  },
  defaultText: {
    fontSize: 16,
    fontWeight: "normal",
  },
  primaryText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryText: {
    fontSize: 16,
    fontWeight: "normal",
  },
  linkText: {
    fontSize: 16,
    color: "#007bff",
  },
});
