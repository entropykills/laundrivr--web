import { AuthError, User } from '@supabase/supabase-js';
import { useContext, useEffect, useState } from 'react';
import { supabase } from '../utils/supabase/supabase';
import React from 'react';

type AuthContextType = {
  signOut: () => Promise<{ error: AuthError | null }>;
  user: User | undefined;
  loading: boolean;
};

const AuthContext = React.createContext({} as AuthContextType);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkUser() {
      // Check active sessions and sets the user
      const session = await supabase.auth.getSession();
      const user: User | undefined = session.data.session?.user;
      setUser(user);
      setLoading(false);

      // Listen for changes on auth state (logged in, signed out, etc.)
      const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
        setUser(session?.user);
        setLoading(false);
      });

      return () => {
        listener?.subscription.unsubscribe();
      };
    }
    checkUser();
  }, []);

  // Will be passed down to Signup, Login and Dashboard components
  const value: AuthContextType = {
    signOut: () => supabase.auth.signOut(),
    user,
    loading
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
