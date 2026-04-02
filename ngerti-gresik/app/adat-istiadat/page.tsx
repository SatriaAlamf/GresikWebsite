"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdatIstiadatPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace("/kebiasaan-masyarakat");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-beige">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy mx-auto mb-4"></div>
        <p className="text-charcoal">Mengalihkan ke Kebiasaan Masyarakat...</p>
      </div>
    </div>
  );
}
