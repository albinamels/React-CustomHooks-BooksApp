import { Button } from "reactstrap";

export const Home = ({ handleUserLogin }) => {
  return (
    // in order to see Dashboard user must sign in
    <div className="home-page p-5">
      <Button onClick={handleUserLogin}>Sign In</Button>
    </div>
  );
};
