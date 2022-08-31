const StarIcon = ({
  fill = "#328383",
  className = "",
  ...props
}: {
  fill?: string;
  className?: string;
}) => {
  return (
    <div className={className} {...props}>
      <svg
        width="48"
        height="50"
        viewBox="0 0 48 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 0L26.9508 15.9182L38.6946 4.77457L31.7254 19.3871L47.7764 17.2746L33.5491 25L47.7764 32.7254L31.7254 30.6129L38.6946 45.2254L26.9508 34.0818L24 50L21.0492 34.0818L9.30537 45.2254L16.2746 30.6129L0.223587 32.7254L14.4508 25L0.223587 17.2746L16.2746 19.3871L9.30537 4.77457L21.0492 15.9182L24 0Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default StarIcon;
