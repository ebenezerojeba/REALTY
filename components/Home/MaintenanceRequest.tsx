import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { maintenanceItems } from "./data";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function MaintenanceRequest() {
  const { isDark } = useTheme();
    const formatDate = (dateString: string | number | Date) => {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  return (
    <View className="px-4 mb-4">
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
            Maintenance Requests
          </Text>
          <TouchableOpacity onPress={() => router.push("../Maintenance")}>
            <Text
              className={`${
                isDark ? "text-indigo-400" : "text-indigo-600"
              } font-medium`}
            >
              View All
            </Text>
          </TouchableOpacity>
        </View>

        {maintenanceItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            className={`${
              isDark ? "bg-gray-700" : "bg-gray-50"
            } rounded-lg p-4 mb-3 flex-row justify-between items-center`}
            onPress={() =>
              router.push("../MaintenanceDetail", {
                // requestId: item.id,
              })
            }
          >
            <View className="flex-row items-center flex-1">
              <View
                className={`w-2 h-full rounded-full mr-3 ${
                  item.priority === "high"
                    ? "bg-red-500"
                    : item.priority === "medium"
                    ? "bg-amber-500"
                    : "bg-blue-500"
                }`}
              />
              <View className="flex-1">
                <Text
                  className={`font-bold ${
                    isDark ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {item.title}
                </Text>
                <Text
                  className={`text-xs ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  } mt-1`}
                  numberOfLines={1}
                >
                  {item.property}
                </Text>
                <Text
                  className={`text-xs ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  } mt-1`}
                >
                  Reported: {formatDate(item.date)}
                </Text>
              </View>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={isDark ? "#9ca3af" : "#9ca3af"}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
