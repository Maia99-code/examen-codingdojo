import { useForm } from "react-hook-form"
import { useComics } from "../context/ComicContext";

function ComicFormPage() {
  const {register, handleSubmit } = useForm()
  const {createComics} = useComics()

  const onSubmit = handleSubmit((data) => {
    createComics(data)   
  })

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form>
        <input 
          type="text" 
          placeholder="Title"
          {...register("title")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />

        <textarea
          rows="3"
          placeholder="Description"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        ></textarea>

        <button>Save</button>
      </form>
    </div>
  );
}

export default ComicFormPage;
