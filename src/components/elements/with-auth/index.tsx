export const withAuth = (Component: React.FC<any>) => {
  const WithAuth = (props: any) => {
    const isLogin = true;

    if (!isLogin) return (
      <div className="p-2">
        Log in first!
      </div>
    );

    return <Component {...props} />
  }
  return WithAuth;
}