import "./Form.css"
function Form(props){
    return <div className = 'form__container'>
        <input type = "email" placeholder="email"/>
        <input type = "password" placeholder="password"/>
        <button>log in</button>
    </div>
}
export default Form