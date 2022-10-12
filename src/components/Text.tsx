import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

interface TextProps{
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

export function Text({ size = 'md', children, asChild }: TextProps){ //O size por default será md
    const Comp = asChild ? Slot : 'span';

    return(
        <span
            className={clsx
                (
                    'text-gray-100 font-sans',
                    {
                        'text-xs': size === 'sm',
                        'text-sm': size === 'md',
                        'text-md': size === 'lg',
                    }
                )
            }
        >
            {children}
        </span>
    );
}