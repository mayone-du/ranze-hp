import { TextField, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import Router from "next/router";

const Form: React.FC = () => {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formTel, setFormTel] = useState("");

  // inputのstate
  const [inputNameError, setInputNameError] = useState(false);
  const [inputEmailError, setInputEmailError] = useState(false);
  // const [inputTelError, setInputTelError] = useState(false);
  // const [textAreaError, setTextAreaError] = useState(false);

  // form全体でエラーが有るかのチェック用state
  const [formErrors, setFormErrors] = useState(true);

  // 入力欄に変更があったときの処理
  const onChangeName = (e) => {
    setFormName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setFormEmail(e.target.value);
  };
  const onChangeTel = (e) => {
    setFormTel(e.target.value);
  };

  // formのリセット
  const resetForm = () => {
    setFormName("");
    setFormEmail("");
  };

  // 名前欄のエラーチェック
  const validateName = () => {
    if (formName === "") {
      setInputNameError(true);
    } else {
      setInputNameError(false);
    }
  };

  // email欄のエラーチェック
  const validateEmail = () => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regex.test(formEmail)) {
      setInputEmailError(false);
    } else {
      setInputEmailError(true);
    }
  };

  const validateForm = () => {
    if (!inputNameError && !inputEmailError) {
      setFormErrors(false);
    } else {
      setFormErrors(true);
    }
  };

  // state(inputのvalue)が更新された際にエラーチェックを走らせる
  useEffect(validateName, [formName]);
  useEffect(validateEmail, [formEmail]);
  useEffect(validateForm);

  // フォーム送信
  const submitForm = () => {
    const payload = {
      text: `
      お問い合わせがありました。\n
      名前: ${formName}\n
      メールアドレス:${formEmail}\n
      電話番号: ${formTel === "" ? "なし" : formTel}\n
      お問い合わせ内容\n
      テキスト。テキスト。
      `,
    };

    // Slackのwebhook(Vercelで設定する本番用)
    // const url = process.env.SLACK_WEBHOOK_URL;

    // 開発用
    const url = process.env.TEST_WEBHOOK_URL;

    
    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
    }).then(() => {
      resetForm();
      alert(`送信が完了しました。\n 1~3日以内に、送信していただいたメールアドレス(${formEmail})宛にご連絡致します。`);

      // ホーム画面へ戻す
      Router.push("/");
    });
  };

  return (
    <>
      <form className="container mx-auto py-28 flex flex-col">
        {/* 名前 */}
        <div className="my-8">
          <TextField
            type="text"
            label="名前、法人名"
            variant="outlined"
            onChange={onChangeName}
            color={inputNameError ? "secondary" : "primary"}
            helperText={inputNameError ? "必須項目です" : "ok"}
            value={formName}
          />
        </div>
        {/* メールアドレス */}
        <div className="flex">
          {inputEmailError ? (
            <p className="text-red-600 w-4">×</p>
          ) : (
            <p className="text-blue-600 w-4">○</p>
          )}
          <TextField
            type="email"
            label="メールアドレス"
            variant="outlined"
            onChange={onChangeEmail}
            color={inputEmailError ? "secondary" : "primary"}
            helperText={
              inputEmailError
                ? "必須項目です。正しい形式で入力してください"
                : "ok"
            }
            value={formEmail}
          />
        </div>
        {/* 電話番号（任意） */}
        <div>
          <TextField
            type="tel"
            label="電話番号"
            variant="outlined"
            onChange={onChangeTel}
            helperText={"任意項目"}
            value={formTel}
          />
        </div>
        <div>
          {/* 問い合わせ内容 */}
          <TextField
            type="text"
            multiline
            rows={4}
            label="お問い合わせ内容"
            variant="outlined"
          />
        </div>
        {/* 送信ボタン */}
        <div>
          <Button
            size="large"
            disabled={formErrors ? true : false}
            variant="outlined"
            color={formErrors ? "secondary" : "primary"}
            onClick={submitForm}
          >
            {formErrors ? "エラーがあります" : "送信する"}
          </Button>
        </div>
      </form>
    </>
  );
};

export { Form };
