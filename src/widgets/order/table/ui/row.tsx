import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { EllipsisVertical } from 'lucide-react';
import { type DetailedHTMLProps, type FC, type HTMLAttributes, useState } from 'react';

import { type Order } from '@/entities/order';
import { DeleteOrderForm } from '@/features/order/delete-order-form';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
  order: Order
}

const Row: FC<Props> = ( { order } ) => {
  const [ isArchiveModalOpen, setIsArchiveModalOpen ] = useState( false );
  const [ isDeleteModalOpen, setIsDeleteModalOpen ] = useState( false );

  return (
    <tr className="border-t border-zinc-200">
      <td className="p-3">
        <Menu>
          <MenuButton className="w-7.5 h-7.5 shrink-0 flex items-center justify-center text-center rounded-md cursor-pointer hover:bg-zinc-100">
            <EllipsisVertical className="w-4 h-3" />
          </MenuButton>
          <MenuItems transition anchor="bottom start" className="w-50 p-1 bg-white rounded-md border border-zinc-200 transition duration-300 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0">
            <MenuItem>
              <button onClick={() => setIsArchiveModalOpen( true )} className="w-full px-3 py-1.5 flex items-center gap-2 rounded-md cursor-pointer hover:bg-zinc-100">Archive</button>
            </MenuItem>
            <MenuItem>
              <button onClick={() => setIsDeleteModalOpen( true )} className="w-full px-3 py-1.5 flex items-center gap-2 rounded-md cursor-pointer hover:bg-zinc-100">Delete</button>
            </MenuItem>
          </MenuItems>
        </Menu>
        <Dialog open={isArchiveModalOpen} onClose={() => setIsArchiveModalOpen( false )} className="relative z-10 focus:outline-none">
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="min-h-full p-4 bg-black/10 flex items-center justify-center">
              <DialogPanel transition className="w-3xl h-120 p-4 flex items-center justify-center bg-white rounded-xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0">
                <DeleteOrderForm id={order._id} />
              </DialogPanel>
            </div>
          </div>
        </Dialog>
        <Dialog open={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen( false )} className="relative z-10 focus:outline-none">
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="min-h-full p-4 bg-black/10 flex items-center justify-center">
              <DialogPanel transition className="w-3xl h-120 p-4 flex items-center justify-center bg-white rounded-xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0">
                <DeleteOrderForm id={order._id} />
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </td>
      <td className="p-3">{order._id}</td>
      <td className="p-3">{order.status}</td>
      <td className="p-3"><span>${order.total}</span> / <span>{order.quantity} items</span></td>
      <td className="p-3">{order.createdAt}</td>
    </tr>
  );
};

export default Row;