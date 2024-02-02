import { Link } from "@remix-run/react";
import { Button, Card, Layout, Page, Text } from "@shopify/polaris";
import * as React from "react";

export interface IAppProps {}

const Index = (props: IAppProps) => {
  return (
    <Page>
      <ui-title-bar title="task-operation">
        <Layout>
          <Layout.Section>
            <Card>
              <Text as="h4" variant="headingMd">
                Export
              </Text>
              <Text as="h6">Some text </Text>
              <br />
              <Link to="/app/exportform">
                <Button variant="primary">Click</Button>
              </Link>
            </Card>
          </Layout.Section>
        </Layout>
      </ui-title-bar>
    </Page>
  );
};
export default Index;
