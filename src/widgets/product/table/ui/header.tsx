import { Plus } from 'lucide-react';
import { type FC } from 'react';
import { Link } from 'react-router';

const Header: FC = () => {
  return (
    <div className="flex items-center">
      <div className="p-3">
        <Link to="/admin/products/create" className="w-7.5 h-7.5 shrink-0 flex items-center justify-center text-center bg-zinc-100 rounded-md cursor-pointer">
          <Plus className="w-2.5 h-2.5 stroke-3" />
        </Link>
      </div>
      <div className="p-3">
        <h2 className="font-bold">Products</h2>
      </div>
    </div>
  );
};

export default Header;