// hooks/useAppTheme.ts
import { useTheme } from '../context/ThemeContext';

export const useAppTheme = () => {
  const { isDark } = useTheme();

  return {
    isDark,
    colors: {
      background: isDark ? '#1f2937' : '#ffffff',
      text: isDark ? '#f3f4f6' : '#111827',
      card: isDark ? '#374151' : '#f9fafb',
      border: isDark ? '#4b5563' : '#e5e7eb',
    },
  };
};