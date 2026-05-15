interface ReynosoLogoProps {
  className?: string;
  withText?: boolean;
}

export function ReynosoLogo({
  className,
  withText = true,
}: ReynosoLogoProps) {
  return (
    <span className={className} aria-label="Reynoso Construction">
      <span className="inline-flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-sm ring-2 ring-brand-dark">
          <svg
            viewBox="0 0 32 32"
            width="28"
            height="28"
            aria-hidden="true"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="16"
              y="14"
              textAnchor="middle"
              fontSize="11"
              fontWeight="900"
              fill="currentColor"
              fontFamily="ui-sans-serif, system-ui, sans-serif"
            >
              HI
            </text>
            <line
              x1="6"
              y1="17"
              x2="26"
              y2="17"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <text
              x="16"
              y="28"
              textAnchor="middle"
              fontSize="11"
              fontWeight="900"
              fill="currentColor"
              fontFamily="ui-sans-serif, system-ui, sans-serif"
            >
              RC
            </text>
          </svg>
        </span>
        {withText && (
          <span className="flex flex-col leading-tight">
            <span className="text-base font-bold text-foreground">
              Reynoso Construction
            </span>
            <span className="text-xs text-muted">Home Improvements LLC</span>
          </span>
        )}
      </span>
    </span>
  );
}
