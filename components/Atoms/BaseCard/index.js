
const BaseCard = ({children}) =>{

    return(
            <div className='bg-gray-100 h-screen text-center hover:bg-gray-200 border border-gray-300 rounded-md select-none'>
               {children}
            </div>
            
        
    );
};


export default BaseCard;