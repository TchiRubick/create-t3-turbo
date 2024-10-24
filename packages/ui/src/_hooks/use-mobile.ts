import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(isMobile);
    }
  }, []);

  return isMobile;
}
