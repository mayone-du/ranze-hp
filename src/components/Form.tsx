import { TextField, Button } from "@material-ui/core";

const Form: React.FC = () => {

  const formActionPath = "/api/send";

  return (
    <>
      <form method="POST" action={formActionPath} className="container mx-auto py-28">
        <TextField label="名前" variant="outlined" name="text" />
        <Button type="submit" size="large" variant="outlined">SUBMIT</Button>
      </form>
    </>
  );
};



export { Form };
