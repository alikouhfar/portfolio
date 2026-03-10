'use client'

import useCopyToClipboard from "@/hooks/useCopyToClipboard"
import clsx from "clsx"
import { Check, Copy } from "lucide-react"
import { FC, PropsWithChildren } from "react"

interface ICopyToClipboardButton extends PropsWithChildren {
    content: string
}

const CopyToClipboardButton: FC<ICopyToClipboardButton> = (props) => {
    const { content, children } = props
    const { isCopied, onCopyToClipboard } = useCopyToClipboard()


    return (
        <button
            type="button"
            disabled={isCopied}
            onClick={() => onCopyToClipboard(content)}
            className="flex cursor-pointer items-center gap-2 py-3 text-base font-light text-white/75 outline-hidden transition-all duration-300 hover:text-white/90"
        >
            <div className='size-5 relative overflow-hidden'>
                <Copy size={20} className={clsx('absolute top-1/2 left-1/2 -translate-1/2 transition-all duration-500', isCopied ? 'scale-0 blur-sm' : 'scale-100 blur-none')} />
                <Check size={20} className={clsx('absolute top-1/2 left-1/2 -translate-1/2 transition-all duration-500', isCopied ? 'scale-100 blur-none' : 'scale-0 blur-sm')} />
            </div>
            {children}
        </button>
    )
}

export default CopyToClipboardButton