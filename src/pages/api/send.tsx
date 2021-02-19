// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default (req: any, res: any) => {
  if (req.method === "POST") {
    res.status("200").json(req.body);
  } else {
    console.log("no POST");
  }
};
