"use client";

import { useEffect, useState } from "react";

export default function AnimatedLogo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <svg
          width="1200"
          height="372"
          viewBox="0 0 681 198"
          className={`w-full max-w-screen-xl h-auto transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ filter: "drop-shadow(8px 8px 15px rgba(0, 0, 0, 0.3))" }}
        >
          {/* F */}
          <g
            className={`transition-all duration-1000 ease-out animated-letter ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0s" }}
            fill="#0b355f"
          >
            <path
              d="M32 93.5 l0 -41.5 24 0 24 0 0 9 0 9 -13 0 -13 0 0 7 0 7 11.5 0 11.5 0 0 9 0 9 -11.5 0 -11.5 0 0 16.5 0 16.5 -11 0 -11 0 0 -41.5z"
              style={{
                filter: `drop-shadow(2px 2px 0px #0b355f) drop-shadow(4px 4px 0px #082a4d) drop-shadow(6px 6px 0px #051f3b)`,
              }}
            />
          </g>

          {/* E */}
          <g
            className={`transition-all duration-1000 ease-out animated-letter ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.1s" }}
            fill="#0b355f"
          >
            <path
              d="M105 93.5 l0 -41.5 23.5 0 23.5 0 0 9 0 9 -13 0 -13 0 0 7 0 7 12.5 0 12.5 0 0 9 0 9 -12.5 0 -12.5 0 0 7.5 0 7.5 13 0 13 0 0 9 0 9 -23.5 0 -23.5 0 0 -41.5z"
              style={{
                filter: `drop-shadow(2px 2px 0px #0b355f) drop-shadow(4px 4px 0px #082a4d) drop-shadow(6px 6px 0px #051f3b)`,
              }}
            />
          </g>

          {/* E */}
          <g
            className={`transition-all duration-1000 ease-out animated-letter ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.2s" }}
            fill="#0b355f"
          >
            <path
              d="M179 93.5 l0 -41.5 23.5 0 23.5 0 0 9 0 9 -13 0 -13 0 0 7 0 7 12.5 0 12.5 0 0 9 0 9 -12.5 0 -12.5 0 0 7.5 0 7.5 13 0 13 0 0 9 0 9 -23.5 0 -23.5 0 0 -41.5z"
              style={{
                filter: `drop-shadow(2px 2px 0px #0b355f) drop-shadow(4px 4px 0px #082a4d) drop-shadow(6px 6px 0px #051f3b)`,
              }}
            />
          </g>

          {/* S */}
          <g
            className={`transition-all duration-1000 ease-out animated-letter ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.3s" }}
            fill="#0b355f"
          >
            <path
              d="M271 136.3 c-4.6 -0.8 -14.5 -4.3 -18.1 -6.6 l-3.6 -2.2 4.4 -8.2 4.4 -8.1 5.6 3.4 c8.7 5.2 17.2 5.7 22.1 1.2 2.9 -2.8 2.9 -7.2 -0.1 -10.2 -1.4 -1.4 -6.4 -3.6 -12.5 -5.5 -15.4 -4.8 -20.3 -10 -20.3 -22.1 0 -3.1 0.5 -7.6 1.2 -9.9 1.6 -5.3 7.9 -12.5 13.3 -15.3 5.2 -2.7 16.4 -3.5 23.7 -1.8 5.3 1.2 14.9 4.9 14.9 5.6 0 0.5 -7 14.7 -7.5 15.2 -0.2 0.2 -2 -0.5 -4.2 -1.6 -8.2 -4.2 -17.2 -3.2 -19.2 2 -2 5.3 0.5 7.6 12.7 11.7 15.9 5.4 20.9 10.2 21.9 21 0.7 7.4 -1.1 15 -4.8 20 -6.2 8.6 -20.9 13.6 -33.9 11.4z"
              style={{
                filter: `drop-shadow(2px 2px 0px #0b355f) drop-shadow(4px 4px 0px #082a4d) drop-shadow(6px 6px 0px #051f3b)`,
              }}
            />
          </g>

          {/* H */}
          <g
            className={`transition-all duration-1000 ease-out animated-letter ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.4s" }}
            fill="#0b355f"
          >
            <path
              d="M397.4 163.7 l-9.9 -6.3 -0.3 -28.2 -0.2 -28.2 -16 0 -16 0 -0.2 25 -0.3 25 -10 -6.4 -10 -6.3 -0.3 -43.2 -0.2 -43.1 10.5 0 10.5 0 0 16 0 16 16 0 16 0 0 -16 0 -16 10.5 0 10.5 0 0 59 c0 32.5 -0.1 59 -0.3 59 -0.2 0 -4.8 -2.8 -10.3 -6.3z"
              style={{
                filter: `drop-shadow(2px 2px 0px #0b355f) drop-shadow(4px 4px 0px #082a4d) drop-shadow(6px 6px 0px #051f3b)`,
              }}
            />
          </g>

          {/* N */}
          <g
            className={`transition-all duration-1000 ease-out animated-letter ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.5s" }}
            fill="#f47216"
          >
            <path
              d="M504.5 134.2 c-10.2 -13.9 -49 -61.3 -49.3 -60.3 -0.2 0.7 -2.5 14.6 -5.1 30.9 l-4.7 29.7 -4.7 0.3 c-3.6 0.2 -4.7 0 -4.7 -1.2 0 -2 13 -83.9 13.3 -84.3 0.2 -0.1 11.8 14.1 25.7 31.7 14 17.6 25.7 31.6 26.1 31.2 0.3 -0.4 2.5 -13.1 4.8 -28.2 2.4 -15.1 4.5 -28.5 4.8 -29.7 0.4 -2 1.2 -2.3 5.5 -2.3 4.2 0 4.9 0.3 4.4 1.8 -0.3 0.9 -3.3 19.7 -6.7 41.7 -3.4 22 -6.5 40.3 -6.8 40.7 -0.3 0.3 -1.5 -0.6 -2.6 -2z"
              style={{
                filter: `drop-shadow(2px 2px 0px #f47216) drop-shadow(4px 4px 0px #d85e0f) drop-shadow(6px 6px 0px #bc4f0d)`,
              }}
            />
          </g>

          {/* E */}
          <g
            className={`transition-all duration-1000 ease-out animated-letter ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.6s" }}
            fill="#f47216"
          >
            <path
              d="M536.5 132.8 c0.6 -2.9 12.5 -78.6 12.5 -79.9 0 -0.5 8.9 -0.9 22 -0.9 l22 0 0 2.3 c0 1.2 -0.3 3.2 -0.6 4.4 -0.6 2.2 -1 2.3 -17.7 2.5 l-17.1 0.3 -1.7 10.5 c-1 5.8 -1.8 11.1 -1.8 11.8 -0.1 0.9 3.9 1.2 16.5 1.2 l16.7 0 -0.7 3.1 c-0.3 1.7 -0.6 3.8 -0.6 4.5 0 1.1 -3.2 1.4 -16.8 1.4 l-16.8 0 -2.2 14.3 c-1.2 7.8 -2.2 15 -2.2 16 0 1.5 1.5 1.7 16.9 1.7 18.6 0 17.1 -0.6 15.6 6.3 l-0.5 2.7 -22 0 -22 0 0.5 -2.2z"
              style={{
                filter: `drop-shadow(2px 2px 0px #f47216) drop-shadow(4px 4px 0px #d85e0f) drop-shadow(6px 6px 0px #bc4f0d)`,
              }}
            />
          </g>

          {/* T */}
          <g
            className={`transition-all duration-1000 ease-out animated-letter ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.7s" }}
            fill="#f47216"
          >
            <path
              d="M619 134.3 c0 -0.5 2.5 -16.3 5.5 -35.2 3 -18.9 5.5 -35.2 5.5 -36.2 0 -1.7 -0.9 -1.9 -9.6 -1.9 l-9.6 0 0.6 -3.1 c0.3 -1.7 0.6 -3.8 0.6 -4.5 0 -1.2 4.4 -1.4 24.5 -1.4 l24.5 0 0 2.3 c-0.1 6.5 -0.4 6.7 -11.1 6.7 -5.5 0 -9.9 0.3 -9.9 0.8 0 0.4 -2.5 17 -5.7 37 l-5.7 36.2 -4.8 0 c-2.6 0 -4.8 -0.3 -4.8 -0.7z"
              style={{
                filter: `drop-shadow(2px 2px 0px #f47216) drop-shadow(4px 4px 0px #d85e0f) drop-shadow(6px 6px 0px #bc4f0d)`,
              }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
