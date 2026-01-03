import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <Container>
        <div className="flex h-screen justify-center items-center gap-5">
          <Link href={"/login"}>
            <Button size={"lg"}>Log in</Button>
          </Link>
          <Link href={"/register"}>
            <Button variant={"outline"} size={"lg"}>
              Sign in
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default LandingPage;
