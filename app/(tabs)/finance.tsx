// import React, { useState, useEffect } from 'react';
// import { 
//   View, 
//   Text, 
//   ScrollView, 
//   TouchableOpacity, 
//   Image,
//   TextInput,
//   StyleSheet
// } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons } from '@expo/vector-icons';
// import { router } from 'expo-router';
// import { useTheme } from '@/context/ThemeContext';

// // Type definitions
// type TransactionType = 'income' | 'expense';
// type TransactionCategory = 'rent' | 'maintenance' | 'utilities' | 'insurance' | 'taxes' | 'other';
// type TransactionStatus = 'completed' | 'pending' | 'failed';

// interface Transaction {
//   id: string;
//   date: string;
//   amount: number;
//   type: TransactionType;
//   category: TransactionCategory;
//   description: string;
//   property?: string;
//   unit?: string;
//   tenant?: string;
//   status: TransactionStatus;
//   receipt?: string;
// }

// // Sample data
// const sampleTransactions: Transaction[] = [
//   {
//     id: '1',
//     date: '2025-05-10',
//     amount: 1200,
//     type: 'income',
//     category: 'rent',
//     description: 'May Rent Payment',
//     property: 'Oakwood Apartments',
//     unit: '101',
//     tenant: 'John Doe',
//     status: 'completed'
//   },
//   {
//     id: '2',
//     date: '2025-05-08',
//     amount: 350,
//     type: 'expense',
//     category: 'maintenance',
//     description: 'Plumbing Repair',
//     property: 'Oakwood Apartments',
//     unit: '103',
//     status: 'completed'
//   },
//   {
//     id: '3',
//     date: '2025-05-05',
//     amount: 950,
//     type: 'income',
//     category: 'rent',
//     description: 'May Rent Payment',
//     property: 'Parkview Heights',
//     unit: '2B',
//     tenant: 'Emma Wilson',
//     status: 'completed'
//   },
//   {
//     id: '4',
//     date: '2025-05-03',
//     amount: 180,
//     type: 'expense',
//     category: 'utilities',
//     description: 'Water Bill',
//     property: 'Oakwood Apartments',
//     status: 'completed'
//   },
//   {
//     id: '5',
//     date: '2025-05-01',
//     amount: 1500,
//     type: 'expense',
//     category: 'insurance',
//     description: 'Property Insurance - Q2',
//     property: 'All Properties',
//     status: 'completed'
//   },
//   {
//     id: '6',
//     date: '2025-04-28',
//     amount: 1100,
//     type: 'income',
//     category: 'rent',
//     description: 'May Rent Payment',
//     property: 'Skyline Residences',
//     unit: '5A',
//     tenant: 'Michael Brown',
//     status: 'completed'
//   },
//   {
//     id: '7',
//     date: '2025-04-25',
//     amount: 250,
//     type: 'expense',
//     category: 'maintenance',
//     description: 'Landscaping',
//     property: 'Parkview Heights',
//     status: 'completed'
//   },
//   {
//     id: '8',
//     date: '2025-05-15',
//     amount: 1000,
//     type: 'income',
//     category: 'rent',
//     description: 'June Rent Payment (Early)',
//     property: 'Oakwood Apartments',
//     unit: '105',
//     tenant: 'Sarah Johnson',
//     status: 'pending'
//   }
// ];

// export default function FinanceScreen() {
//   const { isDark } = useTheme();
//   const [transactions, setTransactions] = useState<Transaction[]>(sampleTransactions);
//   const [filterType, setFilterType] = useState<TransactionType | null>(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [dateRange, setDateRange] = useState('month'); // 'week', 'month', 'year'

//   // Calculate summary statistics
//   const totalIncome = transactions
//     .filter(t => t.type === 'income' && t.status === 'completed')
//     .reduce((sum, t) => sum + t.amount, 0);
  
//   const totalExpenses = transactions
//     .filter(t => t.type === 'expense' && t.status === 'completed')
//     .reduce((sum, t) => sum + t.amount, 0);
  
