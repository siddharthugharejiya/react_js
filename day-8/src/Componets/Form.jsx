function Form(){
    function add(){
        alert("succefully")
    }
    return(
        <>
        <form action="" onSubmit={add}>
            <input type="email" />
            <input type="password" />
            <button type="submit" >button</button>
        </form>
        </>
    )
}
export default Form