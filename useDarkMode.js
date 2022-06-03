import React from 'react'
const matchDark = '(prefers-color-scheme: dark)';
export default function useDarkMode() {
  console.log('run useDarkMode');
  
  const [isDark, setIsDark] = React.useState(
    () => window.matchMedia && window.matchMedia(matchDark).matches
  );
  
  React.useEffect(() => {
    const matcher = window.matchMedia(matchDark);
   console.log("matcher", matcher);
   
    const onChange = ({matches}) => {
      setIsDark(matches)
    };
  
    matcher.addListener(onChange);
    return () => {
      matcher.removeListener(onChange)
    }
  }, [setIsDark]);

  return [isDark, setIsDark];
}

console.log("useDarkMode", useDarkMode);