//   const netIncome = totalIncome - totalExpenses;
  
//   const pendingIncome = transactions
//     .filter(t => t.type === 'income' && t.status === 'pending')
//     .reduce((sum, t) => sum + t.amount, 0);

//   // Filter transactions
//   const filteredTransactions = transactions.filter(transaction => {
//     // Filter by type
//     if (filterType !== null && transaction.type !== filterType) {
//       return false;
//     }
    
//     // Filter by search query
//     if (searchQuery) {
//       const query = searchQuery.toLowerCase();
//       return (
//         transaction.description.toLowerCase().includes(query) ||
//         transaction.property?.toLowerCase().includes(query) ||
//         transaction.tenant?.toLowerCase().includes(query) ||
//         transaction.category.toLowerCase().includes(query)
//       );
//     }
    
//     return true;
//   });

//   // Format date for display
//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
//   };

//   // Get color for transaction amount
//   const getAmountColor = (type: TransactionType) => {
//     if (type === 'income') {
//       return 'text-green-500';
//     } else {
//       return 'text-red-500';
//     }
//   };

//   // Get icon for transaction category
//   const getCategoryIcon = (category: TransactionCategory) => {
//     switch (category) {
//       case 'rent':
//         return 'home-outline';
//       case 'maintenance':
//         return 'hammer-outline';
//       case 'utilities':
//         return 'flash-outline';
//       case 'insurance':
//         return 'shield-outline';
//       case 'taxes':
//         return 'document-text-outline';
//       default:
//         return 'ellipsis-horizontal-outline';
//     }
//   };

//   // Get color for transaction status
//   const getStatusColor = (status: TransactionStatus) => {
//     switch (status) {
//       case 'completed':
//         return 'text-green-500';
//       case 'pending':
//         return 'text-yellow-500';
//       case 'failed':
//         return 'text-red-500';
//       default:
//         return isDark ? 'text-white' : 'text-gray-800';
//     }
//   };

//   return (
//     <SafeAreaView className={`flex-1 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
//       <StatusBar style={isDark ? 'light' : 'dark'} />
      
//       <ScrollView className="flex-1">
//         <View className="p-4">
//           <Text className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>Financial Overview</Text>
          
//           {/* Date Range Selector */}
//           <View className="flex-row justify-between mb-4">
//             <TouchableOpacity 
//               className={`flex-1 py-2 ${dateRange === 'week' ? 'border-b-2 border-blue-500' : ''}`}
//               onPress={() => setDateRange('week')}
//             >
//               <Text className={`text-center ${dateRange === 'week' ? 'text-blue-500 font-medium' : isDark ? 'text-gray-300' : 'text-gray-600'}`}>Week</Text>
//             </TouchableOpacity>
//             <TouchableOpacity 
//               className={`flex-1 py-2 ${dateRange === 'month' ? 'border-b-2 border-blue-500' : ''}`}
//               onPress={() => setDateRange('month')}
//             >
//               <Text className={`text-center ${dateRange === 'month' ? 'text-blue-500 font-medium' : isDark ? 'text-gray-300' : 'text-gray-600'}`}>Month</Text>
//             </TouchableOpacity>
//             <TouchableOpacity 
//               className={`flex-1 py-2 ${dateRange === 'year' ? 'border-b-2 border-blue-500' : ''}`}
//               onPress={() => setDateRange('year')}
//             >
//               <Text className={`text-center ${dateRange === 'year' ? 'text-blue-500 font-medium' : isDark ? 'text-gray-300' : 'text-gray-600'}`}>Year</Text>
//             </TouchableOpacity>
//           </View>
          
