import { useEffect } from "react";
import { useDispatch } from "react-redux";
/**
 * Hook that alerts clicks outside of the passed ref
 */
export const useClickAway = (ref, updateState) => {
  const dispatch = useDispatch();
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        return dispatch(updateState(true));
      }
      return dispatch(updateState(false));
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
