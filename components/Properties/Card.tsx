import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Property } from './data';
import { router } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

const {isDark} = useTheme()

  const Card = ({ item }: { item: Property }) => (
    <TouchableOpacity 
      className={`mb-4 rounded-xl overflow-hidden border ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}
      onPress={() => router.push(`../property/${item.id}`)}
      style={{ elevation: 3 }}
    >
      <Image
        source={{item.imageUrl}} 
        className="w-full h-65"
      />
      <View className="p-4">
        <Text className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>{item.name}</Text>
        <Text className={`text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{item.address}</Text>
        
        <View className="flex-row justify-between items-center mb-2">
          <View className="flex-row items-center">
            <Ionicons name="home-outline" size={16} color={isDark ? "#BBB" : "#666"} />
            <Text className={`ml-1 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {item.type}
            </Text>
          </View>
          <View className="flex-row items-center">
            <Ionicons name="people-outline" size={16} color={isDark ? "#BBB" : "#666"} />
            <Text className={`ml-1 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {item.units} {item.units > 1 ? 'Units' : 'Unit'}
            </Text>
          </View>
        </View>
        
        <View className="flex-row justify-between items-center mb-3">
          <View className="flex-row items-center">
            <Ionicons name="trending-up-outline" size={16} color={isDark ? "#BBB" : "#666"} />
            <Text className={`ml-1 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {item.occupancyRate}% Occupied
            </Text>
          </View>
          <View className="flex-row items-center">
            <Ionicons name="cash-outline" size={16} color={isDark ? "#BBB" : "#666"} />
            <Text className={`ml-1 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              ₦{item.monthlyIncome.toLocaleString()}/mo
            </Text>
          </View>
        </View>
        
        <TouchableOpacity 
          className="flex-row items-center justify-center bg-blue-500 rounded-md py-2"
          onPress={() => router.push(`../property/${item.id}`)}
        >
          <Text className="text-white font-medium">View Details</Text>
          <Ionicons name="arrow-forward" size={16} color="white" style={{ marginLeft: 4 }} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
export default Card