import { useState, useEffect } from "react";

import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

interface BottomSheetProps {
  open: boolean;
  children: any
  title: string;
  onClose: () => void;
}

export function BottomSheet(props: BottomSheetProps) {
  const { open, children, title, onClose } = props;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {open && (
        <div
          className="transition-all duration-100 ease-out fixed top-0 left-0 w-full h-[100%] z-50"
          style={{ backgroundColor: "rgba(0,0,0, 0.5)" }}
          onClick={onClose}
        />
      )}
      <div
        className={twMerge(
          "transition-transform duration-500 ease-out w-full bg-white shadow-lg px-4 py-4 rounded-t-2xl",
          open && loaded
            ? "transform: translate-y-0"
            : "transform: translate-y-[100%]"
        )}
        style={{
          zIndex: 100,
          position: "fixed",
          left: 0,
          bottom: 0,
        }}
      >
        <div className="flex items-center mb-4">
          <FontAwesomeIcon
            icon={faClose}
            className="text-gray-900 w-4 h-4 cursor-pointer"
            onClick={onClose}
          />
          <div className="font-bold text-lg ml-2 text-black">{title}</div>
        </div>
        {children}
      </div>
    </>
  );
}
