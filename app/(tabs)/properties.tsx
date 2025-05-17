import { mockProperties, Property } from '@/components/Properties/data';
import images from '@/constants/images';
import { useTheme } from '@/context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Animated, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PropertiesScreen() {
  const [filterType, setFilterType] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const { isDark } = useTheme();
  
  // Animation values
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(20));
  
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  // Filter properties based on selected filter
  const filteredProperties = filterType 
    ? mockProperties.filter(property => property.type === filterType) 
    : mockProperties;

  // Sort properties based on selected sort option
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (!sortBy) return 0;
    
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'income-high':
        return b.monthlyIncome - a.monthlyIncome;
      case 'income-low':
        return a.monthlyIncome - b.monthlyIncome;
      case 'occupancy':
        return b.occupancyRate - a.occupancyRate;
      default:
        return 0;
    }
  });

  const propertyTypes = Array.from(new Set(mockProperties.map(p => p.type)));

  // Calculate stats
  const totalUnits = mockProperties.reduce((sum, property) => sum + property.units, 0);
  const averageOccupancy = mockProperties.reduce((sum, property) => sum + property.occupancyRate, 0) / mockProperties.length;
  const totalIncome = mockProperties.reduce((sum, property) => sum + property.monthlyIncome, 0);
  const yearlyTotalIncome = mockProperties.reduce((sum, property) => sum + property.monthlyIncome * 12, 0);

  // Get monthly growth percentage (mock data for demo)
  const getGrowthIndicator = (value: number) => {
    const isPositive = value >= 0;
    return (
      <View className="flex-row items-center">
        <Ionicons
          name={isPositive ? "trending-up" : "trending-down"}
          size={14}
          color={isPositive ? "#10b981" : "#ef4444"}
        />
        <Text className={`ml-1 text-xs ${isPositive ? "text-green-500" : "text-red-500"}`}>
          {isPositive ? "+" : ""}{value}%
        </Text>
      </View>
    );
  };

  // Render property card
  const renderPropertyCard = ({ item }: { item: Property }) => (
    <TouchableOpacity 
      className={`mb-4 rounded-xl overflow-hidden border ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}
      onPress={() => router.push(`/property/${item.id}`)}
      style={{ elevation: 3 }}
    >
      <Image 
        source={item.imageUrl} 
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
          onPress={() => router.push(`/property/${item.id}`)}
        >
          <Text className="text-white font-medium">View Details</Text>
          <Ionicons name="arrow-forward" size={16} color="white" style={{ marginLeft: 4 }} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className={`flex-1 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
    
      {/* Stats Overview */}
      <ScrollView className="flex-1">
        <View className="px-4 pt-2 pb-4">
          <View className="flex-row items-center justify-between mb-6">
            <Text className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Properties Overview</Text>
            <View className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900">
              <Text className="text-blue-800 dark:text-blue-100 text-xs font-medium">
                {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
              </Text>
            </View>
          </View>
          
          <Animated.View 
            style={{ 
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }]
            }}
            className="flex-row justify-between mb-6"
          >
            {/* Properties Stat */}
            <View 
              className={`flex-1 mr-2 p-4 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}
              style={{ elevation: 2 }}
            >
              <View className="flex-row items-center justify-between mb-1">
                <Text className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Properties</Text>
                <View className={`p-1.5 rounded-lg ${isDark ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                  <Ionicons name="business" size={16} color={isDark ? "#60a5fa" : "#2563eb"} />
                </View>
              </View>
              <Text className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                {mockProperties.length}
              </Text>
              {getGrowthIndicator(15)} 
            </View>
            
            {/* Units Stat */}
            <View 
              className={`flex-1 mx-2 p-4 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}
              style={{ elevation: 2 }}
            >
              <View className="flex-row items-center justify-between mb-1">
                <Text className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Units</Text>
                <View className={`p-1.5 rounded-lg ${isDark ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
                  <Ionicons name="grid" size={16} color={isDark ? "#c084fc" : "#7c3aed"} />
                </View>
              </View>
              <Text className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                {totalUnits}
              </Text>
              {getGrowthIndicator(8)}
            </View>
            
            {/* Occupancy Stat */}
            <View 
              className={`flex-1 ml-2 p-4 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}
              style={{ elevation: 2 }}
            >
              <View className="flex-row items-center justify-between mb-1">
                <Text className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Occupancy</Text>
                <View className={`p-1.5 rounded-lg ${isDark ? 'bg-green-900/30' : 'bg-green-50'}`}>
                  <Ionicons name="stats-chart" size={16} color={isDark ? "#4ade80" : "#16a34a"} />
                </View>
              </View>
              <Text className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                {averageOccupancy.toFixed(1)}%
              </Text>
              {getGrowthIndicator(3.5)}
            </View>
          </Animated.View>
          
          {/* Monthly Income Card */}
          {/* <Animated.View 
            style={{ 
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
              delay: 100
            }}
            className="mb-4"
          >
            <View 
              className={`p-4 mb-4 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}
              style={{ elevation: 2 }}
            >
              <View className="flex-row justify-between items-center mb-1">
                <Text className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Monthly Income
                </Text>
                <View className={`p-1.5 rounded-lg ${isDark ? 'bg-amber-900/30' : 'bg-amber-50'}`}>
                  <Ionicons name="cash" size={16} color={isDark ? "#fbbf24" : "#d97706"} />
                </View>
              </View>
              <Text className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                ₦{totalIncome.toLocaleString()}
              </Text>
              
              <View className="flex-row justify-between items-center mt-3">
                <View className="flex-row items-center">
                  {getGrowthIndicator(12.3)}
                  <Text className={`ml-1 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>from last month</Text>
                </View>
                <Text className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>90% of target</Text>
              </View>
              
              {/* Progress bar 
              <View className="mt-2 w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <View className="h-full bg-amber-500 rounded-full" style={{ width: '90%' }} />
              </View>
            </View>
          </Animated.View>}
          
          {/* Yearly Income Card */}
          <Animated.View 
            style={{ 
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
              delay: 200
            }}
            className="mb-6"
          >
            <View 
              className={`p-4 mb-4 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}
              style={{ elevation: 2 }}
            >
              <View className="flex-row justify-between items-center mb-1">
                <Text className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Yearly Income
                </Text>
                <View className={`p-1.5 rounded-lg ${isDark ? 'bg-teal-900/30' : 'bg-teal-50'}`}>
                  <Ionicons name="calendar" size={16} color={isDark ? "#2dd4bf" : "#0d9488"} />
                </View>
              </View>
              <Text className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                ₦{yearlyTotalIncome.toLocaleString()}
              </Text>
              
              <View className="flex-row justify-between items-center mt-3">
                <View className="flex-row items-center">
                  {getGrowthIndicator(8.7)}
                  <Text className={`ml-1 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>YoY growth</Text>
                </View>
                <Text className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>85% of annual target</Text>
              </View>
              
              {/* Progress bar */}
              <View className="mt-2 w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <View className="h-full bg-teal-500 rounded-full" style={{ width: '85%' }} />
              </View>
            </View>
          </Animated.View> 
        
          
          {/* Sort options */}
          <View className="mb-6">
            <Text className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Sort by:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {/* <TouchableOpacity 
                className={`mr-2 px-4 py-2 rounded-full ${sortBy === 'name' ? 'bg-blue-500' : isDark ? 'bg-gray-700' : 'bg-gray-200'}`}
                onPress={() => setSortBy('name')}
              >
                <Text className={`${sortBy === 'name' ? 'text-white' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>Name</Text>
              </TouchableOpacity> */}
              <TouchableOpacity 
                className={`mr-2 px-4 py-2 rounded-full ${sortBy === 'income-high' ? 'bg-blue-500' : isDark ? 'bg-gray-700' : 'bg-gray-200'}`}
                onPress={() => setSortBy('income-high')}
              >
                <Text className={`${sortBy === 'income-high' ? 'text-white' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>Highest Income</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                className={`mr-2 px-4 py-2 rounded-full ${sortBy === 'income-low' ? 'bg-blue-500' : isDark ? 'bg-gray-700' : 'bg-gray-200'}`}
                onPress={() => setSortBy('income-low')}
              >
                <Text className={`${sortBy === 'income-low' ? 'text-white' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>Lowest Income</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                className={`mr-2 px-4 py-2 rounded-full ${sortBy === 'occupancy' ? 'bg-blue-500' : isDark ? 'bg-gray-700' : 'bg-gray-200'}`}
                onPress={() => setSortBy('occupancy')}
              >
                <Text className={`${sortBy === 'occupancy' ? 'text-white' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>Occupancy</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          
          {/* Property List */}
          <Text className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Your Properties ({sortedProperties.length})
          </Text>
          
          {sortedProperties.map(property => (
            <View key={property.id}>
              {renderPropertyCard({ item: property })}
            </View>
          ))}
        </View>
      </ScrollView>
      
      {/* Floating Action Button */}
      <TouchableOpacity 
        className="absolute bottom-6 right-6 bg-blue-500 w-16 h-16 rounded-full items-center justify-center"
        style={{ elevation: 5 }}
        onPress={() => router.push('/add-property')}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
