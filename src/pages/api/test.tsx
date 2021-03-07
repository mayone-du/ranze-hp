// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default (req: any, res: any) => {
  if (req.method === "GET") {
    const obj = { key: "value" };
    res.status("200").json(obj);
  } else {
    console.log("error: Not GET request");
  }
};
