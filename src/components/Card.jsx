export default function Card({ item }) {
  const clickable = Boolean(item.onClick);

  return (
    <div
      onClick={clickable ? item.onClick : undefined}
      className={`
        shrink-0 group
        w-[220px] sm:w-[260px]
        ${clickable ? "cursor-pointer" : "cursor-default"}
      `}
    >
      <div
        className="
          h-[140px] sm:h-[160px]
          rounded-lg overflow-hidden
          bg-neutral-800
          border border-white/10
          transition-all duration-300
          group-hover:scale-[1.03]
          group-hover:border-[#E50914]/70
          group-hover:shadow-[0_0_25px_rgba(229,9,20,0.35)]
        "
      >
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            draggable="false"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-gray-300">
            {item.badge || "CARD"}
          </div>
        )}
      </div>

      <div className="mt-2">
        <div className="text-sm sm:text-base text-gray-100">{item.title}</div>
        {item.subtitle && (
          <div className="text-xs text-gray-400">{item.subtitle}</div>
        )}
      </div>
    </div>
  );
}