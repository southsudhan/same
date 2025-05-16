import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth0 } from '@auth0/auth0-react';

export const useAuth = () => {
  const { user: auth0User, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated && auth0User) {
      // Sync Auth0 user with Supabase
      const syncUser = async () => {
        const { data, error } = await supabase
          .from('users')
          .upsert({
            id: auth0User.sub,
            email: auth0User.email,
          })
          .select()
          .single();

        if (!error && data) {
          setUser(data);
        }
      };

      syncUser();
    }
  }, [isAuthenticated, auth0User]);

  return {
    user,
    isAuthenticated,
    login: loginWithRedirect,
    logout: () => logout({ returnTo: window.location.origin }),
  };
};