//           {/* Financial Summary */}
//           <View className={`mb-6 p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
//             <View className="flex-row justify-between mb-3">
//               <Text className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Total Income</Text>
//               <Text className={`text-lg font-bold text-green-500`}>${totalIncome.toLocaleString()}</Text>
//             </View>
//             <View className="flex-row justify-between mb-3">
//               <Text className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Total Expenses</Text>
//               <Text className={`text-lg font-bold text-red-500`}>${totalExpenses.toLocaleString()}</Text>
//             </View>
//             <View className="border-t border-gray-200 dark:border-gray-700 my-2 pt-2">
//               <View className="flex-row justify-between">
//                 <Text className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Net Income</Text>
//                 <Text className={`text-lg font-bold ${netIncome >= 0 ? 'text-green-500' : 'text-red-500'}`}>
//                   ${netIncome.toLocaleString()}
//                 </Text>
//               </View>
//             </View>
//             <View className="flex-row justify-between mt-3">
//               <Text className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Pending Income</Text>
//               <Text className={`text-sm font-medium text-yellow-500`}>${pendingIncome.toLocaleString()}</Text>
//             </View>
//           </View>
          
//           {/* Quick Actions */}
//           <View className="flex-row justify-between mb-6">
//             <TouchableOpacity 
//               className={`py-3 px-4 rounded-lg ${isDark ? 'bg-blue-600' : 'bg-blue-500'} flex-1 mr-2 items-center`}
//               onPress={() => router.push('/add-transaction?type=income')}
//             >
//               <Ionicons name="add-circle-outline" size={24} color="white" />
//               <Text className="text-white font-medium mt-1">Add Income</Text>
//             </TouchableOpacity>
//             <TouchableOpacity 
//               className={`py-3 px-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-600'} flex-1 ml-2 items-center`}
//               onPress={() => router.push('/add-transaction?type=expense')}
//             >
//               <Ionicons name="remove-circle-outline" size={24} color="white" />
//               <Text className="text-white font-medium mt-1">Add Expense</Text>
//             </TouchableOpacity>
//           </View>
          
//           {/* Search and Filter */}
//           <View className={`flex-row items-center p-2 mb-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
//             <Ionicons name="search" size={20} color={isDark ? "#BBB" : "#999"} />
//             <TextInput
//               className={`flex-1 ml-2 p-2 ${isDark ? 'text-white' : 'text-gray-800'}`}
//               placeholder="Search transactions..."
//               placeholderTextColor={isDark ? "#999" : "#999"}
//               value={searchQuery}
//               onChangeText={setSearchQuery}
//             />
//             {searchQuery ? (
//               <TouchableOpacity onPress={() => setSearchQuery('')}>
//                 <Ionicons name="close-circle" size={20} color={isDark ? "#BBB" : "#999"} />
//               </TouchableOpacity>
//             ) : null}
//           </View>
          
//           {/* Transaction Type Filters */}
//           <View className="mb-6">
//             <Text className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Filter by type:</Text>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//               <TouchableOpacity 
//                 className={`mr-2 px-4 py-2 rounded-full ${filterType === null ? 'bg-blue-500' : isDark ? 'bg-gray-700' : 'bg-gray-200'}`}
//                 onPress={() => setFilterType(null)}
//               >
//                 <Text className={`${filterType === null ? 'text-white' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>All</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 className={`mr-2 px-4 py-2 rounded-full ${filterType === 'income' ? 'bg-green-500' : isDark ? 'bg-gray-700' : 'bg-gray-200'}`}
//                 onPress={() => setFilterType('income')}
//               >
//                 <Text className={`${filterType === 'income' ? 'text-white' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>Income</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 className={`mr-2 px-4 py-2 rounded-full ${filterType === 'expense' ? 'bg-red-500' : isDark ? 'bg-gray-700' : 'bg-gray-200'}`}
//                 onPress={() => setFilterType('expense')}
//               >
//                 <Text className={`${filterType === 'expense' ? 'text-white' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>Expenses</Text>
//               </TouchableOpacity>
//             </ScrollView>
//           </View>
          
//           {/* Transaction List */}
//           <Text className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
//             Recent Transactions ({filteredTransactions.length})
//           </Text>
          
