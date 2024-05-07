import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      welcome to
      <br className='max-md:hidden'/>
      <span className="orange_gradient text-center">ChatGPT Prompt Generaator</span>
    
    </h1>
    <p>
       This is a tool for creating and sharing prompts for AI platforms such as ChatGPT
    </p>

     <Feed/>
    </section>
  )
}

export default Home