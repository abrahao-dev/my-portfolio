export default function BlogLoading() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="text-center mb-12 animate-pulse">
        <div className="h-12 w-48 bg-secondary/20 rounded-lg mx-auto mb-4"></div>
        <div className="h-6 w-96 bg-secondary/20 rounded-lg mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-secondary/10 rounded-lg p-6 h-64">
              <div className="h-4 w-20 bg-secondary/20 rounded mb-4"></div>
              <div className="h-6 w-full bg-secondary/20 rounded mb-2"></div>
              <div className="h-4 w-3/4 bg-secondary/20 rounded mb-4"></div>
              <div className="h-16 w-full bg-secondary/20 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
