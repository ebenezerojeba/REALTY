// import React from 'react';
// import { View, Text } from 'react-native';

// type TenantStatsProps = {
//   isDark: boolean;
//   totalTenants: number;
//   activeTenants: number;
//   pastDueTenants: number;
//   noticeGivenTenants: number;
//   totalMonthlyRent: number;
//   totalYearlyRent: number;
// };

// const TenantStats: React.FC<TenantStatsProps> = ({
//   isDark,
//   totalTenants,
//   activeTenants,
//   pastDueTenants,
//   noticeGivenTenants,
//   totalMonthlyRent,
//   totalYearlyRent,
// }) => {
//   const cardStyle = (extraStyles?: string) =>
//     `flex-1 p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm ${extraStyles}`;

//   const labelTextStyle = `text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`;
//   const valueTextStyle = `text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`;

//   return (
//     <>
//       <View className="flex-row justify-between mb-6">
//         <View className={cardStyle('mr-2')}>
//           <Text className={labelTextStyle}>Total</Text>
//           <Text className={valueTextStyle}>{totalTenants}</Text>
//         </View>
//         <View className={cardStyle('mx-2')}>
//           <Text className={labelTextStyle}>Active</Text>
//           <Text className="text-xl font-bold text-green-500">{activeTenants}</Text>
//         </View>
//         <View className={cardStyle('ml-2')}>
//           <Text className={labelTextStyle}>Past Due</Text>
//           <Text className="text-xl font-bold text-red-500">{pastDueTenants}</Text>
//         </View>
//       </View>

//       <View className="flex-row justify-between mb-6">
//         <View className={cardStyle('mr-2')}>
//           <Text className={labelTextStyle}>Notice Given</Text>
//           <Text className="text-xl font-bold text-yellow-500">{noticeGivenTenants}</Text>
//         </View>
//         <View className={cardStyle('ml-2')}>
//           <Text className={labelTextStyle}>Monthly Rent</Text>
//           <Text className={valueTextStyle}>₦{totalMonthlyRent.toLocaleString()}</Text>
//         </View>
//         <View className={cardStyle('ml-2')}>
//           <Text className={labelTextStyle}>Yearly Rent</Text>
//           <Text className={valueTextStyle}>₦{totalYearlyRent.toLocaleString()}</Text>
//         </View>
//       </View>
//     </>
//   );
// };

// export default TenantStats;



import { AlertCircle, CreditCard, LogOut, TrendingDown, TrendingUp, Users } from 'lucide-react';
import React, { useEffect, useState } from 'react';

type TenantStatsProps = {
  isDark?: boolean;
  totalTenants: number;
  activeTenants: number;
  pastDueTenants: number;
  noticeGivenTenants: number;
  totalMonthlyRent: number;
  totalYearlyRent: number;
};

