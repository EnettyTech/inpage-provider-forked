module.exports = {
  errors: {
    disconnected: () => `EzDefi: Lost connection to EzDefi background process.`,
    sendSiteMetadata: () => `EzDefi: Failed to send site metadata. This is an internal error, please report this bug.`,
    unsupportedSync: (method) => `EzDefi: The EzDefi Web3 object does not support synchronous methods like ${method} without a callback parameter.`,
    invalidDuplexStream: () => 'Must provide a Node.js-style duplex stream.',
    invalidOptions: (maxEventListeners, shouldSendMetadata) => `Invalid options. Received: { maxEventListeners: ${maxEventListeners}, shouldSendMetadata: ${shouldSendMetadata} }`,
    invalidRequestArgs: () => `Expected a single, non-array, object argument.`,
    invalidRequestMethod: () => `'args.method' must be a non-empty string.`,
    invalidRequestParams: () => `'args.params' must be an object or array if provided.`,
    invalidLoggerObject: () => `'args.logger' must be an object if provided.`,
    invalidLoggerMethod: (method) => `'args.logger' must include required method '${method}'.`,
  },
  warnings: {
    // TODO:deprecation:remove
    autoRefreshDeprecation: `EzDefi: EzDefi will soon stop reloading pages on network change.\nFor more information, see: https://docs.metamask.io/guide/ethereum-provider.html#ethereum-autorefreshonnetworkchange \nSet 'ethereum.autoRefreshOnNetworkChange' to 'false' to silence this warning.`,
    // deprecated methods
    enableDeprecation: `EzDefi: 'ethereum.enable()' is deprecated and may be removed in the future. Please use the 'eth_requestAccounts' RPC method instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1102`,
    sendDeprecation: `EzDefi: 'ethereum.send(...)' is deprecated and may be removed in the future. Please use 'ethereum.sendAsync(...)' or 'ethereum.request(...)' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
    // deprecated events
    events: {
      chainIdChanged: `EzDefi: The event 'chainIdChanged' is deprecated and WILL be removed in the future. Please use 'chainChanged' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
      close: `EzDefi: The event 'close' is deprecated and may be removed in the future. Please use 'disconnect' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
      data: `EzDefi: The event 'data' is deprecated and may be removed in the future.`,
      networkChanged: `EzDefi: The event 'networkChanged' is deprecated and may be removed in the future. Please use 'chainChanged' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
      notification: `EzDefi: The event 'notification' is deprecated and may be removed in the future. Please use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
    },
    // misc
    experimentalMethods: `EzDefi: 'ethereum._metamask' exposes non-standard, experimental methods. They may be removed or changed without warning.`,
    publicConfigStore: `EzDefi: The property 'publicConfigStore' is deprecated and WILL be removed in the future.`,
  },
}
