import { Dialog, DialogPanel } from '@headlessui/react';
import { Plus } from 'lucide-react';
import { type FC, useState } from 'react';

import { CreateCategoryForm } from '@/features/category/create-category-form';

const Header: FC = () => {
  const [ isOpen, setIsOpen ] = useState( false );

  return (
    <div className="flex items-center">
      <div className="p-3">
        <button onClick={() => setIsOpen( true )} className="w-7.5 h-7.5 shrink-0 flex items-center justify-center text-center bg-zinc-100 rounded-md cursor-pointer ">
          <Plus className="w-2.5 h-2.5 stroke-3" />
        </button>
        <Dialog open={isOpen} onClose={() => setIsOpen( false )} as="div" className="relative z-10 focus:outline-none">
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="min-h-full p-4 bg-black/10 flex items-center justify-center">
              <DialogPanel transition className="w-3xl h-120 p-4 flex items-center justify-center bg-white rounded-md duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0">
                <CreateCategoryForm />
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>
      <div className="p-3">
        <h2 className="font-bold">Categories</h2>
      </div>
    </div>
  );
};

export default Header;