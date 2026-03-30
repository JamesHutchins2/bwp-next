"use client";

import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const DISMISS_KEY = "bwp_banner_dismissed";

function getSeasonalMessage(): string | null {
  const now = new Date();
  const month = now.getMonth(); // 0-indexed
  const day = now.getDate();

  // March / April — pre-season opening push
  if (month === 2 || month === 3) {
    return "🌞 Pool opening season is almost here — book your opening now before slots fill up!";
  }
  // May — opening season
  if (month === 4) {
    return "☀️ It's pool opening season! Book your professional pool opening with Breezewood Pools today.";
  }
  // June/July/August — peak maintenance season
  if (month === 5 || month === 6 || month === 7) {
    return "💧 Enjoying your pool? Ask about our weekly maintenance packages — worry-free all summer.";
  }
  // August 15+ through September — closing push
  if ((month === 7 && day >= 15) || month === 8) {
    return "🍂 Labour Day is approaching — book your pool closing now to protect your investment this winter.";
  }
  // Off-season
  return null;
}

export default function SeasonalBanner() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const msg = getSeasonalMessage();
    if (!msg) return;

    const dismissed = sessionStorage.getItem(DISMISS_KEY);
    if (!dismissed) {
      setMessage(msg);
      setVisible(true);
    }
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
  }

  if (!visible || !message) return null;

  return (
    <div className="bg-bwp-deep text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        <p className="flex-1 text-center text-sm font-medium">
          {message}{" "}
          <Link
            href="/contact"
            className="underline underline-offset-2 hover:text-blue-200 ml-1"
          >
            Book now →
          </Link>
        </p>
        <button
          onClick={dismiss}
          aria-label="Dismiss banner"
          className="flex-shrink-0 hover:text-blue-200 transition-colors"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
