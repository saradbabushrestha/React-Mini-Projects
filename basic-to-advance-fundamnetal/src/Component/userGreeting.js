export const UserGreeting = () => {
  const isLoggedin = false;
  //   return <div>Welcome {isLoggedin ? "Sarad" : "Guest"}</div>;
  return <div>Welcome {isLoggedin && "Sarad"}</div>;
};
