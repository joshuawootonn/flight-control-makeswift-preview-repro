export default function handler(req, res) {
  res.status(200).json({
    req: {
      headers: req.headers,
      httpVersion: req.httpVersion,
      method: req.method,
      url: req.url,
      query: req.query,
      ["x-forwarded-proto"]: req.headers["x-forwarded-proto"],
      ["x-forwarded-ssl"]: req.headers["x-forwarded-ssl"],
      ["X-Forwarded-Ssl"]: req.headers["X-Forwarded-Ssl"],
    },
  });
}
