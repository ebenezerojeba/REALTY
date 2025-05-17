
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
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
} from 'react-native';
// import { useAuth } from '../../hooks/useAuth'; // Uncomment if using custom auth

export default function SignIn() {
  const router = useRouter();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setError('');
      setIsLoading(true);

      
     // Uncomment and implement your sign-in logic
      console.log('Login successful');
    //   router.replace('/'); // Navigate to the home screen or dashboard
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 px-6 py-8">
            {/* Back button */}
            {/* <TouchableOpacity 
              onPress={() => router.back()}
              className="w-10 h-10 items-center justify-center rounded-full bg-gray-100 mb-6"
            >
              <Ionicons name="chevron-back" size={24} color="#333" />
            </TouchableOpacity> */}
            
            {/* Logo and Header */}
            <View className="items-center mb-8">
              <View className="w-16 h-16 rounded-full bg-blue-100 items-center justify-center mb-4">
                <Ionicons name="person" size={32} color="#3b82f6" />
              </View>
              <Text className="text-3xl font-bold text-gray-800">Welcome Back</Text>
              <Text className="text-base text-gray-600 mt-2 text-center">
                Sign in to your Property Manager account
              </Text>
            </View>

            {/* Error Message */}
            {error ? (
              <View className="bg-red-50 p-4 rounded-xl mb-6 border border-red-200">
                <Text className="text-red-600">{error}</Text>
              </View>
            ) : null}

            {/* Form */}
            <View className="space-y-5">
              <View>
                <Text className="text-gray-700 mb-2 font-medium text-base">Email</Text>
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
                <Text className="text-gray-700 mb-2 font-medium text-base">Password</Text>
                <View className="flex-row items-center bg-gray-50 rounded-xl border border-gray-200">
                  <View className="pl-4 pr-2">
                    <Ionicons name="lock-closed-outline" size={20} color="#6b7280" />
                  </View>
                  <TextInput
                    className="flex-1 p-3.5 text-base text-gray-800"
                    placeholder="Enter your password"
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
                      name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                      size={22}
                      color="#6b7280"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Forgot Password Link */}
              <TouchableOpacity
                className="self-end"
                onPress={() => router.push('./(auth)/forgot-password')}
              >
                <Text className="text-blue-600 font-medium text-base">Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className={`rounded-xl p-4 shadow-sm mt-4 ${
                  isLoading ? 'bg-blue-400' : 'bg-blue-600'
                }`}
                onPress={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text className="text-white text-center font-semibold text-lg">
                    Sign In
                  </Text>
                )}
              </TouchableOpacity>
            </View>

            {/* Register Link */}
            <View className="flex-row justify-center mt-8">
              <Text className="text-gray-600 text-base">Don't have an account? </Text>
              <TouchableOpacity onPress={() => router.push('/(auth)/SignUp')}>
                <Text className="text-blue-600 font-semibold text-base">Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}