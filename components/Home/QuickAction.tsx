import { useTheme } from '@/context/ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function QuickAction() {

    const {isDark} = useTheme()
    const router = useRouter()
  return (
    <View className="mt-1 px-4">
          <View
            className={`${
              isDark ? "bg-gray-800" : "bg-white"
            } rounded-xl shadow-md p-4 mb-4`}
          >
            <Text
              className={`text-lg font-bold ${
                isDark ? "text-gray-200" : "text-gray-800"
              } mb-3`}
            >
              Quick Actions
            </Text>
            <View className="flex-row justify-between">
              <TouchableOpacity
                className="items-center"
                onPress={() => router.push("../AddProperty")}
              >
                <View
                  className={`w-12 h-12 rounded-full ${
                    isDark ? "bg-indigo-900/50" : "bg-indigo-100"
                  } items-center justify-center mb-1`}
                >
                  <Ionicons
                    name="add-circle-outline"
                    size={20}
                    color={isDark ? "#818cf8" : "#4f46e5"}
                  />
                </View>
                <Text
                  className={`text-xs ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Add Property
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="items-center"
                onPress={() => router.push("../AddTenant")}
              >
                <View
                  className={`w-12 h-12 rounded-full ${
                    isDark ? "bg-indigo-900/50" : "bg-indigo-100"
                  } items-center justify-center mb-1`}
                >
                  <Ionicons
                    name="person-add-outline"
                    size={20}
                    color={isDark ? "#818cf8" : "#4f46e5"}
                  />
                </View>
                <Text
                  className={`text-xs ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Add Tenant
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="items-center"
                onPress={() => router.push("../RecordPayment")}
              >
                <View
                  className={`w-12 h-12 rounded-full ${
                    isDark ? "bg-indigo-900/50" : "bg-indigo-100"
                  } items-center justify-center mb-1`}
                >
                  <Ionicons
                    name="cash-outline"
                    size={20}
                    color={isDark ? "#818cf8" : "#4f46e5"}
                  />
                </View>
                <Text
                  className={`text-xs ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Record Payment
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="items-center"
                onPress={() => router.push("../AddMaintenance")}
              >
                <View
                  className={`w-12 h-12 rounded-full ${
                    isDark ? "bg-indigo-900/50" : "bg-indigo-100"
                  } items-center justify-center mb-1`}
                >
                  <Ionicons
                    name="build-outline"
                    size={20}
                    color={isDark ? "#818cf8" : "#4f46e5"}
                  />
                </View>
                <Text
                  className={`text-xs ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Maintenance
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

  )
}