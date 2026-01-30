import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';
import { Link } from 'react-router';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Header: FC<Props> = ( props ) => {
  return (
    <header className="flex items-center gap-8 sm:gap-15" {...props}>
      <Link to="/">Grocery</Link>
      <nav className="hidden sm:block ml-auto">
        <ul className="flex items-center gap-8 sm:gap-15">
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;