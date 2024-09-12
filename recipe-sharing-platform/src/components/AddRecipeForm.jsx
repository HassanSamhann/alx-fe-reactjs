
function AddRecipeForm() {


  return (
    <>
    <form className="">
    <label htmlFor="title">title</label>
    <input  type="textarea"  name="title" />
    <label htmlFor="ingredients">ingredients</label>
    <input type="textarea" name="ingredients" />
    <input type="submit" value="submit" />
    </form>
    </>
   
  )
}

export default AddRecipeForm ; 