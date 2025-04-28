import '@testing-library/jest-dom';


if (!global.crypto) {
  global.crypto = {};
}
global.crypto.randomUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};


jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  useSearchParams: () => new URLSearchParams(''),
  usePathname: () => '/',
}));


jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, fill, className, ...props }) => {
    
    const validProps = {};
    const allowedProps = ['id', 'style', 'onClick', 'onMouseEnter', 'onMouseLeave']; 
    for (const key in props) {
      if (allowedProps.includes(key)) {
        validProps[key] = props[key];
      }
    }

    
    const fillStyles = fill
      ? { objectFit: 'cover', width: '100%', height: '100%', position: 'absolute' }
      : {};

    
    const combinedClassName = [className, fill ? 'fill-image' : ''].filter(Boolean).join(' ');

    
    return (
      <img
        src={src}
        alt={alt}
        style={{ ...fillStyles, ...props.style }}
        className={combinedClassName || undefined}
        {...validProps}
      />
    );
  },
}));


jest.mock('axios', () => {
  const mockAxios = {
    get: jest.fn(() => Promise.resolve({ data: {} })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
    put: jest.fn(() => Promise.resolve({ data: {} })),
    delete: jest.fn(() => Promise.resolve({ data: {} })),
    create: jest.fn(() => mockAxios),
  };
  return {
    __esModule: true,
    default: mockAxios,
  };
});
