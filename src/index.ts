
/* IMPORT */

import {useEffect, useRef} from 'react';

/* USE PREVIOUS */

function usePrevious<T extends unknown> ( value: T ): React.MutableRefObject<T | undefined>  {

  const ref = useRef<T> ();

  useEffect ( () => {
    ref.current = value;
  }, [value] );

  return ref;

}

/* EXPORT */

export default usePrevious;
