import { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode,
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
    closeOnClickOutside: boolean
}

export default function Modal({ children, isOpen, setIsOpen, closeOnClickOutside = true}: ModalProps) {

    const ref = useRef<HTMLDivElement>(null)

    closeOnClickOutside && useOnClickOutside(ref, ()=> setIsOpen(!isOpen))

    if (!isOpen) {
        return null;
    }
    return <div className="fixed inset-0 bg-[#787878]/10 flex items-center justify-center backdrop-blur-md z-50 px-4">
        <div ref={ref}>{children}</div>
    </div>

}