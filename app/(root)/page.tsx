import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
    return (
      <>
      <div className="p-4">
        <UserButton afterSignOutUrl="/" />
      </div>
      <div>
        <h1 className="right-44">Hello</h1>
      </div>
      </>
    );
  }

  export default SetupPage;