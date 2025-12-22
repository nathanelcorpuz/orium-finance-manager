import Nav from "./_components/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm">
      <Nav />
      {children}
    </div>
  );
}
