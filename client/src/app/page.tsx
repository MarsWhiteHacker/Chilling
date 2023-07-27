"use client";

import { Averia_Sans_Libre } from "next/font/google";
import { useRouter } from "next/navigation";

import { Button } from "@/components/common/Button";
import Logo from "@/components/common/Logo/Logo";
import { BIG_LOGO_SIZE, WELCOME_PAGE_BUTTONS } from "@/constants";

const font = Averia_Sans_Libre({ weight: "400", subsets: ["latin"] });

const Home = (): JSX.Element => {
  const router = useRouter();

  const onNavigate = (href: string) => () => router.push(href);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <Logo size={BIG_LOGO_SIZE} />
      <div
        className={`${font.className} text-8xl flex gap-2 mt-3 mb-12`}
        children="Welcome to Chilling"
      />
      <div className="flex justify-center gap-3">
        {WELCOME_PAGE_BUTTONS.map(({ color, text, href }, index) => (
          <Button
            key={index}
            text={text}
            color={color}
            theme="colored"
            size="xl"
            onClick={onNavigate(href)}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
