export const env = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL as string | undefined,
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined,
  firebaseApiKey: import.meta.env.VITE_FIREBASE_API_KEY as string | undefined,
  firebaseProjectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined,
  firebaseAppId: import.meta.env.VITE_FIREBASE_APP_ID as string | undefined
};
