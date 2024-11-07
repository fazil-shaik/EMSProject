import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link to="/">
              <span className="sr-only">Your Company</span>
              <svg className="h-10 w-auto" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#4F46E5"/>
                <path d="M20.5303 9.46967C20.2374 9.17678 19.7626 9.17678 19.4697 9.46967L10.4697 18.4697C10.1768 18.7626 10.1768 19.2374 10.4697 19.5303C10.7626 19.8232 11.2374 19.8232 11.5303 19.5303L20 11.0607L28.4697 19.5303C28.7626 19.8232 29.2374 19.8232 29.5303 19.5303C29.8232 19.2374 29.8232 18.7626 29.5303 18.4697L20.5303 9.46967ZM20.75 31V10H19.25V31H20.75Z" fill="white"/>
              </svg>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Dashboard
              </Link>
              <Link to="/employees" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Employees
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Button variant="outline">Sign in</Button>
            <Button>Sign up</Button>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Dashboard
          </Link>
          <Link to="/employees" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Employees
          </Link>
        </div>
      </nav>
    </header>
  );
}