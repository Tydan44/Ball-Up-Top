import Test from "../components/Test";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">Ball Up Top</h1>
      <p className="text-lg mb-6">✅ If you're seeing this, the build worked!</p>
      <Test />
    </div>
  );
}
