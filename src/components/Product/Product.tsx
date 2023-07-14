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

const Product = () => {
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
        duration: 0.7
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
              src="/Logo.png" 
              alt="Test logo" 
            />

            <div className="info">
              <h4>Zendesk</h4>

              <div>
                <FiStar className="icon" />
                <span>4.4</span>

                <span className="reviews">3.6k Reviews</span>
              </div>
            </div>
          </div>

          <span className="product_top_second">$1 - 49 / Month</span>

          <span className="product_top_third">CRM, Customer Service & Sales</span>

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
                The best customer experiences are built with Zendesk. Our customer service and engagement products are powerful and flexible, and scale to meet the needs of any business. Zendesk serves over 165,000 businesses across hundreds of industries and all company sizes, offering service and support in over 60 languages.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
    </motion.div>
  )
}

export default Product