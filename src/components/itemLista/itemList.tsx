type Props = {
    dado : {
    title: string;
    description: string;
    image: string;

   }
}

function ListData({dado}:Props){
    
    return (
        <div className='products'>
            <img src = {dado.image} className='img-prod' />
            <br/>
             <h3 className="titulo-prod"> {dado.title}</h3>
            <br/>
            <p className="description">{dado.description}</p>
            <br/>
        </div>
 )}
 
 export default ListData

 