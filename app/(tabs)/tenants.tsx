import { mockTenants } from "@/components/Tenants/data";
import TenantStats from "@/components/Tenants/TenantStats";
import { useTheme } from "@/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TenantsScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const colorScheme = useColorScheme();
  //   const isDark = colorScheme === 'light';

  const { isDark } = useTheme();

  // Filter tenants based on search query and status
  const filteredTenants = mockTenants.filter((tenant) => {
    const matchesSearch =
      tenant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tenant.property.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tenant.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      filterStatus === null || tenant.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  // Calculate statistics
  const totalTenants = mockTenants.length;
  const activeTenants = mockTenants.filter((t) => t.status === "active").length;
  const pastDueTenants = mockTenants.filter(
    (t) => t.status === "past_due"
  ).length;
  const noticeGivenTenants = mockTenants.filter(
    (t) => t.status === "notice_given"
  ).length;

  // Get total monthly rent
  const totalMonthlyRent = mockTenants.reduce(
    (sum, tenant) => sum + tenant.rentAmount,
    0
  );
  // Get total monthly rent
  const totalYearlyRent = mockTenants.reduce(
    (sum, tenant) => sum + tenant.rentAmount*12,
    0
  );

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-green-500";
      case "past_due":
        return "text-red-500";
      case "notice_given":
        return "text-yellow-500";
      default:
        return "text-gray-500";
    }
  };

  // Get status label
  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active":
        return "Active";
      case "past_due":
        return "Past Due";
      case "notice_given":
        return "Notice Given";
      default:
        return status;
    }
  };

  // Get payment status color
  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "text-green-500";
      case "partial":
        return "text-yellow-500";
      case "late":
        return "text-orange-500";
      case "unpaid":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <SafeAreaView
      className={`flex-1 ${isDark ? "bg-gray-900" : "bg-gray-100"}`}
    >
      <StatusBar style={isDark ? "light" : "dark"} />

      <ScrollView className="flex-1">
        <View className="p-4">
          <Text
            className={`text-2xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Tenant Management
          </Text>

          {/* Stats Overview */}

{/* <TenantStats
  isDark={isDark}
  totalTenants={120}
  activeTenants={98}
  pastDueTenants={22}
  noticeGivenTenants={5}
  totalMonthlyRent={500000}
  totalYearlyRent={6000000}
/> */}

          {/* Search and Filter */}
          <View
            className={`flex-row items-center p-2 mb-4 rounded-lg ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <Ionicons
              name="search"
              size={20}
              color={isDark ? "#BBB" : "#999"}
            />
            <TextInput
              className={`flex-1 ml-2 p-2 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
              placeholder="Search tenants..."
              placeholderTextColor={isDark ? "#999" : "#999"}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery ? (
              <TouchableOpacity onPress={() => setSearchQuery("")}>
                <Ionicons
                  name="close-circle"
                  size={20}
                  color={isDark ? "#BBB" : "#999"}
                />
              </TouchableOpacity>
            ) : null}
          </View>

          {/* Status Filters */}
          <View className="mb-6">
            <Text
              className={`text-sm font-medium mb-2 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Filter by status:
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                className={`mr-2 px-4 py-2 rounded-full ${
                  filterStatus === null
                    ? "bg-blue-500"
                    : isDark
                    ? "bg-gray-700"
                    : "bg-gray-200"
                }`}
                onPress={() => setFilterStatus(null)}
              >
                <Text
                  className={`${
                    filterStatus === null
                      ? "text-white"
                      : isDark
                      ? "text-gray-300"
                      : "text-gray-700"
                  }`}
                >
                  All
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className={`mr-2 px-4 py-2 rounded-full ${
                  filterStatus === "active"
                    ? "bg-green-500"
                    : isDark
                    ? "bg-gray-700"
                    : "bg-gray-200"
                }`}
                onPress={() => setFilterStatus("active")}
              >
                <Text
                  className={`${
                    filterStatus === "active"
                      ? "text-white"
                      : isDark
                      ? "text-gray-300"
                      : "text-gray-700"
                  }`}
                >
                  Active
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className={`mr-2 px-4 py-2 rounded-full ${
                  filterStatus === "past_due"
                    ? "bg-red-500"
                    : isDark
                    ? "bg-gray-700"
                    : "bg-gray-200"
                }`}
                onPress={() => setFilterStatus("past_due")}
              >
                <Text
                  className={`${
                    filterStatus === "past_due"
                      ? "text-white"
                      : isDark
                      ? "text-gray-300"
                      : "text-gray-700"
                  }`}
                >
                  Past Due
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className={`mr-2 px-4 py-2 rounded-full ${
                  filterStatus === "notice_given"
                    ? "bg-yellow-500"
                    : isDark
                    ? "bg-gray-700"
                    : "bg-gray-200"
                }`}
                onPress={() => setFilterStatus("notice_given")}
              >
                <Text
                  className={`${
                    filterStatus === "notice_given"
                      ? "text-white"
                      : isDark
                      ? "text-gray-300"
                      : "text-gray-700"
                  }`}
                >
                  Notice Given
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          {/* Tenant List */}
          <Text
            className={`text-lg font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Tenants ({filteredTenants.length})
          </Text>

          {filteredTenants.map((tenant) => (
            <TouchableOpacity
              key={tenant.id}
              className={`mb-4 p-4 rounded-lg ${
                isDark ? "bg-gray-800" : "bg-white"
              } shadow-sm`}
              onPress={() => router.push(`/tenant/${tenant.id}`)}
            >
              <View className="flex-row">
                <Image
                  source={tenant.imageUrl}
                  className="w-16 h-16 rounded-full"
                />
                <View className="flex-1 ml-3">
                  <View className="flex-row justify-between items-start">
                    <Text
                      className={`text-lg font-semibold ${
                        isDark ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {tenant.name}
                    </Text>
                    <Text
                      className={`text-sm font-medium ${getStatusColor(
                        tenant.status
                      )}`}
                    >
                      {getStatusLabel(tenant.status)}
                    </Text>
                  </View>

                  <Text
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {tenant.property} • Unit {tenant.unit}
                  </Text>

                  <Text
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    } mt-1`}
                  >
                    ₦{tenant.rentAmount.toLocaleString()}/year{" "}
                  </Text>

                  <View className="flex-row justify-between mt-2">
                    <View className="flex-row items-center">
                      <Ionicons
                        name="calendar-outline"
                        size={14}
                        color={isDark ? "#BBB" : "#666"}
                      />
                      <Text
                        className={`ml-1 text-xs ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        Lease ends{" "}
                        {new Date(tenant.leaseEnd).toLocaleDateString()}
                      </Text>
                    </View>

                    <View className="flex-row items-center">
                      <Ionicons
                        name="cash-outline"
                        size={14}
                        color={isDark ? "#BBB" : "#666"}
                      />
                      <Text
                        className={`ml-1 text-xs ${getPaymentStatusColor(
                          tenant.paymentHistory[0].status
                        )}`}
                      >
                        {tenant.paymentHistory[0].status === "paid"
                          ? "Paid"
                          : tenant.paymentHistory[0].status === "partial"
                          ? "Partial"
                          : tenant.paymentHistory[0].status === "late"
                          ? "Late"
                          : "Unpaid"}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View className="flex-row justify-between mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                <TouchableOpacity
                  className="flex-row items-center"
                  onPress={(e) => {
                    e.stopPropagation();
                    // Open mail app or copy email
                  }}
                >
                  <Ionicons
                    name="mail-outline"
                    size={16}
                    color={isDark ? "#BBB" : "#666"}
                  />
                  <Text
                    className={`ml-1 text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Email
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="flex-row items-center"
                  onPress={(e) => {
                    e.stopPropagation();
                    // Open phone app
                  }}
                >
                  <Ionicons
                    name="call-outline"
                    size={16}
                    color={isDark ? "#BBB" : "#666"}
                  />
                  <Text
                    className={`ml-1 text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Call
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="flex-row items-center"
                  onPress={(e) => {
                    e.stopPropagation();
                    // Open messages app
                  }}
                >
                  <Ionicons
                    name="chatbubble-ellipses-outline"
                    size={16}
                    color={isDark ? "#BBB" : "#666"}
                  />
                  <Text
                    className={`ml-1 text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Message
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}

          {filteredTenants.length === 0 && (
            <View
              className={`p-8 rounded-lg items-center justify-center ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <Ionicons
                name="search"
                size={48}
                color={isDark ? "#666" : "#ccc"}
              />
              <Text
                className={`mt-4 text-center text-lg ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                No tenants found matching your search
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        className="absolute bottom-6 right-6 bg-blue-500 w-16 h-16 rounded-full items-center justify-center shadow-lg"
        onPress={() => router.push("/add-tenant")}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
