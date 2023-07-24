import Navbar from "../navbar/index ";

export default function Leyout( {children} ) {
  return(
    <>
    <div>
      <Navbar/>
      {children}
    </div>
    </>
  )
};