import Link from 'next/link'
const Form=({type, handleSubmit, submitting, posts, setPosts})=>{
  return(
    <section className='text-center items-center flex flex-col justify-center'>
    <form onSubmit={handleSubmit}>  
    <h1>
      {type} Post
    </h1>
    <p>{type} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore corrupti voluptatum voluptas, aliquid quibusdam molestiae incidunt neque veniam, eos unde, placeat culpa praesentium repudiandae blanditiis nemo corporis labore. Voluptatibus, ipsa?</p>
    
      <label className='flex flex-col gap-2 items-center'>
        <span>Your Ai</span>
        <textarea  className='w-40 h-52 text-black' value={posts.prompt} onChange={(e)=>setPosts({...posts,prompt:e.target.value})} placeholder='Prompt' required />
      </label>
      <label className='flex flex-col gap-2 items-center'>
        <span>Tag</span>
        <input  className='text-black' value={posts.tag} onChange={(e)=>setPosts({...posts,tag:e.target.value})} required placeholder='hhhhhhhh' />
      </label>
      <div className='flex flex-row justify-end mt-3'>
        <Link href={'/'} className='bg-blue-700 rounded-full mx-1 p-1'>Cancel</Link>
        <button disabled={submitting}  type='submit' className='bg-blue-700 rounded-full mx-1 p-1'>{submitting?`${type}ing...`:type}</button>
      </div>
    </form>
    
    
    
    
    </section>
  )
}
export default Form