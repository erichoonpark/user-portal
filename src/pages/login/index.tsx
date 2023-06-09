import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@lib/context/auth-context';
import { CustomIcon } from '@components/ui/custom-icon';
import { Button } from '@components/ui/button';

export default function LoginMain(): JSX.Element {
  const { signInWithGoogle, signInWithEmailAndPasswordWrapped } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    
    try {
      await signInWithEmailAndPasswordWrapped(email, password);
      router.push('/home');
    } catch (error) {
      console.log('Login error:', error);
    }
  };

  return (
    <main className='max-w-6xl mx-auto'>
      <div className='flex flex-col items-center justify-between gap-6 p-8 lg:items-start lg:justify-center mx-auto'>
        <i className='mb-0 self-center lg:mb-10 lg:self-auto'>
          <CustomIcon
            className='-mt-4 h-6 w-6 text-accent-blue lg:h-12 lg:w-12 dark:lg:text-twitter-icon'
            iconName='TwitterIcon'
          />
        </i>
        <div className='flex max-w-xs flex-col gap-4 font-twitter-chirp-extended lg:max-w-none lg:gap-16'>
          <h1 className='text-3xl lg:text-6xl'>Sign in to Minka</h1>
        </div>
        <div className='flex max-w-xs flex-col gap-6 [&_button]:py-2 mt-6'>
          <div className='grid gap-3 font-bold'>
            <form onSubmit={handleLogin}>
              <div>
                <input
                  type='email'
                  value={email}
                  onChange={handleEmailChange}
                  placeholder='Email'
                  className='border border-gray-300 rounded-md p-2 w-full'
                />
              </div>
              <div>
                <input
                  type='password'
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder='Password'
                  className='border border-gray-300 rounded-md p-2 w-full'
                />
              </div>
              <button
                type='submit'
                className='bg-accent-blue text-white transition hover:brightness-90
                           focus-visible:!ring-accent-blue/80 focus-visible:bg-accent-blue/80
                           active:bg-accent-blue/90 disabled:cursor-not-allowed'
                disabled={!email || !password}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
