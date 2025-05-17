import { ThemeProvider } from "@/context/ThemeContext";
import { Redirect } from "expo-router";
import { View, ActivityIndicator } from "react-native";

export default function Index() {
  return (
    <ThemeProvider>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
        <Redirect href="/landing" />
      </View>
    </ThemeProvider>
  );
}