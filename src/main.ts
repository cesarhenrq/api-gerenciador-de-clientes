import settings from "./app/configs/settings";

import app from "./app";

app.listen(settings.server.port, () =>
  console.log("Server listening on port " + settings.server.port)
);
