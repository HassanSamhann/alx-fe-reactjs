
function Card(props) {
   let {reCard} = props;  
  return (
    <div className="card xl:w-1/5 overflow-hidden  border-2 border-cyan-500 my-5 shadow-xl rounded-md sm:w-full flex flex-col gap-3 items-center hover:shadow-2xl transition ">
      <img className="w-40 hover:scale-110 transition" src={reCard.image} alt="" />
      <h2 className="text-center text-black font-bold">{reCard.title}</h2>
      <p className="text-center text-black">{reCard.summary}</p>
    </div>
  )
}

export default Card; 