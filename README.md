# React - usePrevious

React hook for remembering a previous value.

## Install

```sh
npm install --save react-use-previous
```

## Usage

This hook is similar to the one mentioned in the [docs](https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state), but it returns a `ref` instead of the actual value, so that you can use this anywhere, even if some functions are cached.

```ts
import {useState} from 'react';
import usePrevious from 'react-use-previous';

function useFoo () {

  const [value, setValue] = useState ( 0 );
  const prevValue = usePrevious ( value );

  useEffect ( () => {

    function update () {

      // This function is cached, since this useEffect has no dependencies and gets only executed when mounting and unmounting
      // But it can still access the previous value

      const nextValue = Math.random ();

      if ( nextValue !== prevValue.current ) setValue ( nextValue );

    }

    $(window).on ( 'resize', update );

    return () => $(window).off ( 'resize', update );

  }, [] );

  return value;

}
```

## License

MIT © Fabio Spampinato
