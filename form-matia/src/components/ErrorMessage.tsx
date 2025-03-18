
export default function ErrorMessage({children}:{children: React.ReactNode}) {
  return (
    <div className="text-red-600 text-center font-bold p-3 uppercase rounded-md my-5 bg-red-100">
      {children}
    </div>
  )
}
