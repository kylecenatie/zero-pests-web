export default function MainLayout({ children }) {
  return (
    <>
      <header>This is the header</header>
      <main>{children}</main>
      <footer>This is the footer</footer>
    </>
  );
}
