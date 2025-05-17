import { useTheme } from '@/context/ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'




  // Mock data
  const properties = 5;
  const tenants = 15;
  const pendingRent = 3;
  const maintenanceRequests = 3;

export default function StatsCard() {
    const {isDark} = useTheme()

    const router = useRouter()

  return (
         
        <View className="px-2 mb-10">
          <View
            className={`${
              isDark ? "bg-gray-800" : "bg-white"
            } rounded-xl shadow-md p-2 mb-6`}
          >
            <View className="flex-row flex-wrap justify-between">
              {/* Properties Card */}
              <TouchableOpacity
                className={`w-[48%] ${
                  isDark ? "bg-blue-900/30" : "bg-blue-50"
                } rounded-lg p-4 mb-3`}
                onPress={() => router.push("/(tabs)/properties")}
              >
                <View className="items-center">
                  <View
                    className={`${
                      isDark ? "bg-blue-800/50" : "bg-blue-100"
                    } p-2 rounded-lg mb-2`}
                  >
                    <Ionicons
                      name="home-outline"
                      size={24}
                      color={isDark ? "#60a5fa" : "#3b82f6"}
                    />
                  </View>
                  <Text
                    className={`text-2xl font-bold ${
                      isDark ? "text-blue-400" : "text-blue-700"
                    }`}
                  >
                    {properties}
                  </Text>
                  <Text
                    className={`${
                      isDark ? "text-blue-400" : "text-blue-700"
                    } font-medium`}
                  >
                    Properties
                  </Text>
                </View>
              </TouchableOpacity>

              {/* Tenants Card */}
              <TouchableOpacity
                className={`w-[48%] ${
                  isDark ? "bg-green-900/30" : "bg-green-50"
                } rounded-lg p-4 mb-3`}
                onPress={() => router.push("/(tabs)/tenants")}
              >
                <View className="items-center">
                  <View
                    className={`${
                      isDark ? "bg-green-800/50" : "bg-green-100"
                    } p-2 rounded-lg mb-2`}
                  >
                    <Ionicons
                      name="people-outline"
                      size={24}
                      color={isDark ? "#34d399" : "#10b981"}
                    />
                  </View>
                  <Text
                    className={`text-2xl font-bold ${
                      isDark ? "text-green-400" : "text-green-700"
                    }`}
                  >
                    {tenants}
                  </Text>
                  <Text
                    className={`${
                      isDark ? "text-green-400" : "text-green-700"
                    } font-medium`}
                  >
                    Tenants
                  </Text>
                </View>
              </TouchableOpacity>

              {/* Pending Rent Card */}
              <TouchableOpacity
                className={`w-[48%] ${
                  isDark ? "bg-amber-900/30" : "bg-amber-50"
                } rounded-lg p-4 mb-1`}
                onPress={() => router.push("/(tabs)/finance")}
              >
                <View className="items-center">
                  <View
                    className={`${
                      isDark ? "bg-amber-800/50" : "bg-amber-100"
                    } p-2 rounded-lg mb-2`}
                  >
                    <Ionicons
                      name="card-outline"
                      size={24}
                      color={isDark ? "#fbbf24" : "#f59e0b"}
                    />
                  </View>
                  <Text
                    className={`text-2xl font-bold ${
                      isDark ? "text-amber-400" : "text-amber-700"
                    }`}
                  >
                    {pendingRent}
                  </Text>
                  <Text
                    className={`${
                      isDark ? "text-amber-400" : "text-amber-700"
                    } font-medium`}
                  >
                    Pending Rent
                  </Text>
                </View>
              </TouchableOpacity>

              {/* Maintenance Requests Card */}
              <TouchableOpacity
                className={`w-[48%] ${
                  isDark ? "bg-rose-900/30" : "bg-rose-50"
                } rounded-lg p-4 mb-1`}
                onPress={() => router.push("../Maintenance")}
              >
                <View className="items-center">
                  <View
                    className={`${
                      isDark ? "bg-rose-800/50" : "bg-rose-100"
                    } p-2 rounded-lg mb-2`}
                  >
                    <Ionicons
                      name="construct-outline"
                      size={24}
                      color={isDark ? "#fb7185" : "#f43f5e"}
                    />
                  </View>
                  <Text
                    className={`text-2xl font-bold ${
                      isDark ? "text-rose-400" : "text-rose-700"
                    }`}
                  >
                    {maintenanceRequests}
                  </Text>
                  <Text
                    className={`${
                      isDark ? "text-rose-400" : "text-rose-700"
                    } font-medium`}
                  >
                    Maintenance
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
  )
}