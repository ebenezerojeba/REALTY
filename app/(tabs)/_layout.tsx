import { useTheme } from '@/context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
export default function TabsLayout() {
     const { isDark, toggleTheme } = useTheme();
  return (
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: '#1f65ff',
        tabBarInactiveTintColor: '#cccccc',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDark ? '#1f2937': '#ffffff',
          borderTopWidth: 1,
          elevation: 0,
          borderTopColor: isDark ? '#374151' : "#e5e7eb"
        },
      }}
    >
      <Tabs.Screen 
        name="home" 
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="properties" 
        options={{
          title: 'Properties',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="business-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="tenants" 
        options={{
          title: 'Tenants',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="finance" 
        options={{
          title: 'Finance',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" size={size} color={color} />
          ),
        }} 
      />
    </Tabs>
  );
}


// import React from 'react';
// import { Text, useColorScheme } from 'react-native';

// export default function TabsLayout() {
//   const colorScheme = useColorScheme();
//   const isDark = colorScheme === 'dark';

//   return (
//     <Tabs 
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: true,
//         tabBarStyle: {
//           backgroundColor: isDark ? '#1f2937' : '#ffffff',
//           borderTopWidth: 1,
//           borderTopColor: isDark ? '#374151' : '#e5e7eb',
//           elevation: 0,
//         },
//       }}
//     >
//       <Tabs.Screen 
//         name="home" 
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ focused }) => (
//             <Ionicons 
//               name={focused ? "home" : "home-outline"} 
//               size={24} 
//               color={focused ? (isDark ? '#818cf8' : '#4f46e5') : (isDark ? '#9ca3af' : '#6b7280')} 
//             />
//           ),
//           tabBarLabel: ({ focused }) => (
//             <Text style={{
//               fontSize: 12,
//               color: focused ? (isDark ? '#818cf8' : '#4f46e5') : (isDark ? '#9ca3af' : '#6b7280'),
//               fontWeight: focused ? '600' : '400'
//             }}>
//               Home
//             </Text>
//           ),
//         }}
//       />
//       <Tabs.Screen 
//         name="properties" 
//         options={{
//           title: 'Properties',
//           tabBarIcon: ({ focused }) => (
//             <Ionicons 
//               name={focused ? "business" : "business-outline"} 
//               size={24} 
//               color={focused ? (isDark ? '#818cf8' : '#4f46e5') : (isDark ? '#9ca3af' : '#6b7280')} 
//             />
//           ),
//           tabBarLabel: ({ focused }) => (
//             <Text style={{
//               fontSize: 12,
//               color: focused ? (isDark ? '#818cf8' : '#4f46e5') : (isDark ? '#9ca3af' : '#6b7280'),
//               fontWeight: focused ? '600' : '400'
//             }}>
//               Properties
//             </Text>
//           ),
//         }} 
//       />
//       <Tabs.Screen 
//         name="tenants" 
//         options={{
//           title: 'Tenants',
//           tabBarIcon: ({ focused }) => (
//             <Ionicons 
//               name={focused ? "people" : "people-outline"} 
//               size={24} 
//               color={focused ? (isDark ? '#818cf8' : '#4f46e5') : (isDark ? '#9ca3af' : '#6b7280')} 
//             />
//           ),
//           tabBarLabel: ({ focused }) => (
//             <Text style={{
//               fontSize: 12,
//               color: focused ? (isDark ? '#818cf8' : '#4f46e5') : (isDark ? '#9ca3af' : '#6b7280'),
//               fontWeight: focused ? '600' : '400'
//             }}>
//               Tenants
//             </Text>
//           ),
//         }} 
//       />
//       <Tabs.Screen 
//         name="finance" 
//         options={{
//           title: 'Finance',
//           tabBarIcon: ({ focused }) => (
//             <Ionicons 
//               name={focused ? "card" : "card-outline"} 
//               size={24} 
//               color={focused ? (isDark ? '#818cf8' : '#4f46e5') : (isDark ? '#9ca3af' : '#6b7280')} 
//             />
//           ),
//           tabBarLabel: ({ focused }) => (
//             <Text style={{
//               fontSize: 12,
//               color: focused ? (isDark ? '#818cf8' : '#4f46e5') : (isDark ? '#9ca3af' : '#6b7280'),
//               fontWeight: focused ? '600' : '400'
//             }}>
//               Finance
//             </Text>
//           ),
//         }} 
//       />
//       <Tabs.Screen 
//         name="more" 
//         options={{
//           title: 'More',
//           tabBarIcon: ({ focused }) => (
//             <Ionicons 
//               name={focused ? "menu" : "menu-outline"} 
//               size={24} 
//               color={focused ? (isDark ? '#818cf8' : '#4f46e5') : (isDark ? '#9ca3af' : '#6b7280')} 
//             />
//           ),

//           tabBarLabel: ({ focused }) => (
//             <Text style={{
//               fontSize: 12,
//               color: focused ? (isDark ? '#818cf8' : '#4f46e5') : (isDark ? '#9ca3af' : '#6b7280'),
//               fontWeight: focused ? '600' : '400'
//             }}>
//               More
//             </Text>
//           ),
//         }} 
//       />
//     </Tabs>
//   );
// }