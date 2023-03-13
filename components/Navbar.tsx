import { motion, AnimatePresence } from "framer-motion"
import { ReactNode, useState } from "react"


interface Props {
    children: ReactNode;
}

const Navbar = ({ children }: Props) => {

    const [isVisible, setVisible] = useState(false)

    const handleVisibility = () => setVisible(!isVisible)

    return (
        <>
            <button className='link' onClick={handleVisibility}>Каталог 📖</button>

            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        style={{overflow: 'hidden'}}
                        className="inline-block">{children}</motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
export default Navbar   