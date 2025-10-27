# Node.js Lesson 14

## What I Learned

### Route Structure and Organization

**Understanding Route Paths:**

| HTTP Method | Route Path | Purpose | Example URL |
|------------|-----------|---------|-------------|
| GET | `/admin/add-product` | Display the form page | `http://localhost:3000/admin/add-product` |
| POST | `/add-product` | Handle form submission | Form submits to `http://localhost:3000/add-product` |

**Key Points:**
- GET routes use `/admin/` prefix for organizational clarity (admin-related pages)
- POST routes can use simpler paths since they only process data, not render pages
- The form's `action` attribute points to the POST route

**Code Example:**

```javascript
// routes/admin.js

// GET route - Shows the form
router.get('/admin/add-product', (req, res, next) => {
  res.send(
    '<form action="/add-product" method="POST">
      <input type="text" name="title">
      <button type="submit">Add Product</button>
    </form>'
  );
});

// POST route - Processes the form data
router.post('/add-product', (req, res, next) => {
  console.log(req.body); // { title: 'user input' }
  res.redirect('/');
});
```

### Request Flow Diagram

```
User                    Server
  |                       |
  |  GET /admin/add-product  →  Return HTML form
  |                       |
  |  ← HTML with form     |
  |                       |
  |  Fill form & submit   |
  |                       |
  |  POST /add-product    →  Process data (req.body)
  |  (with form data)     |
  |                       |
  |  ← Redirect to /      |
  |                       |
```

### Express Router
- How to use `express.Router()` to modularize routes
- Organizing admin-related routes in separate files
- Exporting and mounting routers in the main app

### Middleware
- Understanding how middleware like `body-parser` helps parse incoming request data
- Middleware must be configured before route handlers

```javascript
// app.js
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
```

## What Was Difficult

1. **Route Path Differences**: Understanding why GET uses `/admin/add-product` but POST uses `/add-product`
   - Solution: GET paths organize UI/pages, POST paths handle actions

2. **bodyParser Configuration**: Remembering to configure middleware properly
   - Without it, `req.body` would be `undefined`

3. **Form Action Path**: Knowing what path to use in the form's `action` attribute
   - Must match the POST route path exactly
