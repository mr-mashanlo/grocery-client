import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { EllipsisVertical } from 'lucide-react';
import { type DetailedHTMLProps, type FC, type HTMLAttributes, useState } from 'react';

import { type Image } from '@/entities/image';
import { DeleteImageForm } from '@/features/image/delete-image-form';
import { UpdateImageForm } from '@/features/image/update-image-form';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
  image: Image
}

const Row: FC<Props> = ( { image } ) => {
  const [ isUpdateModalOpen, setIsUpdateModalOpen ] = useState( false );
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
              <button onClick={() => setIsUpdateModalOpen( true )} className="w-full px-3 py-1.5 flex items-center gap-2 rounded-md cursor-pointer hover:bg-zinc-100">Edit</button>
            </MenuItem>
            <MenuItem>
              <button onClick={() => setIsDeleteModalOpen( true )} className="w-full px-3 py-1.5 flex items-center gap-2 rounded-md cursor-pointer hover:bg-zinc-100">Delete</button>
            </MenuItem>
          </MenuItems>
        </Menu>
        <Dialog open={isUpdateModalOpen} onClose={() => setIsUpdateModalOpen( false )} className="relative z-10 focus:outline-none">
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="min-h-full p-4 bg-black/10 flex items-center justify-center">
              <DialogPanel transition className="w-3xl h-120 p-4 flex items-center justify-center bg-white rounded-xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0">
                <UpdateImageForm image={image} />
              </DialogPanel>
            </div>
          </div>
        </Dialog>
        <Dialog open={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen( false )} className="relative z-10 focus:outline-none">
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="min-h-full p-4 bg-black/10 flex items-center justify-center">
              <DialogPanel transition className="w-3xl h-120 p-4 flex items-center justify-center bg-white rounded-xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0">
                <DeleteImageForm id={image._id} />
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </td>
      <td>
        <img src={image.url} alt={image.alt} className="block w-full aspect-square object-cover" />
      </td>
      <td className="p-3">{image.path}</td>
      <td className="p-3">{image.alt}</td>
    </tr>
  );
};

export default Row;