import { useCallback, useEffect, useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";

function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { tg } = useTelegram();

  const sendData = useCallback(() => {
    tg.sendData(
      JSON.stringify({
        username,
        password,
      })
    );
  }, [username, password, tg]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", sendData);
    return () => {
      tg.offEvent("mainButtonClicked", sendData);
    };
  }, [tg, sendData]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Войти",
    });
  });

  useEffect(() => {
    if (password.length < 6 || !username) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  });

  function onChangeUsername(e) {
    setUsername(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="form">
      <h3>Введите данные для входа</h3>
      <input
        className="input"
        type="text"
        placeholder="Логин"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        className="input"
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={onChangePassword}
      />
    </div>
  );
}

export default Form;
