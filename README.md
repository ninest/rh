## Development

### `useParameters` and `useSecurities`

The `onDay` function in `useSecurities` requires `useParameters`'s `parameters` to get the next value of a stock/crypto. But getting the parameters with `const { parameters } = useParameters()` and passing and using it is not enough.

It seems that `onDay` is passed and called in `startTimer` in `useGame`, only the initial value of parameters is "caught". To fix, this, there needs to be a function that gets the current value of parameters:

```tsx
let parameters: Parameters;
setParameters((p) => {
  parameters = p;
  return p;
});
// parameters is now the updated value
```

This is hacky, but it works.

This might be because `useSecurities` itself does not call `onDay`, but rather it is called inside an interval.