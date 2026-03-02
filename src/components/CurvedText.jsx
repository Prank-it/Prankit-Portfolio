export default function CurvedText({
  text,
  fontSize = "1.25rem", // navbar-safe default
  intensity = 0.12,     // subtle curve
  color = "#E50914",
}) {
  const middle = (text.length - 1) / 2;

  return (
    <div className="flex items-end leading-none select-none">
      {text.split("").map((letter, index) => {
        const distance = index - middle;
        const scale = 1 + intensity * Math.pow(distance / middle, 2);

        return (
          <span
            key={index}
            style={{
              transform: `scaleY(${scale})`,
              fontFamily: "Anton",
              fontSize,
              color,
              margin: "0 -0.3px",
            }}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
}