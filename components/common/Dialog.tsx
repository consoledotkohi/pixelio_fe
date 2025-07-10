import { Dialog } from '@headlessui/react'

export default function DialogModal({ isOpen, onClose }) {
  return (
    <>
      <Dialog open={isOpen} onClose={onClose}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="bg-white p-6 rounded">
            <Dialog.Title className="text-lg font-bold">모달 제목</Dialog.Title>
            <Dialog.Description>여기는 설명입니다.</Dialog.Description>

            <p>모달 내용</p>
            <button onClick={onClose}>닫기</button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
