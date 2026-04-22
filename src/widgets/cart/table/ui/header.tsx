import { type FC } from 'react';

const Header: FC = () => {
  return (
    <div className="flex items-center">
      <div className="w-13.5 h-13.5"></div>
      <div className="p-3">
        <h2 className="font-bold">Products</h2>
      </div>
    </div>
  );
};

export default Header;