import images from "@/constants/images";
import { useRouter } from "expo-router";
import React from "react";
import {
    Image,
    Pressable,
    SafeAreaView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function LandingScreen() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />

      <View className="flex-1 px-6">
        {/* Top spacing */}
        <View className="h-10" />

        {/* Image container with shadow */}
        <View className="items-center justify-center mb-8">
          <Image
            source={images.landing}
            className="w-full h-72 rounded-2xl"
            resizeMode="cover"
          />
        </View>

        {/* Content container */}
        <View className="flex-1 items-center justify-center mt-2">
          <Text className="text-3xl font-bold text-center text-gray-800 mb-4">
            Welcome to <Text className="text-blue-600">Realty</Text>
          </Text>
 
          <Text className="text-base text-center text-gray-600 mb-8 px-4">
            Your go-to app for managing your properties.
          </Text>

          {/* CTA Button */}
          <TouchableOpacity
            onPress={() => router.push("/(auth)/SignUp")}
            className="w-full bg-blue-600 py-4 rounded-xl items-center mb-6 shadow-sm"
            activeOpacity={0.8}
          >
            <Text className="text-white font-bold text-lg">Get Started</Text>
          </TouchableOpacity>

          {/* Sign In link */}
          <View className="flex-row items-center justify-center">
            <Text className="text-gray-600 text-base">
              Already have an account?{" "}
            </Text>
            <TouchableOpacity>
              <Pressable onPress={() => router.push("/(auth)/SignIn")}>
                <Text className="text-blue-600 font-semibold text-base">
                  Sign In here
                </Text>
              </Pressable>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom spacing */}
        <View className="h-6" />
      </View>
    </SafeAreaView>
  );
}
