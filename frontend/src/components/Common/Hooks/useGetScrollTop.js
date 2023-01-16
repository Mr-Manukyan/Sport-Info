import { useCallback, useEffect,useState } from "react"
import { useLocation } from "react-router-dom"

const useScrollTop = () => {
    const location =  useLocation()

    const getWindowScrollTop = useCallback( () => {
      
        return {
            location : location,
            height: window.innerHeight,
            windowHeight : window.pageYOffset
        }
    },[location])
    
    const [scrollTop,setScrollTop] = useState(getWindowScrollTop)

    useEffect( () => {
        setScrollTop(getWindowScrollTop)
        const handle = () => setScrollTop(getWindowScrollTop)
        window.addEventListener('scroll',handle)
        return () => window.removeEventListener('scroll',handle)
    },[getWindowScrollTop,location])


      return scrollTop
  
}

export default useScrollTop