import { useEffect } from "react";

export const useClickOutside = (refs, callback) => {
    useEffect(() => {
        const handleOutsideClick = (e) => {
            const isOutside = refs.every((ref) => !ref?.current?.contains(e.target));

            if (isOutside && typeof callback === "function") {
                callback(e);
            }
        };

        window.addEventListener("mousedown", handleOutsideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [callback, refs]);
};
