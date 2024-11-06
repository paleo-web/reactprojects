import CardMain from "./CardMain"

function Main({ Products}){
    
    return(
        <div className="grid grid-cols-3 gap-4 ">

            {
                Products.map((Product, ind) =><CardMain key={ind} Product={Product}/>)
            }
            </div>
    )
}

export default Main