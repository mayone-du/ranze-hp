import { TextField, Button } from "@material-ui/core";
import { useState } from "react";

const Form: React.FC = () => {

  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  
  const inputName = (e) => {
    setFormName(e.target.value);
  }
  
  const inputEmail = (e) => {
    setFormEmail(e.target.value);
  }

  const resetForm = () => {
    setFormName("");
    setFormEmail("");
  }
  
  const submitForm = (e) => {
    e.preventDefault();
    const payload = {
      text: `お問い合わせ内容\n ${formName} , ${formEmail}`
    }

    const url = "https://hooks.slack.com/services/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";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
    }).then(() => {
      resetForm();
      console.log(formEmail, formName);
      alert("送信が完了しました。")
    })
  }


  return (
    <>
      <form onSubmit={submitForm} className="container mx-auto py-28">
        <TextField label="名前" required variant="outlined" onChange={inputName} value={formName} />
        <TextField label="メールアドレス" variant="outlined" color="primary" onChange={inputEmail} value={formEmail} />
        <Button type="submit" size="large" variant="outlined" >SUBMIT</Button>
      </form>
    </>
  );
};


export { Form };