import express from "express";
import cors from "cors";
import settingRoute from "./routes/setting.route.js";
import serviceRoute from "./routes/service.routes.js";
import testimonialsRoute from "./routes/testimonials.routes.js";

const app = express();
const port = 3045;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Routes
app.use("/api/settings", settingRoute);
app.use("/api/services", serviceRoute);
app.use("/api/testimonials", testimonialsRoute);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;