import NextAuth, { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

// For debugging
const log = (message: string, ...args: unknown[]) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Auth] ${message}`, ...args);
  }
};

export const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          log('Authorization attempt with credentials:', { email: credentials?.email });
          
          const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
          const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

          if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
            log('Missing admin credentials in environment variables');
            throw new Error('Server configuration error');
          }

          if (!credentials?.email || !credentials?.password) {
            log('Missing email or password in credentials');
            throw new Error('Please enter both email and password');
          }

          log('Comparing credentials with:', { 
            providedEmail: credentials.email, 
            expectedEmail: ADMIN_EMAIL,
            passwordMatch: credentials.password === ADMIN_PASSWORD ? 'MATCH' : 'NO MATCH'
          });

          if (credentials.email === ADMIN_EMAIL && credentials.password === ADMIN_PASSWORD) {
            log('Authentication successful for user:', credentials.email);
            return {
              id: '1',
              email: credentials.email,
              name: 'Admin',
              role: 'admin'
            };
          }
          
          log('Invalid credentials provided');
          return null;
        } catch (error) {
          console.error('Authorization error:', error);
          throw new Error('Authentication failed');
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // Initial sign in
      if (account && user) {
        return {
          ...token,
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role || 'user',
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.role = token.role as string;
      }
      return session;
    }
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  debug: true, // Enable debug mode
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true,
  logger: {
    error(error: Error) {
      console.error('Auth Error:', error);
    },
    warn(code: string) {
      console.warn('Auth Warning:', code);
    },
    debug(code: string, metadata: unknown) {
      console.log('Auth Debug:', { code, metadata });
    }
  }
};

// Initialize NextAuth with our auth options
const handler = NextAuth(authOptions);

// Export the auth functions
export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = handler;