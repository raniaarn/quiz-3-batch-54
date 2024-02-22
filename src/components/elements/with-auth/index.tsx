export const withAuth = (Component: React.FC<any>) => {
  const WithAuth = (props: any) => {
    const isLogin = false;

    if (!isLogin) return (
      <div className="p-2 bg-[#8478bf] text-white pr-4">
        Log in first!
      </div>
    );

    return <Component {...props} />
  }
  return WithAuth;
}