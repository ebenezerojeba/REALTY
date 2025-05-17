
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
// import { useAuth } from "../../hooks/useAuth";

// import { supabase } from '@/utils/supabase';
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";


type UserRole = "landlord" | "tenant";

export default function SignUp() {
  const router = useRouter();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<UserRole>("landlord");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
const [profileImage, setProfileImage] = useState<string | null>(null);



    const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };
  

  const handleRegister = async () => {
    router.push('/(tabs)/home')
    // if (!name || !email || !password || !confirmPassword) {
    // //   setError("Please fill in all fields");
    // ToastAndroid.show('Please enter all details!', ToastAndroid.BOTTOM)
    //   return;
    // }

    // if (password !== confirmPassword) {
    //   setError("Passwords do not match");
    //   return;
    // }

    // if (password.length < 6) {
    //   setError("Password must be at least 6 characters");
    //   return;
    // }

    // let name = nameRef.current.trim()

    // Commented out logic would go here
    setError("");
    setIsLoading(true);

      
    // const {data: {session}, error} = await supabase.auth.signUp({
    //     email: email,
    //     password: password,

    // });
    // setIsLoading(false)
    // console.log('session', session)
    // console.log('error', error)

    // if (error) {
    //     Alert.alert('Sign up', error.message)
    // }


    // Upload Image
    // await upload(cld, {
    //     file: profileImage,
    //     options: options,
    //     callback:async (error:any, response: any) => {
    //         if (error) {
    //             console.log(error)
    //         }
    //         if (response) {
    //             console.log(response)
    //         }
    //     }
    // })


    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log("Registration successful");
    }, 2000);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 px-6 py-6">
            {/* Back button */}
            {/* <TouchableOpacity 
              onPress={() => router.back()}
              className="w-10 h-10 items-center justify-center rounded-full bg-gray-100 mb-4"
            >
              <Ionicons name="chevron-back" size={24} color="#333" />
            </TouchableOpacity> */}

            <View className="items-center mb-10">
              <View className="w-16 h-16 rounded-full bg-blue-100 items-center justify-center mb-3">
  <TouchableOpacity onPress={pickImage}>
    {profileImage ? (
      <Image 
        source={{ uri: profileImage }} 
        style={{ width: 64, height: 64, borderRadius: 32 }}
      />
    ) : (
      <Ionicons name="person-add" size={40} color="#3b82f6" />
    )}
    <View style={{ position: 'absolute', bottom: -8, right: -8 }}>
      <Ionicons name="camera" size={18} color="#333" />
    </View>
  </TouchableOpacity>
</View>
              <Text className="text-2xl font-bold text-gray-800">
                Create Your Account
              </Text>
              <Text className="text-gray-600 text-base mt-1 text-center">
                Join the Property Manager platform
              </Text>
            </View>

            {error ? (
              <View className="bg-red-50 p-4 rounded-xl mb-6 border border-red-200">
                <Text className="text-red-600">{error}</Text>
              </View>
            ) : null}

            <View className="space-y-4">
              <View>
                <Text className="text-gray-700 mb-2 font-medium">
                  Full Name
                </Text>
                <View className="flex-row items-center bg-gray-50 rounded-xl border border-gray-200">
                  <View className="pl-4 pr-2">
                    <Ionicons name="person-outline" size={20} color="#6b7280" />
                  </View>
                  <TextInput
                    className="flex-1 p-3.5 text-base text-gray-800"
                    placeholder="Enter your full name"
                    value={name}
                    onChangeText={setName}
                    placeholderTextColor="#9ca3af"
                  />
                </View>
              </View>

              <View>
                <Text className="text-gray-700 mb-2 font-medium">Email</Text>
                <View className="flex-row items-center bg-gray-50 rounded-xl border border-gray-200">
                  <View className="pl-4 pr-2">
                    <Ionicons name="mail-outline" size={20} color="#6b7280" />
                  </View>
                  <TextInput
                    className="flex-1 p-3.5 text-base text-gray-800"
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholderTextColor="#9ca3af"
                  />
                </View>
              </View>

              <View>
                <Text className="text-gray-700 mb-2 font-medium">
                  Password
                </Text>
                <View className="flex-row items-center bg-gray-50 rounded-xl border border-gray-200">
                  <View className="pl-4 pr-2">
                    <Ionicons name="lock-closed-outline" size={20} color="#6b7280" />
                  </View>
                  <TextInput
                    className="flex-1 p-3.5 text-base text-gray-800"
                    placeholder="Create a password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    placeholderTextColor="#9ca3af"
                  />
                  <TouchableOpacity
                    className="pr-4"
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Ionicons
                      name={showPassword ? "eye-off-outline" : "eye-outline"}
                      size={22}
                      color="#6b7280"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                <Text className="text-gray-700 mb-2 font-medium">
                  Confirm Password
                </Text>
                <View className="flex-row items-center bg-gray-50 rounded-xl border border-gray-200">
                  <View className="pl-4 pr-2">
                    <Ionicons name="shield-checkmark-outline" size={20} color="#6b7280" />
                  </View>
                  <TextInput
                    className="flex-1 p-3.5 text-base text-gray-800"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!showPassword}
                    placeholderTextColor="#9ca3af"
                  />
                </View>
              </View>

              <View className="mt-2">
                <Text className="text-gray-700 mb-3 font-medium">I am a:</Text>
                <View className="flex-row space-x-4">
                  <TouchableOpacity
                    className={`flex-1 p-4 rounded-xl border ${
                      role === "landlord"
                        ? "bg-blue-50 border-blue-500"
                        : "border-gray-300 bg-white"
                    }`}
                    onPress={() => setRole("landlord")}
                  >
                    <View className="flex-row items-center justify-center">
                      <Ionicons 
                        name="home-outline" 
                        size={20} 
                        color={role === "landlord" ? "#3b82f6" : "#6b7280"} 
                        style={{ marginRight: 8 }} 
                      />
                      <Text
                        className={`text-center font-medium ${
                          role === "landlord"
                            ? "text-blue-700"
                            : "text-gray-500"
                        }`}
                      >
                        Landlord
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    className={`flex-1 p-4 rounded-xl border ${
                      role === "tenant"
                        ? "bg-blue-50 border-blue-500"
                        : "border-gray-300 bg-white"
                    }`}
                    onPress={() => setRole("tenant")}
                  >
                    <View className="flex-row items-center justify-center">
                      <Ionicons 
                        name="people-outline" 
                        size={20} 
                        color={role === "tenant" ? "#3b82f6" : "#6b7280"} 
                        style={{ marginRight: 8 }} 
                      />
                      <Text
                        className={`text-center font-medium ${
                          role === "tenant"
                            ? "text-blue-700"
                            : "text-gray-500"
                        }`}
                      >
                        Tenant
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                className={`rounded-xl p-4 shadow-sm mt-4 ${
                  isLoading ? "bg-blue-400" : "bg-blue-600"
                }`}
                onPress={handleRegister}
                disabled={isLoading}
              >
                
                {isLoading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text className="text-white text-center font-semibold text-lg">
                    Create Account
                  </Text>
                )}
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-center mt-6">
              <Text className="text-gray-600 text-base">Already have an account? </Text>
              <TouchableOpacity onPress={() => router.push("/(auth)/SignIn")}>
                <Text className="text-blue-600 font-semibold text-base">Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}