import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { useSignal } from "@preact/signals";
import Shower from "../components/Shower.tsx";
import HiButton from "../islands/HiButton.tsx";

export const handler: Handlers = {
  GET: (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const name = url.searchParams.get("nombre");
    return ctx.render({ name });
  },
};

const Hihihi = (props: PageProps) => {
  const SayHi = useSignal(props.data.name);
  return (
    <div class="formBody">
      <form class="formBox" method="get" target="/hihihi">
        <h3>Say hi hi hi</h3>
        <input type="text" name="nombre" placeholder={"Name"} />
        <br />
        <input type="text" name="apellido" placeholder={"Last name"} />
        <br />
        <HiButton>
          Hi!
        </HiButton>
      </form>
      <Shower
        text={SayHi}
      />
    </div>
  );
};

export default Hihihi;
