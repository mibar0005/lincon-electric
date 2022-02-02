import * as React from 'react';
import SolutionsDesktop from './SolutionsDesktop';
import SolutionsMobile from './SolutionsMobile';


function Solutions () {

const [isMobile, setIsMobile] = React.useState(false);


const handleResize = () => setIsMobile(window.innerWidth < 800 ? true: false);

React.useEffect(() => {
    //Mounting 
    if (window) {
        window.addEventListener('resize', handleResize);
    }
    return () => {
        //unmounting 
        window.removeEventListener('resize', handleResize);
    }
}, [])



    return (
        <>
            {
                isMobile ? <SolutionsMobile /> : <SolutionsDesktop />
            }
        </>
    )
}

export default Solutions;