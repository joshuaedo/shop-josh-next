import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const buttonVariants = () => {
  const variant = {
    default:
      'bg-white hover:bg-black text-black hover:text-white transition duration-300 w-full justify-normal font-medium text-base',
    destructive:
      'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline:
      'border border-black text-neutral-700 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:opacity-90 hover:shadow-none',
    link: 'underline-offset-4 hover:underline text-primary font-normal',
  };

  return cva(
    'inline-flex items-center justify-center text-sm font-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
    {
      variants: {
        variant,
        size: {
          default: 'h-10 py-10 px-6',
          thin: 'h-8 px-8',
          sm: 'h-9 px-2',
          xs: 'h-8 px-1.5',
          lg: 'h-11 px-8',
          icon: 'h-10 w-10',
        },
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    }
  );
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<ReturnType<typeof buttonVariants>> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    const buttonContent = (
      <>
        {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
        {children}
      </>
    );

    const buttonElement = (
      <button
        className={cn(buttonVariants()({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {buttonContent}
      </button>
    );

    return buttonElement;
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
