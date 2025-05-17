; // or better: move this to a separate `providers` folder
import { ThemeProvider } from "@/context/ThemeContext";
import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="landing" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/SignUp" options={{ headerTransparent: true, headerTitle: "" }} />
        <Stack.Screen name="(auth)/SignIn" options={{ headerTransparent: true, headerTitle: "" }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
