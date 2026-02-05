export default function index() {
  return (
    <main>
      <button className="PrimaryButton">
        Build with us
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 18 18"
          fill="none"
        >
          <rect x="8.15625" width="1.6875" height="18" fill="#141414" />
          <rect
            x="18"
            y="8.15625"
            width="1.6875"
            height="18"
            transform="rotate(90 18 8.15625)"
            fill="#141414"
          />
          <rect
            x="15.9606"
            y="14.7674"
            width="1.6875"
            height="18"
            transform="rotate(135 15.9606 14.7674)"
            fill="#141414"
          />
          <rect
            x="3.23267"
            y="15.9603"
            width="1.6875"
            height="18"
            transform="rotate(-135 3.23267 15.9603)"
            fill="#141414"
          />
        </svg>
      </button>
      <button className="SecondaryButton">
        Explore more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 12H19"
            stroke="white"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 5L19 12L12 19"
            stroke="white"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </main>
  );
}
