
/* IMPORT */

import {useEffect, useRef} from 'react';

/* MAIN */

const usePrevious = <T> ( value: T ): React.MutableRefObject<T | undefined> => {

  const ref = useRef<T> ();

  useEffect ( () => {

    ref.current = value;

  }, [value] );

  return ref;

};

/* EXPORT */

export default usePrevious;
