import Link from 'next/link'
import { Form as LoginForm } from './form'

export default function LoginPage() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-slate-100">
      <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12">
        <h1 className="font-semibold text-2xl text-center text-gray-800">Sign In</h1>
        <LoginForm />
        <p className="text-center text-gray-800">
          Need to create an account?{' '}
          <Link className="text-indigo-500 hover:underline" href="/signup">
            Create Account
          </Link>{' '}
        </p>
      </div>
    </div>
  )
}
