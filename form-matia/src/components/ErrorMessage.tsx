
export default function ErrorMessage({children}:{children: React.ReactNode}) {
  return (
    <div className="text-red-600 text-center text-sm font-bold p-2 uppercase rounded-md my-2 bg-red-100">
      {children}
    </div>
  )
}
