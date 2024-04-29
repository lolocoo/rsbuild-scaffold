const Home = () => {
  const handle = () => {
    throw new Error('This is an error message.')
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handle}>click</button>
    </div>
  )
}

export default Home