//           {filteredTransactions.map(transaction => (
//             <TouchableOpacity 
//               key={transaction.id}
//               className={`mb-4 p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}
//               onPress={() => router.push(`/transaction/${transaction.id}`)}
//             >
//               <View className="flex-row items-center">
//                 <View className={`w-10 h-10 rounded-full items-center justify-center ${transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'}`}>
//                   <Ionicons 
//                     name={getCategoryIcon(transaction.category)} 
//                     size={20} 
//                     color={transaction.type === 'income' ? '#10b981' : '#ef4444'} 
//                   />
//                 </View>
                
//                 <View className="flex-1 ml-3">
//                   <View className="flex-row justify-between items-start">
//                     <Text className={`text-base font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
//                       {transaction.description}
//                     </Text>
//                     <Text className={`text-base font-bold ${getAmountColor(transaction.type)}`}>
//                       {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toLocaleString()}
//                     </Text>
//                   </View>
                  
//                   <View className="flex-row justify-between mt-1">
//                     <Text className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
//                       {transaction.property}{transaction.unit ? ` • Unit ${transaction.unit}` : ''}
//                     </Text>
//                     <Text className={`text-sm ${getStatusColor(transaction.status)}`}>
//                       {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
//                     </Text>
//                   </View>
                  
//                   <View className="flex-row justify-between mt-2 items-center">
//                     <View className="flex-row items-center">
//                       <Ionicons name="calendar-outline" size={14} color={isDark ? "#BBB" : "#666"} />
//                       <Text className={`ml-1 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
//                         {formatDate(transaction.date)}
//                       </Text>
//                     </View>
                    
//                     {transaction.tenant && (
//                       <View className="flex-row items-center">
//                         <Ionicons name="person-outline" size={14} color={isDark ? "#BBB" : "#666"} />
//                         <Text className={`ml-1 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
//                           {transaction.tenant}
//                         </Text>
//                       </View>
//                     )}
//                   </View>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           ))}
          
//           {filteredTransactions.length === 0 && (
//             <View className={`p-8 rounded-lg items-center justify-center ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
//               <Ionicons name="search" size={48} color={isDark ? "#666" : "#ccc"} />
//               <Text className={`mt-4 text-center text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
//                 No transactions found matching your search
//               </Text>
//             </View>
//           )}
//         </View>
//       </ScrollView>
      
//       {/* Floating Action Button */}
//       <TouchableOpacity 
//         className="absolute bottom-6 right-6 bg-blue-500 w-16 h-16 rounded-full items-center justify-center shadow-lg"
//         onPress={() => router.push('/add-transaction')}
//       >
//         <Ionicons name="add" size={30} color="white" />
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// }





import { useTheme } from '@/context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Type definitions
type TransactionType = 'income' | 'expense';
type PaymentMethod = 'cash' | 'check' | 'bank_transfer' | 'credit_card' | 'online_payment' | 'other';

// Transaction Categories
type IncomeCategory = 'rent' | 'security_deposit' | 'late_fees' | 'other_income';
type ExpenseCategory = 'maintenance' | 'utilities' | 'insurance' | 'taxes' | 'mortgage' | 'property_management' | 'legal' | 'marketing' | 'other_expense';
type TransactionCategory = IncomeCategory | ExpenseCategory;

type TransactionStatus = 'completed' | 'pending' | 'failed' | 'partial';

// Rent payment status
type RentPaymentStatus = 'paid' | 'partially_paid' | 'overdue' | 'not_due';

interface Tenant {
  id: string;
  name: string;
  property: string;
  unit: string;
  rentAmount: number;
  paymentStatus: RentPaymentStatus;
  dueDate: string;
  leaseEnd: string;
}

interface Property {
  id: string;
  name: string;
  address: string;
  units: number;
  totalRent: number;
  expenses: number;
}

interface Transaction {
  id: string;
  date: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  description: string;
  property?: string;
  unit?: string;
  tenant?: string;
  status: TransactionStatus;
  paymentMethod?: PaymentMethod;
  receipt?: string;
  recurring?: boolean;
  notes?: string;
}

