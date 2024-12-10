import {createContext, useState, useContext, useEffect} from "react"
import { firestore, storage } from "../firebase"
import { getDocs,collection, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import loader from "../assets/loader.gif"
//1) creating a context
const DataContext = createContext()
//2) creating a provider
export const DataContextProvider = (props) =>{
    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(false)
    async function getAllRecipes(){
        setLoading(true)
        const snapshot = await getDocs(collection(firestore, "recipes"))
        setRecipes(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
        setLoading(false)
    }
    async function createRecipe(recipe){
        if(recipe.image){
            const storageRef = ref(storage, "recipes/" + recipe.image.name)
            const snapshot = await uploadBytes(storageRef, recipe.image)
            const imageUrl = await getDownloadURL(snapshot.ref)
            recipe.image = imageUrl
        }
        const document = await addDoc(collection(firestore, "recipes"), recipe )
        await getAllRecipes()
    }
    async function likeRecipe(recipeId,userId){
        
        const snapshot = doc(firestore, "recipes", recipeId)
        const recipe = recipes.find((recipe) => recipe.id === recipeId)
        if(recipe.likes.includes(userId)){
            recipe.likes =   recipe.likes.filter((like) => like != userId)
        }
        else{
            recipe.likes = [...recipe.likes, userId]
        }
        const index  = recipes.findIndex((recipe) => recipe.id === recipeId)
        setRecipes([...recipes.slice(0, index),{ ...recipe}, ...recipes.slice(index + 1)])
        await updateDoc(snapshot, {likes: recipe.likes})
    }
    async function bookmarkRecipe(recipeId,userId){
        
        const snapshot = doc(firestore, "recipes", recipeId)
        const recipe = recipes.find((recipe) => recipe.id === recipeId)
        if(recipe.bookmarks.includes(userId)){
            recipe.bookmarks =   recipe.bookmarks.filter((bookmark) => bookmark != userId)
        }
        else{
            recipe.bookmarks = [...recipe.bookmarks, userId]
        }
        const index  = recipes.findIndex((recipe) => recipe.id === recipeId)
        setRecipes([...recipes.slice(0, index),{ ...recipe}, ...recipes.slice(index + 1)])
        await updateDoc(snapshot, {bookmarks: recipe.bookmarks})
    }
    async function deleteRecipe(recipeId){
        const snapshot = doc(firestore, "recipes", recipeId)
        const index  = recipes.findIndex((recipe) => recipe.id === recipeId)
        setRecipes([...recipes.slice(0, index), ...recipes.slice(index + 1)])
        await deleteDoc(snapshot)
    }
    const data = {recipes, createRecipe, likeRecipe, bookmarkRecipe, deleteRecipe}
    useEffect(() => {
        getAllRecipes()
    }, [] )
    return(
        <DataContext.Provider value = {data}>
            {loading? <div className = "loader">
                <img src = {loader} alt = "loader"/>
            </div>: props.children}
        </DataContext.Provider>
    )
}
//3) creating a consumer
export const useData = () => {
    return(
        useContext(DataContext)
    )
}
