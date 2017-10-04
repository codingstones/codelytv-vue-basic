window['flushPromises'] = () =>  {
  return new Promise(resolve => setImmediate(resolve));
}
