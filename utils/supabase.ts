import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = "https://reipgflbvswjtdevuluo.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlaXBnZmxidnN3anRkZXZ1bHVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwMTM0NTcsImV4cCI6MjA2MjU4OTQ1N30.2XRwYYsSwFkZb0hmapBT1rPwmxNSyty5ma97_yPIxtE"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
