import SearchButton from '../SearchButton'

export default function SearchBox() {
  return (
    <div className=" relative flex h-[2rem] w-[2rem] items-center justify-center">
      <div className="absolute m-auto scale-[1.7] transform">
        <SearchButton />
      </div>
    </div>
  )
}
