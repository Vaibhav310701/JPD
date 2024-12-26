import { verifyToken } from "@/utils/jwt";

export default function authMiddleware(handler) {
  return async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    try {
      const decoded = verifyToken(token);
      req.userId = decoded.userId;
      return handler(req, res);
    } catch {
      return res.status(401).json({ error: "Invalid token" });
    }
  };
}
