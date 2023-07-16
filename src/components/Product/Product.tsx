import { useState } from "react"
import { 
  AnimatePresence, 
  motion 
} from "framer-motion"
import { 
  FiMessageCircle,
  FiMapPin,
  FiGlobe,
  FiArrowDownCircle,
  FiStar
} from "react-icons/fi"
import { Products } from "../../types"

const Product = ({ data } : { data: Products }) => {
  const [open, setOpen] = useState(false)

  const bodyVariant = {
    initial: {
      opacity: 0,
      height: 0
    },
    final: {
      opacity: 1,
      height: "auto",
      transition: {
        type: "spring",
        damping: 10
      }
    },
    exit: {
      opacity: 0,
      height: 0
    } 
  }

  const containerVariant = {
    initial: {
      opacity: 0,
      y: 100
    },
    final: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "linear"
      }
    }
  }

  return (
    <motion.div 
      className="product"
      variants={containerVariant}
      initial="initial"
      whileInView="final"
    >
        <div className="product_top">
          <div className="product_top_first">
            <img 
              src={data.thumbnail}
              alt={data.title}
            />

            <div className="info">
              <h4>{data.title}</h4>

              <div>
                <FiStar className="icon" />
                <span>{data.rating}</span>

                <span className="reviews">{data.stock} In Stock</span>
              </div>
            </div>
          </div>

          <span className="product_top_second">${+data.price / 2} - {data.price} / Item</span>

          <span className="product_top_third">Manufactured by {data.brand}</span>

          <ul role="list" className="links">
            <li onClick={() => setOpen(!open)}>
              {/* Style rotate... */}
              <FiArrowDownCircle />
            </li>
            <li>
              <FiMessageCircle />
            </li>
            <li>
              <FiMapPin />
            </li>
            <li>
              <FiGlobe />
            </li>
          </ul>
        </div>

        <div className="product_bottom">
          <AnimatePresence>
            {open && (
              <motion.p
                variants={bodyVariant}
                initial="initial"
                animate="final"
                exit="exit"
              >
                {data.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
    </motion.div>
  )
}

export default Product