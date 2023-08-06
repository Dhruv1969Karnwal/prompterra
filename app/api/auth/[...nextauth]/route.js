import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: '',
      clientSecret: '',
    })
  ],
  callbacks: {
    async session({ session }) {

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        

        return true
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false
      }
    },
  }
})

export { handler as GET, handler as POST }