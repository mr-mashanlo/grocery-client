import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Store {
  category: { _id: string, title: string, slug: string },
  setCategory: ( category: { _id: string, title: string, slug: string } ) => void,
}

export const useFilterStore = create( persist<Store>( set => ( {

  category: { _id: '', title: 'All products', slug: 'all' },
  setCategory: ( category ) => set( { category } )

} ), { name: 'filter' } ) );