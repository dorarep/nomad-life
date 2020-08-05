// Any element you create will be accepted
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// The elements you list here will be accepted, attributes don't matter
declare namespace JSX {
  interface IntrinsicElements {
    'amp-img': any;
    'amp-iframe': any;
  }
}

// The elements you list here will be accepted, and only with the attributes that you include here
declare namespace JSX {
  interface AmpImg {
    alt?: string;
    src?: string;
    width?: string;
    height?: string;
    layout?: string;
  }
  interface AmpIframe {
    src?: string;
    width?: string;
    height?: string;
    layout?: string;
    sandbox?: string;
  }
  interface IntrinsicElements {
    'amp-img': AmpImg;
  }
}
