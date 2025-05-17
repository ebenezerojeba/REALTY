import { useTheme } from '@/context/ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { upcomingEvents } from './data'

export default function UpcomingEvents() {
    const {isDark} = useTheme()
    const router = useRouter()
      const formatDate = (dateString: string | number | Date) => {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  return (
     <View className="px-4 mb-6">
          <View
            className={`${
              isDark ? "bg-gray-800" : "bg-white"
            } rounded-xl shadow-md p-4`}
          >
            <View className="flex-row justify-between items-center mb-3">
              <Text
                className={`text-lg font-bold ${
                  isDark ? "text-gray-200" : "text-gray-800"
                }`}
              >
                Upcoming Events
              </Text>
              <TouchableOpacity onPress={() => router.push("../Calendar")}>
                <Text
                  className={`${
                    isDark ? "text-indigo-400" : "text-indigo-600"
                  } font-medium`}
                >
                  View Calendar
                </Text>
              </TouchableOpacity>
            </View>

            {upcomingEvents.map((event) => (
              <TouchableOpacity
                key={event.id}
                className={`${
                  isDark ? "bg-gray-700" : "bg-gray-50"
                } rounded-lg p-4 mb-3 flex-row items-center`}
                onPress={() =>router.push
                //   navigation.navigate("EventDetail", { eventId: event.id })
                }
              >
                <View
                  className={`${
                    isDark ? "bg-indigo-900/50" : "bg-indigo-100"
                  } p-2 rounded-lg mr-3`}
                >
                  <Ionicons
                    name="calendar-outline"
                    size={20}
                    color={isDark ? "#818cf8" : "#4f46e5"}
                  />
                </View>
                <View className="flex-1">
                  <Text
                    className={`font-bold ${
                      isDark ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    {event.title}
                  </Text>
                  <Text
                    className={`text-xs ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {event.property || `Tenant: ${event.tenant}`}
                  </Text>
                </View>
                <Text
                  className={`${
                    isDark ? "text-indigo-400" : "text-indigo-600"
                  } font-medium`}
                >
                  {formatDate(event.date)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
  )
}