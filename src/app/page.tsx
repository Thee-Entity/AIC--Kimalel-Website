import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default async function Home() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Supabase Connection Test</h1>
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Data from 'todos' table:</h2>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            {JSON.stringify(todos, null, 2)}
          </pre>
        </div>
      </main>
      <Footer />
    </div>
  )
}
