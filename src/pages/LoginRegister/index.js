import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  LeftPanel,
  RightPanel,
  LoginForm,
  FormGroup,
  Title,
} from "./styles";

import api from "../../services/api";
import { login } from "../../services/auth";
import { ImLeaf } from "react-icons/im";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginRegister = () => {
  const history = useHistory();
  const [inputTypeToggle, setInputTypeToggle] = useState(true);
  const [user, setUser] = useState({});
  const handleChange = (value, { name }) => {
    // setRenderLoading(false);
    // setRequestFail(false);
    const newUser = { ...user, [name]: value };
    setUser(newUser);
    // if (name === "email") {
    //   if (toggleEmailInvalid(value) === true) {
    //     setToggleInvalidEmail(true);
    //     setErrorMessageEmail("Digite um email valido");
    //     setTogglePrimaryButton(false);
    //   } else {
    //     setToggleInvalidEmail(false);
    //     setErrorMessageEmail("");
    //     if (value === "") setTogglePrimaryButton(false);
    //     else setTogglePrimaryButton(true);
    //   }
    // }
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    // setRenderLoading(true);
    // setRequestStatus("active");
    // setRequestText("Checando credenciais...");
    (async () => {
      let response = null;
      try {
        response = await api.post("/user/login", user);
        //   } catch (err) {
        //     setRequestFail(true);
        //     setRequestStatus("error");
        //     setRequestText("Ops — Email não encontrado.");
      } finally {
        if (response != null) {
          //   setRequestStatus("finished");
          //   setRequestText("Efetuando login...");
          const userData = { ...user, ...response.data };
          login(userData);
          history.push("/transactions");
        }
      }
    })();
  };
  return (
    <Container>
      <LeftPanel />
      <RightPanel>
        <LoginForm>
          {/* <Form onSubmit={(e) => handleSubmit(e)}> */}
          <FormGroup>
            {/* {renderLoading && !requestFail && (
                <UserSearch className="id-badge" />
              )}
              {!renderLoading && !requestFail && (
                <IdBadge className="id-badge" />
              )} */}
            {/* {requestFail && <Lock className="id-badge" />} */}
            <ImLeaf className="id-badge" />
            <Title>Entrar</Title>
            <input
              type="text"
              id="input-email"
              data-testid="input-email"
              name="email"
              labelText="Email"
              placeholder="exemplo@ibm.com"
              value={user.email?.replace(/\s+/g, "")}
              onChange={(e) => handleChange(e.target.value, e.target)}
              //   invalidText={errorMessageEmail}
              //   invalid={toggleInvalidEmail}
            />
            <div className="password-wrapper">
              <input
                type={inputTypeToggle ? "password" : "text"}
                id="input-senha"
                data-testid="input-senha"
                name="senha"
                labelText="Senha"
                placeholder="senha"
                //   value={user.email?.replace(/\s+/g, "")}
                onChange={(e) => handleChange(e.target.value, e.target)}
                //   invalidText={errorMessageEmail}
                //   invalid={toggleInvalidEmail}
              />
              <span onClick={() => setInputTypeToggle(!inputTypeToggle)}>
                {inputTypeToggle ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </div>

            <button
              onClick={handleSubmit}
              //   disabled={!togglePrimaryButton}
              id="button-submit"
              data-testid="button-submit"
            >
              Entrar
            </button>
          </FormGroup>
          {/* {renderLoading && (
            <InlineLoading status={requestStatus} description={requestText} />
          )} */}
          {/* </Form> */}
        </LoginForm>
      </RightPanel>
    </Container>
  );
};

export default LoginRegister;
