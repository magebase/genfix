JS Routes (Rails -> Frontend)

Regenerate the Rails routes JS bundle and write it to `app/frontend/js/routes.js`:

```bash
bin/rails js_routes:dump
```

Import the routes in your TypeScript/React code:

```ts
import loadRoutes from "@/js/routes"; // or relative path

// then await when needed
const Routes = await loadRoutes();
const path = Routes.some_path({ id: 1 });
```

Notes:

- The rake task writes an ES module `routes.js` and a small wrapper `routes.ts` to dynamically import it.
- Excluded admin/internal routes via `config/initializers/js_routes.rb`.