interface FinancialSummary {
  totalIncome: number;
  totalExpenses: number;
  netIncome: number;
  pendingIncome: number;
  overdue: number;
}

interface CategorySummary {
  category: TransactionCategory;
  amount: number;
  percentage: number;
}

// Monthly financial data for charts
interface MonthlyFinancialData {
  month: string;
  income: number;
  expenses: number;
  net: number;
}

// Sample data
const sampleTransactions: Transaction[] = [
  {
    id: '1',
    date: '2025-05-10',
    amount: 1200,
    type: 'income',
    category: 'rent',
    description: 'May Rent Payment',
    property: 'Oakwood Apartments',
    unit: '101',
    tenant: 'John Doe',
    status: 'completed'
  },
  {
    id: '2',
    date: '2025-05-08',
    amount: 350,
    type: 'expense',
    category: 'maintenance',
    description: 'Plumbing Repair',
    property: 'Oakwood Apartments',
    unit: '103',
    status: 'completed'
  },
  {
    id: '3',
    date: '2025-05-05',
    amount: 950,
    type: 'income',
    category: 'rent',
    description: 'May Rent Payment',
    property: 'Parkview Heights',
    unit: '2B',
    tenant: 'Emma Wilson',
    status: 'completed'
  },
  {
    id: '4',
    date: '2025-05-03',
    amount: 180,
    type: 'expense',
    category: 'utilities',
    description: 'Water Bill',
    property: 'Oakwood Apartments',
    status: 'completed'
  },
  {
    id: '5',
    date: '2025-05-01',
    amount: 1500,
    type: 'expense',
    category: 'insurance',
    description: 'Property Insurance - Q2',
    property: 'All Properties',
    status: 'completed'
  },
  {
    id: '6',
    date: '2025-04-28',
    amount: 1100,
    type: 'income',
    category: 'rent',
    description: 'May Rent Payment',
    property: 'Skyline Residences',
    unit: '5A',
    tenant: 'Michael Brown',
    status: 'completed'
  },
  {
    id: '7',
    date: '2025-04-25',
    amount: 250,
    type: 'expense',
    category: 'maintenance',
    description: 'Landscaping',
    property: 'Parkview Heights',
    status: 'completed'
  },
  {
    id: '8',
    date: '2025-05-15',
    amount: 1000,
    type: 'income',
    category: 'rent',
    description: 'June Rent Payment (Early)',
    property: 'Oakwood Apartments',
    unit: '105',
    tenant: 'Sarah Johnson',
    status: 'pending'
  }
];

