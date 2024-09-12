import {Link} from 'react-router-dom'
function Card(props) {
   let {reCard} = props;  
  return (
    <div className="card xl:w-1/5 overflow-hidden  border-2 border-cyan-500 my-5 shadow-xl rounded-md sm:w-full flex flex-col justify-between items-center hover:shadow-2xl transition ">
      <img className="w-40 hover:scale-110 transition my-2" src={reCard.image} alt="" />
      <h2 className="text-center text-black font-bold">{reCard.title}</h2>
      <p className="text-center text-black">{reCard.summary}</p>
      <Link className="px-10 py-3 bg-cyan-500 hover:bg-cyan-700 rounded-lg transition mb-2   "  to={`/recipe/${reCard.id}`} >more details</Link>
    </div>
  )
}

export default Card; 