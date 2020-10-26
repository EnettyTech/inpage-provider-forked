# Inpage Provider Forked

The inpage Ethereum provider object injected by mobile or extension into web pages.
Contains a lot of implementation details specific to mobile or extension, and is probably
not suitable for out-of-the-box use with other wallets.
This module forked from @metamask/inpage-provider.

## Installation

`yarn add @ezdefi/inpage-provider-forked`

## Usage

```javascript
import { initProvider } from '@ezdefi/inpage-provider-forked'

// Create a stream to a remote provider:
const metamaskStream = new LocalMessageDuplexStream({
  name: 'inpage',
  target: 'contentscript',
})

// this will initialize the provider and set it as window.ethereum
initProvider({
  connectionStream: metamaskStream,
})

const { ethereum } = window
```

### Do Not Modify the Provider

The Provider object should not be mutated by consumers under any circumstances.
The maintainers of this package will neither fix nor take responsbility for bugs caused by third parties mutating the provider object.
