import {
  ReadableStream,
  WritableStream,
  TransformStream,
} from 'node:stream/web';

const readableStream = new ReadableStream({
  start(controller) {
    const textEncoder = new TextEncoder()
    const chunks = textEncoder.encode('hello', { stream: true })
    chunks.forEach(chunk => controller.enqueue(chunk))
    controller.close()
  }
})

const writableStream = new WritableStream({
  write(chunk) {
    const textDecoder = new TextDecoder()
    return new Promise(resolve => {
      const buffer = new ArrayBuffer(2);
      const view = new Uint16Array(buffer);
      view[0] = chunk;
      const decoded = textDecoder.decode(view, { stream: true });
      console.log('decoded', decoded)

      setTimeout(() => {
        resolve()
      }, 1000)
    });
  },
  close() {
    console.log('writable stream close')
  },
})

readableStream.pipeTo(writableStream)