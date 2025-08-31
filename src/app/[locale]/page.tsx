"use client";

import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { use } from "react"; // 👈 needed to unwrap Promise

export default function Home({
  params
}: {
  params: Promise<{ locale: (typeof routing.locales)[number] }>;
}) {
  // ✅ unwrap the Promise
  const { locale } = use(params);

  const t = useTranslations("Home");
  const router = useRouter();
  const pathname = usePathname();

  const functionClick = () => {
    const locales = routing.locales;
    const currentIndex = locales.indexOf(locale);
    const nextLocale = locales[(currentIndex + 1) % locales.length];

    router.push(pathname, { locale: nextLocale }); // ✅ next-intl navigation
  };

  return (
    <div className="flex flex-col justify-center items-center p-10 gap-y-10 min-h-screen text-white bg-gray-900">
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <button
        onClick={functionClick}
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        {t("button")}
      </button>
    </div>
  );
}
