
const Login = () => {
  return (
    <>
        <div className="name">
            <label htmlFor="name">
            Name:
            <input type="text" id="name" name="name" /> 
            </label>
        </div>

        <div className="email">
            <label htmlFor="email">
            Email:
            <input type="email" id="email" name="email" />
            </label>
        </div>
        <div className="submit">
            <button type="submit">Submit</button>
        </div>
    </>
  )
}

export default Login