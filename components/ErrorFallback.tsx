type Props = {
  error: Error
  resetErrorBoundary: () => void
}

export default function ErrorFallback({ error, resetErrorBoundary }: Props) {
  return (
    <div role="alert" className="w-full">
      <p className="font-bold text-2xl">Something went wrong:</p>
      <pre className="text-red-500">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-2 py-4 px-8 text-center rounded-md bg-orange-500 hover:bg-orange-600 text-white"
      >
        Try again
      </button>
    </div>
  )
}
