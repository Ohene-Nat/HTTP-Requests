import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello Everyone</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Nathaniel</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>email: nathaniel@example.com</p>");
});

app.get("/products", (req, res) => {
  const products = [
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 20 },
    { id: 3, name: "Product C", price: 30 },
  ];
  res.json(products);
});

app.get("/services", (req, res) => {
  res.send("<h1>Our Services</h1><ul><li>Web Development</li><li>Mobile App Development</li><li>SEO Optimization</li></ul>");
});

app.get("/blog", (req, res) => {
  res.send("<h1>Blog</h1><p>Welcome to our blog! Stay tuned for updates.</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
