import { useState } from 'react'
import toast from 'react-hot-toast'

interface IUseCopyToClipboardParams {
    successMessage: string
}

interface IUseCopyToClipboardReturn {
    isCopied: boolean
    onCopyToClipboard: (text: string) => Promise<void>
}

const useCopyToClipboard = (params: IUseCopyToClipboardParams): IUseCopyToClipboardReturn => {
    const { successMessage } = params
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
            toast.success(successMessage)
        } catch (err) {
            toast.error('Clipboard is not available')
        }
    }

    return { isCopied, onCopyToClipboard }
}

export default useCopyToClipboard