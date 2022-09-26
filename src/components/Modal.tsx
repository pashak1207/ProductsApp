interface ModalProps{
    children : React.ReactNode
    title : string
    onClose : () => void
}

export const Modal = ({children, title, onClose} : ModalProps)=>{

    return (
        <>
            <div
            onClick={onClose}
            style={{
                background: "#000",
                opacity: "0.5",
                position: "fixed",
                top: "0",
                left: "0",
                bottom: "0",
                right: "0"
            }}
            />

            <div className="w-[500px] p-5 rounded bg-white fixed top-10 left-1/2 -translate-x-1/2">
                <h1 className="text-center text-2xl">{title}</h1>
                {children}
            </div>
        </>
    )
}