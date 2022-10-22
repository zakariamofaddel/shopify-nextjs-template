import { TitleBar } from "@shopify/app-bridge-react";
import {
  Card,
  Heading,
  Layout,
  Link,
  Page,
  Stack,
  TextContainer,
  Image,
  Button,
} from "@shopify/polaris";
import { useAxios } from "../client/utils/axios/authAxiosContext";

const Index = () => {
  const axios = useAxios();

  return (
    <Page narrowWidth>
      <Button
        onClick={async () => {
          /*
          Change the scopes in your .env and click this button to trigger the verifyRequest middleware on the server, which will check if the scopes you stored in your sessionStorage are the same as the scopes you have in your .env, if not it will redirect to /exitiframe and ask the user to update the app.
          */
          //! This is just a hack to test if /exitiframe works. You can remove this button once you are done testing.

          try {
            await axios.get("/api/products/count");
          } catch (error) {
            console.log("error", error);
          }
        }}
      >
        Fetch data
      </Button>
      <TitleBar title="App name" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item fill>
                <TextContainer spacing="loose">
                  <Heading>Nice work on building a Shopify app 🎉</Heading>
                  <p>
                    Your app is ready to explore! It contains everything you
                    need to get started including the{" "}
                    <Link url="https://polaris.shopify.com/" external>
                      Polaris design system
                    </Link>
                    ,{" "}
                    <Link url="https://shopify.dev/api/admin-graphql" external>
                      Shopify Admin API
                    </Link>
                    , and{" "}
                    <Link
                      url="https://shopify.dev/apps/tools/app-bridge"
                      external
                    >
                      App Bridge
                    </Link>{" "}
                    UI library and components.
                  </p>
                  <p>
                    Ready to go? Start populating your app with some sample
                    products to view and test in your store.{" "}
                  </p>
                  <p>
                    Learn more about building out your app in{" "}
                    <Link
                      url="https://shopify.dev/apps/getting-started/add-functionality"
                      external
                    >
                      this Shopify tutorial
                    </Link>{" "}
                    📚{" "}
                  </p>
                </TextContainer>
              </Stack.Item>
              <Stack.Item>
                <div style={{ padding: "0 20px" }}>
                  <Image
                    source="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
                    alt="Nice work on building a Shopify app"
                    width={120}
                  />
                </div>
              </Stack.Item>
            </Stack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Index;
