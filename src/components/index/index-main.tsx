import { useAuth } from '@lib/context/auth-context';
import { CustomIcon } from '@components/ui/custom-icon';
import { Button } from '@components/ui/button';
import Link from 'next/link';

export function IndexMain(): JSX.Element {
  const { signInWithGoogle } = useAuth();

  return (
    <main className='max-w-6xl mx-auto'>
      <div className='flex flex-col items-center justify-between gap-6 p-8 lg:items-start lg:justify-center'>
        <i className='mb-0 self-center lg:mb-10 lg:self-auto'>
          <CustomIcon
            className='-mt-4 h-6 w-6 text-accent-blue lg:h-12 lg:w-12 dark:lg:text-twitter-icon'
            iconName='TwitterIcon'
          />
        </i>
        <div className='flex max-w-xs flex-col gap-4 font-twitter-chirp-extended lg:max-w-none lg:gap-16'>
          <h1
            className='text-3xl lg:text-6xl'
          >Sign in to Minka</h1>

      <section>
        home content
        Create an account or login here:
        <Link href="/login">
        <button>Sign in or Create an Account</button>
        </Link>
      </section>
          {/* <h2 className='hidden text-xl lg:block lg:text-3xl'>
            Join HeyMinka today.
          </h2> */}
        </div>
        <div className='flex max-w-xs flex-col gap-6 [&_button]:py-2 mt-6'>
          <div className='grid gap-3 font-bold'>
            {/* <Button
              className='flex justify-center gap-2 border border-light-line-reply font-bold text-light-primary transition
                         hover:bg-[#e6e6e6] focus-visible:bg-[#e6e6e6] active:bg-[#cccccc] dark:border-0 dark:bg-white
                         dark:hover:brightness-90 dark:focus-visible:brightness-90 dark:active:brightness-75'
              onClick={signInWithGoogle}
            >
              <CustomIcon iconName='GoogleIcon' /> Sign up with Google
            </Button>
            <div className='grid w-full grid-cols-[1fr,auto,1fr] items-center gap-2'>
              <i className='border-b border-light-border dark:border-dark-border' />
              <p>or</p>
              <i className='border-b border-light-border dark:border-dark-border' />
            </div> */}
            <Button
              className='cursor-not-allowed bg-accent-blue text-white transition hover:brightness-90
                         focus-visible:!ring-accent-blue/80 focus-visible:brightness-90 active:brightness-75'
            >
              Sign up with phone or email
            </Button>
            <p
              className='inner:custom-underline inner:custom-underline text-center text-xs
                         text-light-secondary inner:text-accent-blue dark:text-dark-secondary'
            >
              By signing up, you agree to the{' '}
              <a
                href='https://heyminka.com/terms'
                target='_blank'
                >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                href='https://heyminka.com/privacy'
                target='_blank'
                rel='noreferrer'
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
          {/* <div className='flex flex-col gap-3'>
            <p className='font-bold'>Already have an account? </p>
            <Button
              className='border border-light-line-reply font-bold text-accent-blue hover:bg-accent-blue/10
                         focus-visible:bg-accent-blue/10 focus-visible:!ring-accent-blue/80 active:bg-accent-blue/20
                         dark:border-light-secondary'
              onClick={signInWithGoogle}
            >
              Sign in
            </Button>
          </div> */}
        </div>
      </div>
    </main>
  );
}
