import { Content, LoginForm, LoginHeader, Text } from "../../components";

export default function LoginTemplate() {
  return <Content>
    <LoginHeader/>
    <div className="flex flex-col items-center justify-center flex-1 mx-auto my-auto gap-6.25 h-[calc(100vh-86px)]" >
      <Text type="title">Entre na sua conta</Text>
      <LoginForm />
    </div>
  </Content>
}