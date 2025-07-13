import React, { ReactNode } from 'react'
import { Dialog } from '@headlessui/react'
import clsx from 'clsx'

interface DialogModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}

export default function DialogModal({ isOpen, onClose, children, className }: DialogModalProps) {
  return (
    <>
      <Dialog open={isOpen} onClose={onClose}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center z-5">
          <Dialog.Panel className={clsx('bg-white w-full max-w-lg p-10 rounded-xl shadow-lg duration-200', className)}>
            {children}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
