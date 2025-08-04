import { useSelector } from "react-redux";

function Spin() {
  const isLoading = useSelector((state) => state.ui.loading);
  return (
    <div>
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-7 bg-black animate-bounce`}
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Spin;
