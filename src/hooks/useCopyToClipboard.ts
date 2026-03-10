import { useState } from 'react'
import toast from 'react-hot-toast'

interface IUseCopyToClipboardReturn {
    isCopied: boolean
    onCopyToClipboard: (text: string) => Promise<void>
}

const useCopyToClipboard = (): IUseCopyToClipboardReturn => {
    const [isCopied, setIsCopied] = useState(false)

    const onCopyToClipboard = async (text: string) => {
        if (!navigator.clipboard) {
            toast.error('Clipboard is not available')
            return
        }

        try {
            setIsCopied(true)
            await navigator.clipboard.writeText(text)
            setTimeout(() => setIsCopied(false), 3000)
            toast.success('Content copied successfully')
        } catch (err) {
            toast.error('Clipboard is not available')
        }
    }

    return { isCopied, onCopyToClipboard }
}

export default useCopyToClipboard