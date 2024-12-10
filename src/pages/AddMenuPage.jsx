import { FaPlus } from "react-icons/fa";
import { FaX } from "react-icons/fa6"
import Line from "../components/line/Line";
import "./AddMenuPage.css";
import { RiImageAddFill } from "react-icons/ri";
import { useData } from "../context/DataContext";
import { useState } from "react";
import { useClerk } from "@clerk/clerk-react";
function AddMenuPage(props) {
  const data = useData()
  const clerk = useClerk()
  const [recipeName, setRecipeName] = useState("")
  const [ingredient, setIngredient] = useState("")
  const [instruction, setInstruction] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [imageFile, setImageFile] = useState(null)
  const [ingredients, setIngredients] = useState([])
  const [instructionList, setInstructionList] = useState([])
  
  function handleImageSelect(event){
    const file = event.target.files[0]
    if(file){
    setImageFile(file)
    const reader = new FileReader()
    reader.onload = () => {
      if(reader.result){
        setImageUrl(reader.result)
      }
    }
    reader.readAsDataURL(file)
    }
  }
  function onSubmit(e){
    e.preventDefault()
    data.createRecipe({
      name: recipeName,
      category: "",
      cuisine: "",
      ingredients: ingredients,
      instructions: instructionList,
      likes: [],
      author: clerk.user.id,
      username: clerk.user.username,
      image: imageFile, 
      bookmarks: []
    })
  }
  return (
    <div className="container add-menu">
      <form action="" onSubmit = {onSubmit}>
        <input type="text" placeholder="recipe name" value = {recipeName} onChange = {(event) => setRecipeName(event.target.value)}/>
        <Line />
        <div className="add-menu__image">
          <p style = {{opacity: imageUrl? 0.4: 1}}>
            <RiImageAddFill />
          </p>
          <input type="file" onChange = {handleImageSelect}/>
          <img src={imageUrl} />
        </div>
        <div className="add-menu__process">
          <h3>Making Process</h3>
          <div className = "add-menu__items">
            <p>Ingredients: </p>
            <div className="add-menu__inputs  ">
              <input type="text" value = {ingredient} onChange = {(event) => setIngredient(event.target.value)} />
              {
                ingredients.map((item, index) => 
                  <div className = "add-menu__ingredient">
                    <p>{item}</p>
                    <button type = "button" onClick = {(e) => setIngredients([...ingredients.slice(0, index), ...                                        ingredients.slice(index +1)])}><FaX/></button>
                  </div>
                ) 
              }
            </div>
            <button type = "button" onClick = {() => setIngredients([...ingredients, ingredient])}><FaPlus/></button>
          </div>
          <Line/>
          <div className = "add-menu__items">
            <p>Instructions: </p>
            
            <div className="add-menu__inputs  ">
            <input type="text" value = {instruction} onChange = {(event) => setInstruction(event.target.value)}/>

            <ol>
              {
                instructionList.map((item, index) => <li className = "add-menu__ingredient">
                  {item}
                  <button type = "button" onClick = {(e) => {
                    setInstructionList([...instructionList.slice(0,index), ...instructionList.slice(index +1)])
                  }}><FaX/></button>
                  </li>)
              }                                                                                                                                                                                                                                                                                                                                        
            </ol>
            </div>
            <button type = "button" onClick = {() => setInstructionList([...instructionList, instruction])}><FaPlus/></button>

          </div>
        </div>
        <div className = "saveButton__container">
          <button className="saveButton">save</button>
        </div>

      </form>
    </div>
  );
}
export default AddMenuPage;

