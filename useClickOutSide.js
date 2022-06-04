export default function useClickOutSide(e, target, callback) {
   useEffect(() => {
      const handleClick = (e) => {
         if (e.target !== target && !target.contains(e.target)) {
            callback();
         }
      };
      document.addEventListener('click', handleClick);
      return () => {
         document.removeEventListener('click', handleClick);
      };
   }, []);
}