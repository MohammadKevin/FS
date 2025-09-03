// POST Settings
export async function postSettings(data: {
  name: string;
  role: string;
  description: string;
}) {
  const res = await fetch("http://localhost:3005/api/settings/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to post settings");
  return res.json();
}

// POST Service
export async function postService(data: {
  part: string;
  descriptionPart: string;
}) {
  const res = await fetch("http://localhost:3005/api/service/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to post service");
  return res.json();
}

// POST Testimonial
export async function postTestimonial(data: {
  namePeople: string;
  descriptionstest: string;
}) {
  const res = await fetch("http://localhost:3005/api/testimonials/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to post testimonial");
  return res.json();
}

// GET Service
export async function getServices() {
  const res = await fetch("http://localhost:3005/api/service/");
  return res.json();
}

// GET Testimonials
export async function getTestimonials() {
  const res = await fetch("http://localhost:3005/api/testimonials/");
  return res.json();
}
