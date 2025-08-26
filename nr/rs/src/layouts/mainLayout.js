import BottomQuickSlot from "./bottomQuikSlot";
import Header from "./header";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <BottomQuickSlot />
    </>
  );
}
