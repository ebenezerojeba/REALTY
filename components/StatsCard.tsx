import { Text, View } from "react-native";

// Reusable StatCard Component
export const StatCard = ({
  label,
  value,
  color,
  isDark,
}: {
  label: string;
  value: string;
  color?: 'green' | 'red' | 'yellow';
  isDark?: boolean;
}) => {
  const bgColor = isDark ? 'bg-gray-800' : 'bg-white';
  const textColor = color
    ? `text-${color}-500`
    : isDark
    ? 'text-white'
    : 'text-gray-800';

  return (
    <View className={`flex-1 p-3 rounded-lg ${bgColor} shadow-sm`}>
      <Text className="text-sm text-gray-500">{label}</Text>
      <Text className={`text-xl font-bold ${textColor}`}>{value}</Text>
    </View>
  );
};