import { useTheme } from "@/context/ThemeContext";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

// Mock upcoming payments
const upcomingPayments = [
  {
    id: 1,
    tenant: "Oluwashola Adeniyi",
    property: "4B, Ago Palace, Fetsac Town",
    amount: 300000,
    dueDate: "2025-05-20",
    status: "pending",
  },
  {
    id: 2,
    tenant: "Suyi Banke",
    property: "40, Osinfolarin, Akoka",
    amount: 1500000,
    dueDate: "2025-05-22",
    status: "pending",
  },
  {
    id: 3,
    tenant: "Fola Harrison",
    property: "90, Agbara, Akoka",
    amount: 1000000,
    dueDate: "2025-05-22",
    status: "pending",
  },
];
export default function UpcomingPayment() {
  const { isDark } = useTheme();
  const router = useRouter();
  // Format currency
  const formatCurrency = (amount: number) => {
    return "₦" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };
  // Format date
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
            Upcoming Payments
          </Text>
          <TouchableOpacity onPress={() => router.push("/finance")}>
            <Text
              className={`${
                isDark ? "text-indigo-400" : "text-indigo-600"
              } font-medium`}
            >
              View All
            </Text>
          </TouchableOpacity>
        </View>

        {upcomingPayments.length === 0 ? (
          <View className="items-center py-6">
            <Text className={`${isDark ? "text-gray-400" : "text-gray-500"}`}>
              No upcoming payments
            </Text>
          </View>
        ) : (
          upcomingPayments.map((payment) => (
            <TouchableOpacity
              key={payment.id}
              className={`${
                isDark ? "bg-amber-900/20" : "bg-amber-50"
              } rounded-lg p-4 mb-3 flex-row justify-between items-center`}
              onPress={() =>
                router.push("../PaymentDetail", {
                  //   paymentId: payment.id,
                })
              }
            >
              <View className="flex-1">
                <Text
                  className={`font-bold ${
                    isDark ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {payment.tenant}
                </Text>
                <Text
                  className={`text-xs ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  } mt-1`}
                  numberOfLines={1}
                >
                  {payment.property}
                </Text>
                <Text
                  className={`text-xs ${
                    isDark ? "text-amber-400" : "text-amber-800"
                  } mt-1`}
                >
                  Due: {formatDate(payment.dueDate)}
                </Text>
              </View>
              <View className="items-end">
                <Text
                  className={`font-bold ${
                    isDark ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {formatCurrency(payment.amount)}
                </Text>
                <View
                  className={`${
                    isDark ? "bg-amber-700/50" : "bg-amber-200"
                  } rounded-full px-3 py-1 mt-1`}
                >
                  <Text
                    className={`text-xs ${
                      isDark ? "text-amber-300" : "text-amber-800"
                    }`}
                  >
                    Pending
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}
      </View>
    </View>
  );
}
