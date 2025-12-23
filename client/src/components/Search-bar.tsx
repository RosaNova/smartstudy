import { Search } from "lucide-react"

const Searchbar = () => {
  return (
      <div className="relative mb-10 w-full max-w-sm">
      <input
        type="text"
        placeholder="Find a Task You want do..."
        className="w-full rounded-xl font-bricolage focus:scale-105 duration-200 bg-orange/30 px-5 py-2  text-base text-orange shadow-medium placeholder:text-orange transition-smooth focus:shadow-hover focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-background md:text-md"
       />
        <Search className="h-6 w-6 absolute right-3 top-2 text-orange" strokeWidth={2.5} />
    </div>
  )
}

export default Searchbar;