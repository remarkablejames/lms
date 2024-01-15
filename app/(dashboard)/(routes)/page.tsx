import Image from 'next/image'
import {Button} from "@/components/ui/button";
import {UserButton} from "@clerk/nextjs";

export default function Home() {
  return (
    <>
        <UserButton afterSignOutUrl="/" />
      <h1>Hello world</h1>
      <Button>Click me</Button>
    </>
  )
}
