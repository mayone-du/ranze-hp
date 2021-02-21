import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormHelperText,
  FormControl,
  FormLabel,
  FormControlLabel,
} from "@material-ui/core";
import { RadioButtonUnchecked, Clear, Send } from '@material-ui/icons';
import { useEffect, useState } from "react";
import Router from "next/router";

const Form: React.FC = () => {
  // inputのvalueのstate
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formRadio, setFormRadio] = useState("");
  const [formText, setFormText] = useState("");

  // inputのerrorのstate
  const [inputNameError, setInputNameError] = useState(false);
  const [inputEmailError, setInputEmailError] = useState(false);
  const [inputRadioError, setInputRadioError] = useState(false);
  const [inputTextError, setInputTextError] = useState(false);

  // form全体でエラーがあるかのチェック用state
  const [formErrors, setFormErrors] = useState(true);

  // 入力欄に変更があったときの処理
  const onChangeName = (e) => {
    setFormName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setFormEmail(e.target.value);
  };
  const onChangeRadio = (e) => {
    setFormRadio(e.target.value);
  };
  const onChangeText = (e) => {
    setFormText(e.target.value);
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

  // radio欄のエラーチェック
  const validateRadio = () => {
    if (formRadio === "") {
      setInputRadioError(true);
    } else {
      setInputRadioError(false);
    }
  };

  // textAreaのエラーチェック
  const validateText = () => {
    if (formText.length >= 1000) {
      setInputTextError(true);
    } else {
      setInputTextError(false);
    }
  };

  // form全体のエラーチェック
  const validateForm = () => {
    if (
      !inputNameError &&
      !inputEmailError &&
      !inputRadioError &&
      !inputTextError
    ) {
      setFormErrors(false);
    } else {
      setFormErrors(true);
    }
  };

  // state(inputのvalue)が更新された際にエラーチェックを走らせる
  useEffect(validateName, [formName]);
  useEffect(validateEmail, [formEmail]);
  useEffect(validateRadio, [formRadio]);
  useEffect(validateText, [formText]);
  useEffect(validateForm);

  // formのリセット
  const resetForm = () => {
    setFormName("");
    setFormEmail("");
    setFormRadio("");
    setFormText("");
  };

  // フォーム送信
  const submitForm = () => {
    const payload = {
      text: `
      お問い合わせがありました。\n
      名前: ${formName}\n
      メールアドレス:${formEmail}\n
      お問い合わせ種別: ${formRadio}\n
      お問い合わせ内容\n
      ${formText}
      `,
    };

    // Slackのwebhook(Vercelで設定する本番用)
    // const url = process.env.SLACK_WEBHOOK_URL;

    // 開発用（挙動確認は本番にmergeしないと無理）
    const url = process.env.TEST_WEBHOOK_URL;

    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
    }).then(() => {
      resetForm();
      alert(
        `送信が完了しました。\n 1~3日以内に、送信していただいたメールアドレス(${formEmail})宛にご連絡致します。`
      );

      // ホーム画面へ戻す
      Router.push("/");
    });
  };

  return (
    <>
      <form className="container mx-auto py-28 flex flex-col">
        <h3>お問合せフォーム</h3>

        {/* 名前 */}
        <div className="flex my-4">
          {inputNameError ? (
            <Clear color="error" />
          ) : (
            <RadioButtonUnchecked color="primary" />
          )}
          <TextField
            type="text"
            label="名前、法人名"
            placeholder="山田 太郎"
            variant="outlined"
            onChange={onChangeName}
            color={inputNameError ? "secondary" : "primary"}
            helperText={inputNameError ? "必須項目です" : "ok"}
            value={formName}
          />
        </div>

        {/* メールアドレス */}
        <div className="flex my-4">
          {inputEmailError ? (
            <Clear color="error" />
          ) : (
            <RadioButtonUnchecked color="primary" />
          )}
          <TextField
            type="email"
            label="メールアドレス"
            placeholder="example@info.com"
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

        {/* ラジオボタン */}
        <div className="flex my-4">
          {inputRadioError ? (
            <Clear color="error" />
          ) : (
            <RadioButtonUnchecked color="primary" />
          )}
          <FormControl component="fieldset">
            <FormLabel component="legend">
              お問い合わせの種類
              <FormHelperText>必須項目です。</FormHelperText>
            </FormLabel>
            <RadioGroup
              onChange={onChangeRadio}
              value={formRadio}
              aria-label="お問い合わせの種類"
            >
              <FormControlLabel
                value="Consultation"
                control={<Radio />}
                label="気軽な相談"
              />
              <FormControlLabel
                value="Offer"
                control={<Radio />}
                label="依頼したい"
              />
              <FormControlLabel
                value="Other"
                control={<Radio />}
                label="その他"
              />
            </RadioGroup>
          </FormControl>
        </div>

        {/* 問い合わせ内容 */}
        <div className="my-4">
          <TextField
            type="textarea"
            multiline
            rows={4}
            label="お問い合わせ内容（任意）"
            variant="outlined"
            value={formText}
            onChange={onChangeText}
            helperText={
              inputTextError ? "1000文字以内で入力してください。" : "ok"
            }
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
            <span className={formErrors ? "line-through" : null}>送信する<Send /></span>
          </Button>
          <FormHelperText>
            {!formErrors
              ? "ok"
              : inputNameError
              ? "名前を入力してください"
              : inputEmailError
              ? "メールアドレスを入力してください。"
              : inputRadioError
              ? "お問い合わせ種別を選択してください。"
              : inputTextError
              ? "お問い合わせ内容に不備があります。"
              : null}
          </FormHelperText>
        </div>
      </form>
    </>
  );
};

export { Form };
