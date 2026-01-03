import { Button, Field, Fieldset, Input, Legend } from '@headlessui/react';
import { useStore } from '@tanstack/react-form';
import { type FC, type FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import z from 'zod';

import { ClosedEyeIcon, EmailIcon, LockIcon, OpenEyeIcon, WarningIcon } from '@/shared/icons';

import useSignUp from '../model/hook';

const SignUpForm: FC = () => {
  const navigate = useNavigate();
  const form = useSignUp( { onSuccess: () => navigate( '/', { replace: true } ) } );
  const canSubmit = useStore( form.store, state => state.canSubmit );
  const metaData = useStore( form.store, state => state.fieldMeta );
  const [ isPasswordVisible, setIsPasswordVisible ] = useState<boolean>( false );

  const handleFormSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  const handlePasswordClick = () => {
    setIsPasswordVisible( prev => !prev );
  };

  const getErrorMessages = () => {
    return Object.values( metaData ).filter( field => field.errors.length ).map( field => field.errors.map( item => item.message ) );
  };

  return (
    <form onSubmit={handleFormSubmit} className="w-full sm:w-84 relative">
      <Fieldset>
        <Legend className="text-3xl text-center font-bold">Sign up</Legend>
        <form.Field name="nickname" validators={{ onChange: z.string().min( 4, 'Nickname must be at least 4 characters long' ) }} children={field =>
          <Field className="block mt-8 relative">
            <Input type="text" name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} placeholder="nickname" className="peer w-full p-5 pl-14 rounded-2xl bg-zinc-100 placeholder:text-zinc-400/50 focus:bg-transparent data-[error=true]:outline-rose-500" />
            {!field.state.meta.isValid ? <WarningIcon className="w-5 h-5 fill-red-500 absolute top-1/2 left-5 -translate-y-1/2" aria-hidden="true" /> : <EmailIcon className="w-5 h-5 fill-zinc-400/50 peer-focus:fill-black absolute top-1/2 left-5 -translate-y-1/2" aria-hidden="true" />}
          </Field> }
        />
        <form.Field name="password" validators={{ onChange: z.string().min( 8, 'Password must be at least 8 characters long' ) }} children={field =>
          <Field className="block mt-5 relative">
            <Input type={isPasswordVisible ? 'text' : 'password'} name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} placeholder="•••••••••" className="peer w-full p-5 pl-14 rounded-2xl bg-zinc-100 placeholder:text-zinc-400/50 focus:bg-transparent data-[error=true]:outline-rose-500" />
            {!field.state.meta.isValid ? <WarningIcon className="w-5 h-5 fill-red-500 absolute top-1/2 left-5 -translate-y-1/2" aria-hidden="true" /> : <LockIcon className="w-5 h-5 fill-zinc-400/50 peer-focus:fill-black absolute top-1/2 left-5 -translate-y-1/2" aria-hidden="true" />}
            <Button onClick={handlePasswordClick} type="button" className="w-6 h-6 absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer">{isPasswordVisible ? <OpenEyeIcon className="w-5 h-5 fill-zinc-400/50" /> : <ClosedEyeIcon className="w-5 h-5 fill-zinc-400/50" />}</Button>
          </Field> }
        />
        <form.Subscribe selector={state => [ state.canSubmit, state.isSubmitting ]} children={( [ canSubmit, isSubmitting ] ) =>
          <Button disabled={!canSubmit} type="submit" className="w-full mt-5 p-5 rounded-2xl bg-black text-white cursor-pointer outline-offset-3 disabled:cursor-default disabled:opacity-70">{isSubmitting ? '•••' : 'Sign up'}</Button> }
        />
      </Fieldset>
      <p className="mt-5 text-center leading-6">Already have an account? <Link to="/signin" className="font-bold decoration-[.1rem] hover:underline">Log in</Link></p>
      {!canSubmit && <p className="w-full mt-3 px-3 text-center text-red-600 absolute top-full">{getErrorMessages().join( ', ' )}</p>}
    </form>
  );
};

export default SignUpForm;