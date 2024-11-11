import Header from "../components/Header";

export default function EventLayout({children}) {
  return (
    <>
      <Header />
      {children}
    </>
    /* Footer */
  )
}
