import { chattyCounter } from "./chattyCounter";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const formDataArray = Array.from(formData.values());
    // console.log(formDataArray);

    let buffers = "";

    for (let i = 0; i < formDataArray.length; ++i) {
      const buffer = Buffer.from(await formDataArray[i].arrayBuffer()).toString(
        "utf-8"
      );
      buffers += buffer;
    }

    const results = chattyCounter(buffers);

    return Response.json({ data: results });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "unable to read file(s)" });
  }
}
