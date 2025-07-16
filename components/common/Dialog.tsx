import { ReactNode, FC } from 'react'
import { Dialog } from '@headlessui/react'
import clsx from 'clsx'

export interface DialogModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}

/**
 * DialogModal: Accessible modal dialog using Headless UI.
 */
export const DialogModal: FC<DialogModalProps> = ({ isOpen, onClose, children, className }) => (
  <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
    {/* Overlay */}
    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
    {/* Centered Panel */}
    <Dialog.Panel
      className={clsx('relative bg-white w-full max-w-lg p-10 rounded-xl shadow-lg transition-all', className)}
    >
      {children}
    </Dialog.Panel>
  </Dialog>
)

export default DialogModal
