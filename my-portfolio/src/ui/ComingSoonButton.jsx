import React from "react";

const ComingSoonButton = () => {
  return (
    <button
      className="
        relative
        h-[45px]
        rounded-full
        p-px
        overflow-hidden
        cursor-pointer
        dark:bg-neutral-800
        bg-neutral-200
      "
    >
      {/* OUTER GLOW */}
      <span className="absolute inset-0 pointer-events-none">
        <span
          className="block -translate-x-1/2 -translate-y-1/3 size-24 blur-xl"
          style={{
            background:
              "linear-gradient(135deg, rgb(122,105,249), rgb(242,99,120), rgb(245,131,63))",
          }}
        />
      </span>

      {/* CONTENT */}
      <span
        className="
          relative z-[1]
          flex items-center justify-center gap-1
          h-full
          dark:bg-neutral-950/90
          bg-neutral-50/90
          rounded-full
          px-4
        "
      >
        {/* ICON */}
        <span className="relative w-[18px] h-[18px]">
          <svg
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              stroke="url(#grad)"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* SHARED GRADIENT */}
          <svg width="0" height="0">
            <defs>
              <linearGradient
                id="grad"
                x1="-0.5"
                y1={9}
                x2="15.5"
                y2="-1.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#7A69F9" />
                <stop offset="0.575" stopColor="#F26378" />
                <stop offset={1} stopColor="#F5833F" />
              </linearGradient>
            </defs>
          </svg>
        </span>

        {/* TEXT */}
        <span className="ml-1.5 bg-gradient-to-b dark:from-white dark:to-white/50 from-neutral-950 to-neutral-950/50 bg-clip-text text-xs text-transparent">
          Coming Soon
        </span>
      </span>
    </button>
  );
};

export default ComingSoonButton;
