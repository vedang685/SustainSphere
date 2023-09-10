import Link from 'next/link'
import { RegisterForm } from './form'
export default function RegisterPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
      <div className="sm:shadow-xl px-8 pb-8 pt-12
      sm:bg-white rounded-xl space-y-12">
        <h1 className="font-semibold text-gray-800 text-2xl text-center">Create your Account</h1>
        <RegisterForm />
        <p className="text-center text-gray-800">
          Have an account?{' '}
          <Link className="text-indigo-500 hover:underline" href="/signin">
            Sign in
          </Link>{' '}
        </p>
      </div>
    </div>
  )
}
