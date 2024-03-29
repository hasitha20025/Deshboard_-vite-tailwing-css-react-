import Navbar from "./navbar"
import Expenses from "./expenses";


export default function App() {
  return (
    <>
       <div class="flex h-screen">
            
            <Navbar /> 
            <Expenses />                         
            
        </div>  
      
       
    </>
   
  );
}