import Navbar from "./Navbar";

export default function Index({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
