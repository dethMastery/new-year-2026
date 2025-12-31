export const Card = (child: { children?: React.ReactNode }) => {
  return (
    <div className="min-w-88 max-w-[50dvw] w-fit text-jet bg-whitesmoke rounded-xl p-4">
      {child.children}
    </div>
  );
};
