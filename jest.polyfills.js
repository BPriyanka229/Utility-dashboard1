const { TextDecoder, TextEncoder } = require('node:util');
const { ReadableStream } = require('node:stream/web');
const { MessageChannel, MessagePort } = require('node:worker_threads');

Object.defineProperties(globalThis, {
  TextDecoder: { value: TextDecoder },
  TextEncoder: { value: TextEncoder },
  ReadableStream: { value: ReadableStream },
  MessageChannel: { value: MessageChannel },
  MessagePort: { value: MessagePort },
});
