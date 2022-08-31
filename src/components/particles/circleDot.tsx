type TcircleDotProps = {
  radius?: number;
  fillOpacity?: number;
  fill?: string;
  className?: string;
};

const CircleDot = ({
  radius = 22,
  fillOpacity = 0.15,
  fill = "url(#paint0_radial_2_430)",
  className = "",
  ...props
}: TcircleDotProps) => {
  return (
    <div className={className} {...props}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="22"
          cy="22"
          r={radius}
          fill={fill}
          fillOpacity={fillOpacity}
        />
        <defs>
          <radialGradient
            id="paint0_radial_2_430"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(22 22) rotate(90) scale(22)"
          >
            <stop stopColor="#448181" stopOpacity="0.51" />
            <stop offset="1" stopColor="#328383" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CircleDot;
