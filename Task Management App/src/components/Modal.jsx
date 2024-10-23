import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'
import { Button } from './Button';

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {

    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })

    return (
        createPortal(<dialog
            ref={dialog}
            className='backdrop:bg-stone-900/90 backdrop-blur-sm p-5 rounded-md'
        >
            {children}
            <form method='dialog' className='text-right'>
                <Button classes='border-none mt-4'>
                    {buttonCaption}
                </Button>
            </form>
        </dialog>, document.getElementById('modal-root'))
    )
})

export default Modal;