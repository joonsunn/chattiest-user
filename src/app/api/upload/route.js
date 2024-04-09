import { chattyCounter } from "./chattyCounter";

export async function GET() {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // })
  // const data = await res.json()
  const data = { message: "you have reached /upload route" };

  return Response.json({ data });
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    const buffer = Buffer.from(await file.arrayBuffer()).toString("utf-8");
    console.log(buffer);

    const results = chattyCounter(buffer);
    return Response.json({ data: results });
  } catch (error) {
    console.log(error);
  }
}
