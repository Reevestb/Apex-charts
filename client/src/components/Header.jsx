import { Link } from "react-router-dom";
import { Button, Flex, Heading, Card } from "@radix-ui/themes";

export default function Header() {
  return (
    <>
      <Card>
        <Flex direction="row" align="center" justify="between" wrap="wrap">
          <Heading>Apex.js charts - Data visualisation</Heading>
          <Flex gap="2">
            <Button>
              <Link className="link-text" to="/">
                Home
              </Link>
            </Button>
            <Button>
              <Link className="link-text" to="/api">
                Api
              </Link>
            </Button>
            <Button>
              <Link className="link-text" to="/dashboard">
                Dashboard
              </Link>
            </Button>
          </Flex>
        </Flex>
      </Card>
    </>
  );
}
