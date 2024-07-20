import NextAuth, { NextAuthConfig } from "next-auth";
import prisma from "./db";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
const config = {
  pages: {
    signIn: "login",
  },
  providers: [
    //Провайдеров может біть много(гугл фейсбук и тд.Добавляем свой по кредам )
    Credentials({
      //авторизация при логине
      async authorize(credentials) {
        //Функция ауторайз получает имейл и пароль из server actions
        const { email, password } = credentials;
        const user = await prisma.user.findUnique({ email });
        //Находим в призме юзера по имейлу
        if (!user) return null;
        //bcrypr проверяет пароли
        const isMacthedpassword = await bcrypt.compare(
          password,
          user.hashedPassword
        );
        if (!isMacthedpassword) return null;
        //Возвращаем юзера
        return user;
      },
    }),
  ],
  callbacks: {
    //каждій візов в миддлваре
    authorized: ({ auth, request }) => {
      const isAuthorized = Boolean(auth?.user);
      const isTryingToAcessApp = request.nextUrl.pathname.includes("/app");
      if (isAuthorized && isTryingToAcessApp) {
        return true;
      }
      if (!isAuthorized && isTryingToAcessApp) {
        return false;
      }
      if (!isTryingToAcessApp) {
        return true;
      }
    },
  },
} satisfies NextAuthConfig;

export const { auth, signIn } = NextAuth(config);
