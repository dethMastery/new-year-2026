import { bg } from "../modules/data";

export const Layout = (child: { children: React.ReactNode }) => {
  const bgData = bg[Math.floor(Math.random() * bg.length)];

  return (
    <div
      className="w-full h-screen bg-center! bg-cover! bg-no-repeat!"
      style={{ background: `url(${bgData.background})` }}
    >
      <div className="w-full h-full flex justify-center items-center bg-linear-to-tr from-drop-overlay to-overlay backdrop-blur-md">
        {child.children}
      </div>
    </div>
  );
};
