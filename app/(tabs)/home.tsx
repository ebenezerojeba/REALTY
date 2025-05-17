import Header from "@/components/Home/Header";
import MaintenanceRequest from "@/components/Home/MaintenanceRequest";
import QuickAction from "@/components/Home/QuickAction";
import StatsCard from "@/components/Home/StatsCard";
import UpcomingEvents from "@/components/Home/UpcomingEvents";
import UpcomingPayment from "@/components/Home/UpcomingPayment";
import { useTheme } from "@/context/ThemeContext";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

export default function Dashboard() {
  const { isDark } = useTheme();

  return (
    <SafeAreaView className={`flex-1 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      <StatusBar
        style={isDark ? "light" : "dark"}
        backgroundColor={isDark ? "#1e1e1e" : "#ffffff"}
      />
      <ScrollView className="flex mt-10" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header />

        {/* Quick Stats Card */}
        <StatsCard />

        {/* Quick Actions */}
        <QuickAction />

        {/* Upcoming Payments */}
        <UpcomingPayment />

        {/* Maintenance Requests */}
        <MaintenanceRequest />

        {/* Upcoming Events */}
        <UpcomingEvents />

      </ScrollView>
    </SafeAreaView>
  );
}
