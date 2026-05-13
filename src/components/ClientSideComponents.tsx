
"use client";

import dynamic from 'next/dynamic';

const CookieConsent = dynamic(() => import("@/components/CookieConsent").then(mod => mod.CookieConsent), { ssr: false });
const ExitIntentPopup = dynamic(() => import("@/components/ExitIntentPopup").then(mod => mod.ExitIntentPopup), { ssr: false });
const Toaster = dynamic(() => import("@/components/ui/toaster").then(mod => mod.Toaster), { ssr: false });

export function ClientSideComponents() {
  return (
    <>
      <CookieConsent />
      <ExitIntentPopup />
      <Toaster />
    </>
  );
}
