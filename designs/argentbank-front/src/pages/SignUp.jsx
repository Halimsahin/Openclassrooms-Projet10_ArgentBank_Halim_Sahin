import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import SignUpForm from '../components/SignUpForm'

export default function SignUp() {
  document.title = 'Argent Bank - Sign Up'
  return (
    <>
      <Navigation />
      <main className="main bg-dark">
        <SignUpForm />
      </main>
      <Footer />
    </>
  )
}