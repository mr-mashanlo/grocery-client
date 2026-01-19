import { type FC, type ReactNode } from 'react';

interface Props {
  form: ReactNode,
  button?: ReactNode
}

const PageControls: FC<Props> = ( { form, button } ) => {
  return (
    <div className="w-full sm:w-150 grid grid-cols-3 items-center fixed bottom-0 left-0">
      <div className="h-15 col-span-2">{form}</div>
      <div className="h-15">{button}</div>
    </div>
  );
};

export default PageControls;