export default function FinanceScreen() {
  const { isDark } = useTheme();
  const [transactions, setTransactions] = useState<Transaction[]>(sampleTransactions);
  const [filterType, setFilterType] = useState<TransactionType | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState('month'); // 'week', 'month', 'year'

  // Calculate summary statistics
  const totalIncome = transactions
    .filter(t => t.type === 'income' && t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalExpenses = transactions
    .filter(t => t.type === 'expense' && t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const netIncome = totalIncome - totalExpenses;
  
  const pendingIncome = transactions
    .filter(t => t.type === 'income' && t.status === 'pending')
    .reduce((sum, t) => sum + t.amount, 0);

  // Filter transactions
  const filteredTransactions = transactions.filter(transaction => {
    // Filter by type
    if (filterType !== null && transaction.type !== filterType) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        transaction.description.toLowerCase().includes(query) ||
        transaction.property?.toLowerCase().includes(query) ||
        transaction.tenant?.toLowerCase().includes(query) ||
        transaction.category.toLowerCase().includes(query)
      );
    }
    
    return true;
  });

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Get color for transaction amount
  const getAmountColor = (type: TransactionType) => {
    if (type === 'income') {
      return 'text-green-500';
    } else {
      return 'text-red-500';
    }
  };

  // Get icon for transaction category
  const getCategoryIcon = (category: TransactionCategory) => {
    switch (category) {
      case 'rent':
        return 'home-outline';
      case 'maintenance':
        return 'hammer-outline';
      case 'utilities':
        return 'flash-outline';
      case 'insurance':
        return 'shield-outline';
      case 'taxes':
        return 'document-text-outline';
      default:
        return 'ellipsis-horizontal-outline';
    }
  };

  // Get color for transaction status
  const getStatusColor = (status: TransactionStatus) => {
    switch (status) {
      case 'completed':
        return 'text-green-500';
      case 'pending':
        return 'text-yellow-500';
      case 'failed':
        return 'text-red-500';
      default:
        return isDark ? 'text-white' : 'text-gray-800';
    }
  };

  return (
    <SafeAreaView className={`flex-1 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      
      <ScrollView className="flex-1">
        <View className="p-4">
          <Text className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>Financial Overview</Text>
          
          {/* Date Range Selector */}
          <View className="flex-row justify-between mb-4">
            <TouchableOpacity 
              className={`flex-1 py-2 ${dateRange === 'week' ? 'border-b-2 border-blue-500' : ''}`}
              onPress={() => setDateRange('week')}
            >
              <Text className={`text-center ${dateRange === 'week' ? 'text-blue-500 font-medium' : isDark ? 'text-gray-300' : 'text-gray-600'}`}>Week</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className={`flex-1 py-2 ${dateRange === 'month' ? 'border-b-2 border-blue-500' : ''}`}
              onPress={() => setDateRange('month')}
            >
              <Text className={`text-center ${dateRange === 'month' ? 'text-blue-500 font-medium' : isDark ? 'text-gray-300' : 'text-gray-600'}`}>Month</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className={`flex-1 py-2 ${dateRange === 'year' ? 'border-b-2 border-blue-500' : ''}`}
              onPress={() => setDateRange('year')}
            >
              <Text className={`text-center ${dateRange === 'year' ? 'text-blue-500 font-medium' : isDark ? 'text-gray-300' : 'text-gray-600'}`}>Year</Text>
            </TouchableOpacity>
          </View>
          
          {/* Financial Summary */}
          <View className={`mb-6 p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
            <View className="flex-row justify-between mb-3">
              <Text className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Total Income</Text>
              <Text className={`text-lg font-bold text-green-500`}>₦{totalIncome.toLocaleString()}</Text>
            </View>
            <View className="flex-row justify-between mb-3">
              <Text className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Total Expenses</Text>
              <Text className={`text-lg font-bold text-red-500`}>₦{totalExpenses.toLocaleString()}</Text>
            </View>
            <View className="border-t border-gray-200 dark:border-gray-700 my-2 pt-2">
              <View className="flex-row justify-between">
                <Text className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Net Income</Text>
                <Text className={`text-lg font-bold ${netIncome >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  ₦{netIncome.toLocaleString()}
                </Text>
              </View>
            </View>
            <View className="flex-row justify-between mt-3">
              <Text className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Pending Income</Text>
              <Text className={`text-sm font-medium text-yellow-500`}>₦{pendingIncome.toLocaleString()}</Text>
            </View>
          </View>
          
          {/* Quick Actions */}
          <View className="flex-row justify-between mb-6">
            <TouchableOpacity 
              className={`py-3 px-4 rounded-lg ${isDark ? 'bg-blue-600' : 'bg-blue-500'} flex-1 mr-2 items-center`}
              onPress={() => router.push('/add-transaction?type=income')}
            >
              <Ionicons name="add-circle-outline" size={24} color="white" />
              <Text className="text-white font-medium mt-1">Add Income</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className={`py-3 px-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-600'} flex-1 ml-2 items-center`}
              onPress={() => router.push('/add-transaction?type=expense')}
            >
              <Ionicons name="remove-circle-outline" size={24} color="white" />
              <Text className="text-white font-medium mt-1">Add Expense</Text>
            </TouchableOpacity>
          </View>
          
          {/* Search and Filter */}
          <View className={`flex-row items-center p-2 mb-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <Ionicons name="search" size={20} color={isDark ? "#BBB" : "#999"} />
            <TextInput
              className={`flex-1 ml-2 p-2 ${isDark ? 'text-white' : 'text-gray-800'}`}
              placeholder="Search transactions..."
              placeholderTextColor={isDark ? "#999" : "#999"}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery ? (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <Ionicons name="close-circle" size={20} color={isDark ? "#BBB" : "#999"} />
              </TouchableOpacity>
            ) : null}
          </View>
          
          {/* Transaction Type Filters */}
          <View className="mb-6">
            <Text className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Filter by type:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity 
                className={`mr-2 px-4 py-2 rounded-full ${filterType === null ? 'bg-blue-500' : isDark ? 'bg-gray-700' : 'bg-gray-200'}`}
                onPress={() => setFilterType(null)}
              >
                <Text className={`${filterType === null ? 'text-white' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>All</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                className={`mr-2 px-4 py-2 rounded-full ${filterType === 'income' ? 'bg-green-500' : isDark ? 'bg-gray-700' : 'bg-gray-200'}`}
                onPress={() => setFilterType('income')}
              >
                <Text className={`${filterType === 'income' ? 'text-white' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>Income</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                className={`mr-2 px-4 py-2 rounded-full ${filterType === 'expense' ? 'bg-red-500' : isDark ? 'bg-gray-700' : 'bg-gray-200'}`}
                onPress={() => setFilterType('expense')}
              >
                <Text className={`${filterType === 'expense' ? 'text-white' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>Expenses</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          
          {/* Transaction List */}
          <Text className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Recent Transactions ({filteredTransactions.length})
          </Text>
          
          {filteredTransactions.map(transaction => (
            <TouchableOpacity 
              key={transaction.id}
              className={`mb-4 p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}
              onPress={() => router.push(`/transaction/${transaction.id}`)}
            >
              <View className="flex-row items-center">
                <View className={`w-10 h-10 rounded-full items-center justify-center ${transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'}`}>
                  <Ionicons 
                    name={getCategoryIcon(transaction.category)} 
                    size={20} 
                    color={transaction.type === 'income' ? '#10b981' : '#ef4444'} 
                  />
                </View>
                
                <View className="flex-1 ml-3">
                  <View className="flex-row justify-between items-start">
                    <Text className={`text-base font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                      {transaction.description}
                    </Text>
                    <Text className={`text-base font-bold ${getAmountColor(transaction.type)}`}>
                      {transaction.type === 'income' ? '+' : '-'}₦{transaction.amount.toLocaleString()}
                    </Text>
                  </View>
                  
                  <View className="flex-row justify-between mt-1">
                    <Text className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {transaction.property}{transaction.unit ? ` • Unit ${transaction.unit}` : ''}
                    </Text>
                    <Text className={`text-sm ${getStatusColor(transaction.status)}`}>
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </Text>
                  </View>
                  
                  <View className="flex-row justify-between mt-2 items-center">
                    <View className="flex-row items-center">
                      <Ionicons name="calendar-outline" size={14} color={isDark ? "#BBB" : "#666"} />
                      <Text className={`ml-1 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {formatDate(transaction.date)}
                      </Text>
                    </View>
                    
                    {transaction.tenant && (
                      <View className="flex-row items-center">
                        <Ionicons name="person-outline" size={14} color={isDark ? "#BBB" : "#666"} />
                        <Text className={`ml-1 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          {transaction.tenant}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
          
          {filteredTransactions.length === 0 && (
            <View className={`p-8 rounded-lg items-center justify-center ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
              <Ionicons name="search" size={48} color={isDark ? "#666" : "#ccc"} />
              <Text className={`mt-4 text-center text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                No transactions found matching your search
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
      
      {/* Floating Action Button */}
      <TouchableOpacity 
        className="absolute bottom-6 right-6 bg-blue-500 w-16 h-16 rounded-full items-center justify-center shadow-lg"
        onPress={() => router.push('/add-transaction')}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}