import Head from "next/head";
import { Header } from "../components/header/Header";
import { Wrapper } from "../components/Wrapper";


const Profile: React.FC = () => {
  return (
    <>
      <Head>
        <title>profile</title>
        <meta name="description" content="meta description" />
      </Head>
      <Header title="profile" />
      <Wrapper>
        <div>
          <section>
            
          </section>
        </div>
      </Wrapper>
    </>
  )
}

export default Profile;