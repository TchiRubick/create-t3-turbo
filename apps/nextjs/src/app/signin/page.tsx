import { signin } from "@acme/lucia/actions";

export default function Page() {
  return (
    <>
      <h1>Sign in</h1>
      <form action={signin}>
        <label htmlFor="identifier">Username</label>
        <input name="identifier" id="identifier" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <br />
        <button>Continue</button>
      </form>
    </>
  );
}
