import app from "./infraestructure/http/server";
import { initDatabase } from "./infraestructure/database/dataSource";

const PORT = 3000;

(async () => {
  await initDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
