import Navbar from "./_components/navbar";

const MarktingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full dark:bg-[#1F1f1f]">
      <Navbar />
      <main className="n-full pt-40">{children}</main>
    </div>
  );
};

export default MarktingLayout;
