import { AuthError, Session, User } from '@supabase/supabase-js';
import { useContext, useEffect, useState } from 'react';
import { supabase } from '../utils/supabase/supabase';
import React from 'react';

type AuthContextType = {
  signOut: () => Promise<{ error: AuthError | null }>;
  user: User | null;
  loading: boolean;
  isAdmin: boolean;
};

const AuthContext = React.createContext({} as AuthContextType);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function isUserAdmin(user: User): Promise<boolean> {
      const { data, error } = await supabase
        .from('user_metadata')
        .select('role')
        .eq('user_id', user?.id);
      if (error) {
        console.error(error);
        return false;
      } else {
        if (data[0].role === 'admin') {
          return true;
        }
      }
      return false;
    }

    async function doTasks() {
      // Check active sessions and sets the user
      const data = await supabase.auth.getSession();
      const session: Session | null = data.data.session;
      const user: User | null = session?.user ?? null;
      setUser(user);
      const isAdmin: boolean = user ? await isUserAdmin(user) : false;
      setIsAdmin(isAdmin);
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
    doTasks();
  }, []);

  const userThatIsNullOrDefined: User | null = user == undefined ? null : user;

  // Will be passed down to Signup, Login and Dashboard components
  const value: AuthContextType = {
    signOut: () => supabase.auth.signOut(),
    user: userThatIsNullOrDefined,
    loading,
    isAdmin
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