const TenantStats: React.FC<TenantStatsProps> = ({
  isDark = false,
  totalTenants,
  activeTenants,
  pastDueTenants,
  noticeGivenTenants,
  totalMonthlyRent,
  totalYearlyRent,
}) => {
  // Calculate occupancy rate
  const occupancyRate = totalTenants > 0 
    ? Math.round((activeTenants / totalTenants) * 100) 
    : 0;
  
  // Animations for numbers
  const [animatedValues, setAnimatedValues] = useState({
    totalTenants: 0,
    activeTenants: 0,
    pastDueTenants: 0,
    noticeGivenTenants: 0,
    totalMonthlyRent: 0,
    totalYearlyRent: 0,
    occupancyRate: 0
  });

  useEffect(() => {
    // Animate values on load
    const interval = setInterval(() => {
      setAnimatedValues(prev => ({
        totalTenants: Math.min(prev.totalTenants + Math.ceil(totalTenants / 20), totalTenants),
        activeTenants: Math.min(prev.activeTenants + Math.ceil(activeTenants / 20), activeTenants),
        pastDueTenants: Math.min(prev.pastDueTenants + Math.ceil(pastDueTenants / 20), pastDueTenants),
        noticeGivenTenants: Math.min(prev.noticeGivenTenants + Math.ceil(noticeGivenTenants / 20), noticeGivenTenants),
        totalMonthlyRent: Math.min(prev.totalMonthlyRent + Math.ceil(totalMonthlyRent / 20), totalMonthlyRent),
        totalYearlyRent: Math.min(prev.totalYearlyRent + Math.ceil(totalYearlyRent / 20), totalYearlyRent),
        occupancyRate: Math.min(prev.occupancyRate + Math.ceil(occupancyRate / 20), occupancyRate)
      }));
    }, 30);

    // Stop animation when all values reach their targets
    if (
      animatedValues.totalTenants === totalTenants &&
      animatedValues.activeTenants === activeTenants &&
      animatedValues.pastDueTenants === pastDueTenants &&
      animatedValues.noticeGivenTenants === noticeGivenTenants &&
      animatedValues.totalMonthlyRent === totalMonthlyRent &&
      animatedValues.totalYearlyRent === totalYearlyRent &&
      animatedValues.occupancyRate === occupancyRate
    ) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [
    totalTenants, 
    activeTenants, 
    pastDueTenants, 
    noticeGivenTenants, 
    totalMonthlyRent, 
    totalYearlyRent,
    occupancyRate,
    animatedValues
  ]);

  // Format currency with naira symbol
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const bgColor = isDark ? 'bg-gray-900' : 'bg-gray-50';
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const secondaryTextColor = isDark ? 'text-gray-300' : 'text-gray-600';
  const cardBgColor = isDark ? 'bg-gray-800' : 'bg-white';
  const cardBorderColor = isDark ? 'border-gray-700' : 'border-gray-200';
  const cardHoverColor = isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50';

  return (
    <div className={`p-6 rounded-xl ${bgColor}`}>
      <div className="mb-6">
        <h2 className={`text-2xl font-bold ${textColor}`}>Tenant Overview</h2>
        <p className={`${secondaryTextColor}`}>Dashboard showing key tenant metrics</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {/* Total Tenants */}
        <div className={`rounded-xl ${cardBgColor} ${cardBorderColor} border p-5 ${cardHoverColor} transition-all shadow-sm relative overflow-hidden`}>
          <div className="flex justify-between items-start">
            <div>
              <p className={`text-sm ${secondaryTextColor}`}>Total Tenants</p>
              <p className={`text-2xl font-bold mt-1 ${textColor}`}>{animatedValues.totalTenants}</p>
            </div>
            <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
              <Users size={20} />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
        </div>

        {/* Active Tenants */}
        <div className={`rounded-xl ${cardBgColor} ${cardBorderColor} border p-5 ${cardHoverColor} transition-all shadow-sm relative overflow-hidden`}>
          <div className="flex justify-between items-start">
            <div>
              <p className={`text-sm ${secondaryTextColor}`}>Active Tenants</p>
              <p className="text-2xl font-bold mt-1 text-green-500">{animatedValues.activeTenants}</p>
              <p className="text-sm mt-1 text-green-600">
                <span className="flex items-center">
                  <TrendingUp size={16} className="mr-1" />
                  {occupancyRate}% occupancy
                </span>
              </p>
            </div>
            <div className="p-2 rounded-lg bg-green-100 text-green-600">
              <Users size={20} />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500"></div>
        </div>

        {/* Past Due */}
        <div className={`rounded-xl ${cardBgColor} ${cardBorderColor} border p-5 ${cardHoverColor} transition-all shadow-sm relative overflow-hidden`}>
          <div className="flex justify-between items-start">
            <div>
              <p className={`text-sm ${secondaryTextColor}`}>Past Due Tenants</p>
              <p className="text-2xl font-bold mt-1 text-red-500">{animatedValues.pastDueTenants}</p>
              <p className="text-sm mt-1 text-red-600">
                <span className="flex items-center">
                  <TrendingDown size={16} className="mr-1" />
                  {totalTenants > 0 ? Math.round((pastDueTenants / totalTenants) * 100) : 0}% of tenants
                </span>
              </p>
            </div>
            <div className="p-2 rounded-lg bg-red-100 text-red-600">
              <AlertCircle size={20} />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Notice Given */}
        <div className={`rounded-xl ${cardBgColor} ${cardBorderColor} border p-5 ${cardHoverColor} transition-all shadow-sm relative overflow-hidden`}>
          <div className="flex justify-between items-start">
            <div>
              <p className={`text-sm ${secondaryTextColor}`}>Notice Given</p>
              <p className="text-2xl font-bold mt-1 text-amber-500">{animatedValues.noticeGivenTenants}</p>
              <p className="text-sm mt-1 text-amber-600">
                <span className="flex items-center">
                  <LogOut size={16} className="mr-1" />
                  Upcoming vacancies
                </span>
              </p>
            </div>
            <div className="p-2 rounded-lg bg-amber-100 text-amber-600">
              <LogOut size={20} />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-500"></div>
        </div>

        {/* Monthly Rent */}
        <div className={`rounded-xl ${cardBgColor} ${cardBorderColor} border p-5 ${cardHoverColor} transition-all shadow-sm relative overflow-hidden`}>
          <div className="flex justify-between items-start">
            <div>
              <p className={`text-sm ${secondaryTextColor}`}>Monthly Revenue</p>
              <p className={`text-2xl font-bold mt-1 ${textColor}`}>
                {formatCurrency(animatedValues.totalMonthlyRent)}
              </p>
              <p className={`text-sm mt-1 ${secondaryTextColor}`}>Expected monthly income</p>
            </div>
            <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
              <CreditCard size={20} />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-500"></div>
        </div>

        {/* Yearly Rent */}
        <div className={`rounded-xl ${cardBgColor} ${cardBorderColor} border p-5 ${cardHoverColor} transition-all shadow-sm relative overflow-hidden`}>
          <div className="flex justify-between items-start">
            <div>
              <p className={`text-sm ${secondaryTextColor}`}>Annual Revenue</p>
              <p className={`text-2xl font-bold mt-1 ${textColor}`}>
                {formatCurrency(animatedValues.totalYearlyRent)}
              </p>
              <p className={`text-sm mt-1 ${secondaryTextColor}`}>Projected annual income</p>
            </div>
            <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
              <TrendingUp size={20} />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500"></div>
        </div>
      </div>
    </div>
  );
};

export default TenantStats;