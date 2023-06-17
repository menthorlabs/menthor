declare global {
  type navigationItem = {
    title: string | null;
    description: string | null;
    image: string | undefined;
    _path: string;
    children: navigationItem[];
  };
}

export {};
