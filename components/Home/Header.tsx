import { useTheme } from '@/context/ThemeContext';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Platform, StatusBar, Text, TouchableOpacity, View } from 'react-native';

export default function Header({ userName = "Chukwuebuka", userImage = null }) {
  const { isDark, toggleTheme } = useTheme();
  const navigation = useNavigation();
  const router = useRouter()
  
  // Get user initials from name
const getInitials = (name: string) => 
  name
    .split(' ')
    .map(part => part.charAt(0).toUpperCase())
    .join('');
  const initials = getInitials(userName);
  
  return (
    <LinearGradient
    //   colors={isDark ? ['#312e81', '#4338ca'] : ['#4f46e5', '#6366f1']}
    // colors = {isDark ? ['#1e3a8a', '#407BFF'] : ['#407BFF', '#60a5fa']}
    // colors ={ isDark ? ['#312e81', '#407BFF'] : ['#4f46e5', '#407BFF']}
colors = { isDark
  ? ['#3a3aa1', '#3a65e0'] // Blended dark purple-blue to bright blue
  : ['#5a55f0', '#5d8dff'] // Softer purple-blue to lighter blue
}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      className={`px-4 ${Platform.OS === 'ios' ? 'pt-10 pb-2' : 'py-2'}`}
    >
      <StatusBar barStyle="light-content" backgroundColor={isDark ? "#312e81" : "#4f46e5"} />
      
      <View className="flex-row py-8 justify-between items-center">
        <View>
          <Text className={`text-white text-md font-medium px-5 opacity-90`}>
            Welcome back, <Text className="font-bold">{userName}!</Text>
          </Text>
        </View>
        
        <View className="flex-row items-center gap-2">
          <TouchableOpacity 
            className={`w-10 h-10 rounded-full ${isDark ? 'bg-indigo-800/60' : 'bg-indigo-500/40'} items-center justify-center shadow-sm`}
            onPress={toggleTheme}
            accessibilityLabel="Toggle theme"
          >
            <Ionicons 
              name={isDark ? "sunny" : "moon"} 
              size={18} 
              color="white" 
            />
          </TouchableOpacity>
          
          <TouchableOpacity 
            className={`w-10 h-10 rounded-full items-center justify-center overflow-hidden border border-white/20 shadow-sm`}
            onPress={() => router.push('../Profile')}
            accessibilityLabel="Go to profile"
          >
            {userImage ? (
              <Image 
                source={{ uri: userImage }} 
                className="w-full h-full"
                accessibilityLabel="User avatar"
              />
            ) : (
              <View className={`w-full h-full ${isDark ? 'bg-indigo-700/60' : 'bg-indigo-400/60'} items-center justify-center`}>
                <Text className="text-white font-bold text-xs">{initials}</Text>
              </View>
            )}
          </TouchableOpacity>
          
          <TouchableOpacity 
            className={`w-10 h-10 rounded-full ${isDark ? 'bg-indigo-800/60' : 'bg-indigo-500/40'} items-center justify-center shadow-sm`}
            onPress={() => router.push('../Notifications')}
            accessibilityLabel="View notifications"
          >
            <View className="relative">
              <FontAwesome5 name="bell" size={14} color="white" />
              <View className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500 border border-white/20" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}